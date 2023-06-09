# PACKAGE

![NextView-banner-final-900x300](https://github.com/oslabs-beta/NextView/assets/101832001/fd3242b4-3af5-42ea-96ff-81b288ef8c66)

<div align='center'>

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Recharts](https://img.shields.io/badge/<Recharts/>-1CA9C9?style=for-the-badge)
![Node](https://img.shields.io/badge/-node-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![OpenTelemetry](https://img.shields.io/badge/OpenTelemetry-3d348b?style=for-the-badge&logo=opentelemetry&logoColor=white)
![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![GitHubActions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Husky](https://img.shields.io/badge/🐶husky-3EB489?style=for-the-badge)
![Jest](https://img.shields.io/badge/-jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

</div>

#

<a href="https://www.nextview.dev">![Website](https://img.shields.io/badge/Website-B9D9EB)</a>
<a href="https://www.linkedin.com/company/nextview-os/">![LinkedIn](https://img.shields.io/badge/LinkedIn-B9D9EB)</a>
<a href="https://www.npmjs.com/package/nextview-tracing">![npm](https://img.shields.io/badge/npm-B9D9EB)</a>
<a href="https://medium.com">![Medium](https://img.shields.io/badge/Medium-B9D9EB)</a>

NextView is a lightweight and user-friendly application designed to assist developers in optimizing the server performance of their Next.js applications. Our observability platform utilizes OpenTelemetry to trace and monitor crucial server instrumentation data, stores the information in real time, and visualizes the time-series data in clear graphical representations on the NextView Dashboard. With easier data analysis, developers can swiftly identify bottlenecks and pinpoint areas that require server performance optimization, and thereby improve the efficiency of their applications.

## Getting Started

1. To get started, install our npm package in your Next.js application

```bash
npm i nextview-tracing
```

2. In your next.config.js file, opt-in to the Next.js instrumentation by setting the experimental instrumentationHook key to true in the nextConfig object

```bash
experimental.instrumentationHook = true;
```

3. Navigate to the NextView Dashboard and copy your generated API key

4. In the .env.local file in the root directory of your application (create one if it doesn’t exist), create two environment variables, one for your API Key and one for your service’s name

```bash
API_KEY=<Your-NextView-API-Key>
Service_Name=<Name-Of-Your-Service>
```

5. Start the OpenTelemetry Collector in your terminal via the Docker Command

```bash
docker-compose-up
```

6. Return to your NextView account and enter the Dashboard to see your instrumentation data displayed!

## Key Concepts in OpenTelemetry

**Trace**

<p>
The entire "path" of events that occurs when a request is made to an application. A trace is a collection of spans.
</p>

**Span**

<p>
A trace consists of spans, each of which represents an individual operation. A span contains information on the operation, such as request methods (get/post), start and end timestamps, status codes, and URL endpoints. NextView focuses on three main spans.
</p>

- Client: The span is a request to some remote service, and does not complete until a response is received. It is usually the parent of a remote server span.
- Server: The child of a remote client span that covers server-side handling of a remote request.
- Internal: The span is an internal operation within an application that does not have remote parents or children.

**Action**

<p>
The term "action" in the NextView application refers to one or more operations (spans) within a trace with the same request method and URL endpoint.
</p>

For more details on OpenTelemetry, please read the documentation [here](https://opentelemetry.io/docs/concepts/signals/).

## Contributors

- Eduardo Zayas: [GitHub](https://github.com/eza16) | [LinkedIn](https://www.linkedin.com/in/eduardo-zayas-avila/)
- Evram Dawd: [GitHub](https://github.com/evramdawd) | [LinkedIn](https://www.linkedin.com/in/evram-d-905a3a2b/)
- Kinski (Jiaxin) Wu: [GitHub](https://github.com/kinskiwu) | [LinkedIn](https://www.linkedin.com/in/kinskiwu/)
- Scott Brasko: [GitHub](https://github.com/Scott-Brasko) | [LinkedIn](https://www.linkedin.com/in/scott-brasko/)
- SooJi Kim: [GitHub](https://github.com/sjk06) | [LinkedIn](https://www.linkedin.com/in/sooji-suzy-kim/)

## License

Distributed under the MIT License. See LICENSE for more information.
