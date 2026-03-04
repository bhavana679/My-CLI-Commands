# My CLI Commands 🚀

A modular, engine-driven Command Line Interface (CLI) built with TypeScript. This project provides a variety of useful and fun commands, ranging from math utilities to real-time weather reports and jokes.

## 🏃 Quick Start: How to Run

To get your CLI up and running immediately, follow these exact steps in your terminal:

### 1. **Install Dependencies**
First, make sure all necessary libraries are installed:
```bash
npm install
```

### 2. **Build the Project**
Compile the TypeScript code into JavaScript:
```bash
npm run build
```

### 3. **Link Globally (Recommended)**
This allows you to use the `mycli` command from anywhere:
```bash
npm link --force
```

### 4. **Run a Command!**
Now you can start using the CLI:
```bash
mycli --help
mycli weather
mycli joke
```

---

## 🛠 Features

Our CLI is broken down into several modular categories:

### 🧮 Math Commands
- `add <n1> <n2>`: Add two numbers.
- `sub <n1> <n2>`: Subtract two numbers.
- `mul <n1> <n2>`: Multiply two numbers.
- `div <n1> <n2>`: Divide two numbers.

### 🎭 Fun Commands
- `joke`: Get a random programming or general joke.
- `quote`: Get an inspirational daily quote.
- `pokemon`: Get stats for a random Pokemon (e.g., Pikachu).

### 🌍 Utility Commands
- `weather`: Real-time weather report (Temperature, Wind Speed, etc.).
- `country`: Get information about a specific country (e.g., India).
- `greet <name>`: A friendly greeting command.
- `init_ts <folderName>`: Automatically initialize a new TypeScript project.

---

## 🏗 Modular Architecture

The project uses a custom-built **CLI Engine** for scalable command registration. 

- **`cli_engine/`**: Core registration logic.
- **`commands/`**: Modular command classes.
- **`cli.ts`**: Main orchestrator.

---

## 📦 Tech Stack
- **TypeScript**: Robust, type-safe development.
- **Commander.js**: CLI framework.
- **Axios**: API requests.
- **Chalk**: Colorful terminal experience.

---
*Developed with ❤️ by Bhavana*
