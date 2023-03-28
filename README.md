This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [TypeScript](https://www.typescriptlang.org/).

## Description

Using [Next.js](https://nextjs.org/) to create a simplified listing of StackOverflow tags and questions.

## Getting Started

#### To get started with this Next.js project, follow these steps:

1. Install the dependencies by running npm install in the project directory.
2. Start the development server using the command below in your terminal.
   ```bash
       npm run dev
       # or
       yarn dev
       # or
       pnpm dev
   ```
3. Once the development server is running, you can access your application by visiting http://localhost:3000 in your web browser.

## Features

1. RESTful API: The application consumed data from the [StackOverflow API v2.3](https://api.stackexchange.com/)
2. Infinite scroll: Fulfilled loading questions with infinite scroll by [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) and showed loading spinner when fetching data
3. Redux: Managed Trending tags and current searched tag with redux-toolkit, react-redux and next-redux-wrapper
4. Server side render: Pre-fetched trending tags data with getServerSideProps
5. Error handling: Showed error message according to [StackOverflow API v2.3 error handling](https://api.stackexchange.com/docs/error-handling)
6. Debounce searching: Used react hooks to fulfill debounce feature for searching tag
