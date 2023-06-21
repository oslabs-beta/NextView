import { trace, context } from '@opentelemetry/api';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import {
  SimpleSpanProcessor,
  ConsoleSpanExporter,
  ParentBasedSampler,
  TraceIdRatioBasedSampler,
  Span,
} from '@opentelemetry/sdk-trace-node';
import { IncomingMessage } from 'http';

// ADDITIONAL INSTRUMENTATION:
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
// const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');

// Trying to convert the CommonJS "require" statements below to ES6 "import" statements:
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { MongooseInstrumentation } from '@opentelemetry/instrumentation-mongoose';
import { PgInstrumentation } from '@opentelemetry/instrumentation-pg';
import { MongoDBInstrumentation } from '@opentelemetry/instrumentation-mongodb';

export const nextView = (serviceName) => {
  const collectorOptions = {
    url: 'http://www.nextview.dev/api',
    headers: {
      API_KEY: `${process.env.API_KEY}`,
      NextView: 'Next.js Tracing Information',
      // an optional object containing custom headers to be sent with each request will only work with http
    },
    // concurrencyLimit: 10, // an optional limit on pending requests
  };

  const sdk = new NodeSDK({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: `${process.env.Service_Name}`,
    }),
    // spanProcessor: new SimpleSpanProcessor(new ConsoleSpanExporter()),
    spanProcessor: new SimpleSpanProcessor(
      new OTLPTraceExporter(collectorOptions),
    ),
    sampler: new ParentBasedSampler({
      root: new TraceIdRatioBasedSampler(1),
    }),
    instrumentations: [
      new HttpInstrumentation({
        requestHook: (span, reqInfo) => {
          span.setAttribute('request-headers', JSON.stringify(reqInfo));
        },
        // responseHook: (span, res) => {
        //   // Get 'content-length' size:
        //   let size = 0;
        //   res.on('data', (chunk) => {
        //     size += chunk.length;
        //   });

        //   res.on('end', () => {
        //     span.setAttribute('contentLength', size);
        //   });
        // },
      }),
      new ExpressInstrumentation({
        // Custom Attribute: request headers on spans:
        requestHook: (span, reqInfo) => {
          span.setAttribute(
            'request-headers',
            JSON.stringify(reqInfo.request.headers),
          ); // Can't get the right type for reqInfo here. Something to do with not being able to import instrumentation-express
        },
      }),
      new MongooseInstrumentation({
        // responseHook: (span: Span, res: { response: any }) => {
        responseHook: (span, res) => {
          span.setAttribute(
            'contentLength',
            Buffer.byteLength(JSON.stringify(res.response)),
          );
          span.setAttribute(
            'instrumentationLibrary',
            span.instrumentationLibrary.name,
          );
        },
      }),
      new PgInstrumentation({
        // responseHook: (span: Span, res: { data: { rows: any; }; }) => {
        responseHook: (span, res) => {
          span.setAttribute(
            'contentLength',
            Buffer.byteLength(JSON.stringify(res.data.rows)),
          );
          span.setAttribute(
            'instrumentationLibrary',
            span.instrumentationLibrary.name,
          );
        },
      }),
      new MongoDBInstrumentation({
        // responseHook: (span: Span, res: { data: { rows: any; }; }) => {
        responseHook: (span, res) => {
          span.setAttribute(
            'contentLength',
            Buffer.byteLength(JSON.stringify(res.data.rows)),
          );
          span.setAttribute(
            'instrumentationLibrary',
            span.instrumentationLibrary.name,
          );
        },
      }),
    ],
  });
  sdk.start();
};
