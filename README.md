[Add banner image here]

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
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

NextView is a user-friendly, lightweight application designed to assist developers in optimizing server performance of their Next.js applications. Our observability platform employs OpenTelemetry to trace and monitor important server metrics, and stores the data in real time. The NextView Dashboard visualizes the time-series data in clear graphical presentations that facilitate data analysis, enabling developers to swiftly identify areas where server performance optimization is needed.

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

## Understanding the Concepts

- Trace
- Span
- Action

## User Guidelines

<p>
[Add more info on hooking up app to dashboard]
</p>
The NextView dashboard defaults to the Overview page, where you can see performance metrics for your entire Next.js app. You can see the average load duration time in all of your pages

All of the pages in your app will be listed on the left hand sidebar.

#### Select Time Frame

When you open the app, the time period If you

Average Page Load Duration (milliseconds)

## Contribution Guidelines

### File Directory Map

### List of Desired Features

## Publications

## The Team

[Open Source Licensing Info]
