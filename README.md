![NextView-banner-1000x300](https://github.com/oslabs-beta/NextView/assets/101832001/582b97b2-dc8a-458c-abfb-c358e37f2bca)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Recharts](https://img.shields.io/badge/<Recharts/>-1CA9C9?style=for-the-badge)
![Node](https://img.shields.io/badge/-node-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![OpenTelemetry](https://img.shields.io/badge/OpenTelemetry-3d348b?style=for-the-badge&logo=opentelemetry&logoColor=white)
![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

# NextView

<a href="https://www.nextview.dev">![Website](https://img.shields.io/badge/Website-dee2e6)</a>
<a href="https://www.linkedin.com/company/nextview-os/">![LinkedIn](https://img.shields.io/badge/LinkedIn-dee2e6)</a>
<a href="https://www.npmjs.com/package/nextview-tracing">![npm](https://img.shields.io/badge/npm-dee2e6)</a>
<a href="https://medium.com">![Medium](https://img.shields.io/badge/Medium-dee2e6)</a>

NextView is a lightweight, user-friendly application designed to assist developers in optimizing server performance of their Next.js applications. Our observability platform employs OpenTelemetry to trace and monitor important server metrics, and stores the data in real time. The NextView Dashboard visualizes the time-series data in clear graphical presentations that facilitate data analysis, enabling developers to swiftly identify areas where server performance optimization is needed.

## Getting Started

1. To get started, install our npm package in your Next.js application:

```bash
npm i nextview-tracing
```

2. In your next.config.js file, opt-in to the Next.js instrumentation by setting the experimental instrumentationHook to true:

```bash
experimental.instrumentationHook = true;
```

3. Navigate to the NextView Dashboard and copy your generated API key

4. In the .env.local file in the root directory of your application (create one if it doesn’t exist), create two environment variables, one for your API Key and one for your service’s name

```bash
API_KEY=<Your-NextView-API-Key>
Service_Name=<Name-Of-Your-Service>
```

5. Start the OpenTelemetry Collector in your terminal via the Docker Command:

```bash
docker-compose-up
```

## Key Concepts in OpenTelemetry

**Trace**

<p>
The entire "path" of events that occurs when a request is made to an application. A trace is a collection of spans.
</p>

**Span**

<p>
A trace consists of spans, each of which represents an individual operation. A span contains information on the operation, such as request methods (get/post), start and end timestamps, status codes, and URL endpoints. Our app focuses on 3 main span kinds.
</p>

- Client: The span is a request to some remote service, and does not complete until a response is received. It is usually the parent of a remote server span.
- Server: The child of a remote client span that covers server-side handling of a remote request.
- Internal: The span is an internal operation within an application that does not have remote parents or children.

**Action**

<p>
The term "action" in the NextView application refers to one or more operations (spans) within a trace with the same request method and URL endpoint.
</p>

For more details on OpenTelemetry, please read the documentation [here](https://opentelemetry.io/docs/concepts/signals/).

## User Guidelines

<p>
[Add more info on hooking up app to dashboard]
[Add images]
</p>

### Overview Page

The NextView dashboard defaults to the Overview page, where you can see performance metrics for your entire Next.js application. You can see specific values of a graph when you hover over it.

- Average page load duration (in milliseconds)
- Total number of traces
- Average span load duration
- Top 5 slowest pages
- Average duration of operations by span kind (in milliseconds) over time

The default time period for the overview data is the last 24 hours, and this can be modified in the date and time selector on the top right corner of the dashboard.

### User's App Page(s)

All of the pages in your application will be listed on the left hand sidebar. When you select a page, you can see server performance metrics for the individual page.

- Average page load duration (in milliseconds)
- Total number of traces
- Details on each action (duration in milliseconds, number of traces, number of executions)
- Average duration of operations by span kind (in milliseconds) over time

## Contribution Guidelines

### Contribution Method

We welcome your contributions to the NextView product!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/newFeature`) and create your new feature
3. Commit your changes (`git commit -m 'Added [new-feature-description]'`)
4. Push to the branch (`git push origin feature/newFeature`)
5. Make a Pull Request
6. The NextView Team will review the feature and approve!

### Planned Features

- Add multi-app per user functionality
- Display logs and metrics from OpenTelemetry
- Enable user to select time zone
- Enhanced security through change password functionality

## Contributors

- Eduardo Zayas [GitHub](https://github.com/eza16) | [LinkedIn](https://www.linkedin.com/in/eduardo-zayas-avila/)
- Evram Dawd [GitHub]('https://github.com/evramdawd) | [LinkedIn](https://www.linkedin.com/in/evram-d-905a3a2b/)
- Kinski (Jiaxin) Wu [GitHub](https://github.com/kinskiwu) | [LinkedIn](https://www.linkedin.com/in/kinskiwu/)
- Scott Brasko [GitHub](https://github.com/Scott-Brasko) | [LinkedIn](https://www.linkedin.com/in/scott-brasko/)
- SooJi Kim [GitHub](https://github.com/sjk06) | [LinkedIn](https://www.linkedin.com/in/sooji-suzy-kim/)

## License

Distributed under the MIT License. See LICENSE for more information.
