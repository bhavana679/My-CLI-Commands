# My CLI Commands 🚀

A modular, engine-driven Command Line Interface (CLI) built with TypeScript. This project provides a variety of useful and fun commands, ranging from math utilities to real-time weather reports and jokes.

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
- `init_ts <folderName>`: Automatically initialize a new TypeScript project with all necessary dependencies and configuration.

---

## 🏗 Modular Architecture

The project uses a custom-built **CLI Engine** for scalable command registration. 

- **`cli_engine/`**: Contains the core logic that dynamically loads and registers commands.
- **`commands/`**: Every command is its own class in its own file, making it extremely easy to add new features without breaking existing ones.
- **`cli.ts`**: The main entry point that orchestrates the engine and user inputs.

---

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bhavana679/My-CLI-Commands.git
   cd My-CLI-Commands
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Link the CLI globally (Optional):**
   ```bash
   npm link
   ```

---

## 💡 How to Run

If you have linked the project, you can run commands directly using:
```bash
mycli <command_name>
```

Alternatively, you can run it using `ts-node`:
```bash
npx ts-node cli.ts <command_name>
```

---

## 📦 Tech Stack
- **TypeScript**: For robust and type-safe development.
- **Commander.js**: The industry standard for building CLI tools.
- **Axios**: For making API requests to fetch weather, jokes, and quotes.
- **Chalk**: For beautiful, colorful terminal output.
- **Node.js**: The runtime environment.

---
*Developed with ❤️ by Bhavana*
