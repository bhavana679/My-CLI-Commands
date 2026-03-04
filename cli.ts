#!/usr/bin/env node

const CLI_Engine = require("./cli_engine/engine");

// Import all command classes
const AddCommand = require("./commands/addCommand");
const SubCommand = require("./commands/subCommand");
const MulCommand = require("./commands/mulCommand");
const DivCommand = require("./commands/divCommand");
const Greet_Command = require("./commands/greetCommand");
const JokeCommand = require("./commands/jokeCommand");
const QuoteCommand = require("./commands/quoteCommand");
const WeatherCommand = require("./commands/weatherCommand");
const CountryCommand = require("./commands/countryCommand");
const PokemonCommand = require("./commands/pokemonCommand");
const Init_TS = require("./commands/initTS");

// Initialize the engine
const engine = new CLI_Engine();

// Register all commands
engine.registerCommands([
    Greet_Command,
    AddCommand,
    SubCommand,
    MulCommand,
    DivCommand,
    JokeCommand,
    QuoteCommand,
    WeatherCommand,
    CountryCommand,
    PokemonCommand,
    Init_TS
]);

// Run the CLI
engine.run();
