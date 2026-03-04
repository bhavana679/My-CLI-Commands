# my-cli-commands

A simple, modular CLI tool built with TypeScript.

### getting started

To use `mycli` globally on your machine:

1. `npm install`
2. `npm run build`
3. `npm link --force`

Now you can just run `mycli` from any folder.

### available commands

**math**
- `mycli add <n1> <n2>`
- `mycli sub <n1> <n2>`
- `mycli mul <n1> <n2>`
- `mycli div <n1> <n2>`

**other stuff**
- `mycli joke` - random joke
- `mycli quote` - daily quote
- `mycli pokemon` - get pikachu stats
- `mycli weather` - current weather
- `mycli country` - country info
- `mycli greet <name>` - say hi
- `mycli init_ts <folder>` - setup a new ts project

### how it works

The project is modular. Every command is a separate file in `/commands`. The `cli_engine` handles registration automatically.

- `cli.ts` - main entry point
- `cli_engine/` - core registration engine
- `commands/` - command logic

### setup

- typescript
- commander
- axios
- chalk


