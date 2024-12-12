# React Calculator NUCC

This project is a React.js web application that includes an arithmetic calculator and a BMI calculator, designed to demonstrate component-based rendering, Next.js routing, and Node.js server integration.

## Table of Contents

- [React Calculator NUCC](#react-calculator-nucc)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Features of React.js Used](#features-of-reactjs-used)
    - [Back-End Features](#back-end-features)
  - [Setup Instructions](#setup-instructions)
    - [Prerequisites](#prerequisites)
    - [Cloning the Repository](#cloning-the-repository)
    - [Installing Dependencies](#installing-dependencies)
    - [Running the Application](#running-the-application)
      - [Starting the Server](#starting-the-server)
      - [Starting the Client](#starting-the-client)
    - [Production Build](#production-build)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [License](#license)
  - [Repository](#repository)

## Overview

**React Calculator NUCC** is a web application designed to demonstrate the integration of front-end and back-end technologies using **React.js** and **Next.js** for the client-side and **Node.js** with **Express.js** for the server-side. The application includes three main pages:

1. **Home Page**: Provides navigation buttons to access the Calculator and BMI Calculator pages.
2. **Calculator Page**: A fully front-end calculator for basic arithmetic operations.
3. **BMI Calculator Page**: Calculates the Body Mass Index (BMI) using a back-end server.

This project showcases the following features:

### Features of React.js Used

- **React Functional Components**: All pages and components are built using functional components.
- **State Management**: Utilized React's `useState` hook for managing dynamic data such as input fields and calculator display.
- **Dynamic Rendering**: Components update in real-time based on user interactions.
- **Routing**: Implemented with **Next.js App Router** and the `<Link>` component for seamless navigation between pages.

### Back-End Features

- **Node.js with Express.js**: Handles HTTP requests for the BMI calculation.
- **CORS**: Configured to allow requests from the front-end.
- **BMI Classification**: The server provides BMI results along with a health classification (e.g., "Normal", "Underweight", "Overweight").

## Setup Instructions

### Prerequisites

- Node.js (v20.17.0 or later recommended)

### Cloning the Repository

To get started, clone the repository from GitHub:

```bash
> git clone https://github.com/ricardofig016/react-calculator-nucc.git
> cd react-calculator-nucc
```

### Installing Dependencies

Install the necessary dependencies for both the client and server, open a terminal and run:

```bash
> npm install
```

### Running the Application

#### Starting the Server

The server is required for the BMI Calculator functionality. To start the server, open a terminal and run:

```bash
> npm run server
```

The server will run on `http://localhost:3001`.

#### Starting the Client

To start the Next.js application, open a different terminal and run:

```bash
> npm run dev
```

The application will run on `http://localhost:3000`.

### Production Build

To build the application for production:

```bash
> npm run build
> npm start
```

## Usage

1. Navigate to `http://localhost:3000` on a web browser to access the application.
2. Use the **Home Page** to navigate to:
   - The **Calculator Page** for basic arithmetic operations.
   - The **BMI Calculator Page** to calculate your BMI.

## Project Structure

```plaintext
react-calculator-nucc/
├── config/
│   ├── .eslintrc.json
│   ├── jsconfig.json
│   └── next.config.mjs
├── public/
│   ├── images/
│   |   ├── calculator.png
│   |   └── icons/
│   |       ├── calculator.png
│   |       └── scale.png
│   └── fonts/
│       └── seven_segment.ttf
├── server/
│   └── index.js
├── src/
│   ├── app/
│   │   ├── bmi/
│   │   │   ├── page.js
│   │   │   └── page.module.css
│   │   ├── calculator/
│   │   │   ├── page.js
│   │   │   └── page.module.css
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── page.module.css
│   ├── components/
│   │   ├── calcButton.js
│   │   ├── calcButton.module.css
│   │   ├── homeButton.js
│   │   └── homeButton.module.css
├── .gitignore
├── LICENSE
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Repository

The source code for this project is hosted on GitHub:
[react-calculator-nucc](https://github.com/ricardofig016/react-calculator-nucc).
