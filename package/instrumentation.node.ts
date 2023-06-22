// import { trace, context } from '@opentelemetry/api';
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

// import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
const {
  ExpressInstrumentation,
} = require('@opentelemetry/instrumentation-express');
const {
  MongooseInstrumentation,
} = require('@opentelemetry/instrumentation-mongoose');
//pg instrumentation
const { PgInstrumentation } = require('@opentelemetry/instrumentation-pg');
const {
  MongoDBInstrumentation,
} = require('@opentelemetry/instrumentation-mongodb');

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'next-app',
  }),
  // spanProcessor: new SimpleSpanProcessor(new ConsoleSpanExporter()),
  spanProcessor: new SimpleSpanProcessor(
    new OTLPTraceExporter({
      url: 'http://localhost:4318/v1/trace',
      // same port as shown in collector-gateway.yml
      headers: {
        foo: 'bar',
      }, // an optional object containing custom headers to be sent with each request will only work with http
    }),
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
      //     span.setAttribute('contentLength', size)
      //   });
      // }
    }),
    new ExpressInstrumentation({
      // Custom Attribute: request headers on spans:
      requestHook: (span: Span, reqInfo: any) => {
        span.setAttribute(
          'request-headers',
          JSON.stringify(reqInfo.request.headers),
        ); // Can't get the right type for reqInfo here. Something to do with not being able to import instrumentation-express
      },
    }),
    new MongooseInstrumentation({
      responseHook: (span: Span, res: { response: any }) => {
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
    // new PgInstrumentation({
    //   responseHook: (span: Span, res: { data: { rows: any; }; }) => {
    //     span.setAttribute("contentLength", Buffer.byteLength(JSON.stringify(res.data.rows)));
    //     span.setAttribute("instrumentationLibrary", span.instrumentationLibrary.name);
    //   },
    // }),
    // new MongoDBInstrumentation({
    //   responseHook: (span: Span, res: { data: { rows: any; }; }) => {
    //     span.setAttribute("contentLength", Buffer.byteLength(JSON.stringify(res.data.rows)));
    //     span.setAttribute("instrumentationLibrary", span.instrumentationLibrary.name);
    //   },
    // }),
  ],
});
sdk.start();
