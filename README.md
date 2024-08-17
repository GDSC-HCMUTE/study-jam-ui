# Web UI for Study Jam Web Application

## 1. Overview

This project is a web user interface (UI) for the Study Jam Web Application, developed by members of the Google Developer Student Clubs - HCMUTE.

In addition to its production use, this project is made public to serve as a resource for sharing knowledge and skills in web development with club members and other students or developers seeking a reference project on building web application with Next.js.

## 2. Technical stack

This project utilizes the following main technologies:

- [Next.js with App Router (version 14)](https://nextjs.org/docs)
- [Ant Design](https://ant.design/docs/spec/introduce)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-hook-form](https://react-hook-form.com/get-started)
- [Zod](https://zod.dev/)

## 3. How to run this project

### 3.1. Prerequisite

1. Before running this project, you need to set up the backend API. You can clone the API repository to your local machine from this link: https://github.com/GDSC-HCMUTE/study-jam-api.
2. Ensure that [Yarn](https://classic.yarnpkg.com/en/docs) is installed on your computer.

### 3.2. Steps to run

1. In the root directory of this project, create a `.env.local` file and add the environment variable `BASE_BACKEND_URL` with the value set to your local backend API URL. For example:

   ```
   BASE_BACKEND_URL=http://localhost:8080/v1/study-jam
   ```

2. Open terminal at the root folder of this project, run the following commands sequentially:

   ```shell
   yarn install
   yarn dev
   ```

3. Open your browser and access the application at `http://localhost:3000`.
