# Market Order Book - Bitpin Sofware Engineer Task

This project is a Market Order Book application that allows users to view market data, including orders and trades, and perform calculations based on user input percentages. It is built with React, Material-UI, TypeScript, and React Query for efficient state management and data fetching.

## Table of Contents

1. [Features](#Features)
2. [Tech Stack](#Tech-Stack)
3. [Getting Started](#Getting-Started)

   - [Prerequisites](#Prerequisites)
   - [Installation](#Installation)
   - [Running the Application](#Running-The-Application)

# Features

- Market List: View available markets categorized by base currency.
- Order Book: View buy/sell orders with automatic updates and calculations.
- Trade History: View recent trades with live data updates.
- Percentage-Based Calculations: Input a percentage to calculate total volume, average price, and total value of orders.
- Client-Side Pagination: Efficiently handles large datasets on the client-side.

# Tech Stack

- React: Chosen for its component-based architecture and extensive ecosystem.
- TypeScript: Ensures type safety and reduces runtime errors in the codebase.
- Material-UI: Provides a robust, customizable, and accessible UI framework for rapid development.
- React Query: Efficiently manages server-state with built-in caching and synchronization.
- Axios: Offers a flexible and straightforward HTTP client for API requests.
- ESLint & Prettier: Enforces code quality and consistency across the project.

# Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or above)
- npm (v6 or above) or yarn (v1.22 or above)

### Installation

1. Clone the repository:

```bash
  git clone https://github.com/pooridev/bitpin-technical-task.git
  cd bitpin-technical-task
```

2. Install the dependencies:

```bash
  yarn install
  # or
  npm install
```

### Running the Application

To start the development server:

```bash
  yarn dev
  # or
  npm run dev
```

The application will be available at http://localhost:3000
