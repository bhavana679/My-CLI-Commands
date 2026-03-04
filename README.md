# My CLI Commands

A modular, engine-driven Command Line Interface (CLI) built with TypeScript. This project is designed to be installed and run globally as the mycli command.

---

## How to Run with mycli

To use this program as a global command on your system, follow these steps:

### 1. Setup & Build
Install all dependencies and compile the TypeScript source code:
```bash
npm install
npm run build
```

### 2. Install Globally
Link the project to your global node_modules so you can use the mycli command from any folder:
```bash
npm link --force
```

### 3. Run Your Commands!
Now, simply type mycli followed by any command:
```bash
mycli joke        # Get a random joke
mycli weather     # Get a weather report
mycli add 10 20   # Add two numbers
mycli --help      # See all available commands
```

---

## Available Commands

Our CLI is broken down into several modular categories:

### Math Utilities
- mycli add <n1> <n2>: Add two numbers.
- mycli sub <n1> <n2>: Subtract two numbers.
- mycli mul <n1> <n2>: Multiply two numbers.
- mycli div <n1> <n2>: Divide two numbers.

### Fun & Entertainment
- mycli joke: Get a random programming or general joke.
- mycli quote: Get an inspirational daily quote.
- mycli pokemon: Get stats for a random Pokemon.

### World Utilities
- mycli weather: Real-time weather report.
- mycli country: Get information about a country.
- mycli greet <name>: A friendly greeting.
- mycli init_ts <folder>: Initialize a new TypeScript project.

---

## Modular Architecture

The project uses a custom CLI Engine for scalable command registration. Every folder and file is structured to be independent and easy to extend.

- cli_engine/: Core logic for dynamic command registration.
- commands/: Modular command classes (each command is its own file).
- cli.ts: The main orchestrator that powers the mycli entry point.

---

## Tech Stack
- TypeScript: Robust, type-safe development.
- Commander.js: Powering the CLI interface.
- Axios: API integration for real-time data.
- Chalk: Beautiful, colorful terminal output.

---
*Developed by Bhavana*
