# Next.js Admin Dashboard Project

## Overview

This project is a **Next.js** dashboard application using the **App Router** architecture. It features role-based access control, displaying appropriate content for **admins** and **regular users**. It is styled with **Ant Design** and **Styled Components**. The project follows best practices with **ESLint** and **Husky** and includes comprehensive testing using **Jest**, **Testing Library**, and **Cypress**. **TanStack React Query** is used for efficient data fetching and state management.

## Features

- **Role-Based Authentication** (Admin/User) with dynamic content display.
- **Authentication System** including:
  - Registration & Login
  - Password Reset & Change Password
  - Role Management
- **Next.js App Router** for optimized performance and routing.
- **Ant Design** for a sleek and professional UI.
- **Styled Components** for modular and dynamic styling.
- **TanStack React Query** for efficient data fetching and caching.
- **Jest & Testing Library** for unit and component testing.
- **Cypress** for end-to-end testing.
- **ESLint** for maintaining clean and consistent code.
- **Husky** for enforcing pre-commit hooks and automated checks.

## Installation

Ensure you have **Node.js** (LTS recommended) installed.

```sh
# Clone the repository
git clone <repo-url>
cd <project-folder>

# Install dependencies
npm install
```

## Running the Development Server

```sh
npm run dev
```

The application will be available at `http://localhost:3000`.

## Linting & Code Formatting

```sh
npm run lint  # Run ESLint
```

## Testing

### Running Unit and Component Tests (Jest & Testing Library)

```sh
npm test
```

### Running End-to-End Tests (Cypress)

```sh
npm run cypress open
```

## Husky Pre-commit Hooks

Husky is configured to run pre-commit hooks for linting and tests.
To manually run:

```sh
npm run prepare  # Set up Husky hooks
```

## Folder Structure

```
📂 app/
 ├── 📂 components/  # Reusable UI components
 ├── 📂 lib/         # Shared libraries and utilities
 ├── 📂 services/    # API and data fetching services
 ├── 📂 context/    #  Context providers
 ├── 📂 __tests__/   # Unit and integration tests
 ├── 📂 styles/      # Styled Components & global styles
📂 cypress/         # Cypress end-to-end tests
```

## Purpose

This project is designed as a portfolio piece to demonstrate skills in **Next.js**, **authentication & role-based access control**, **UI design**, and **automated testing**. It is intended for potential recruiters to showcase expertise in frontend development and best practices.

## Contributing

Feel free to contribute by opening an issue or submitting a pull request.

## License

This project is licensed under the **MIT License**.
