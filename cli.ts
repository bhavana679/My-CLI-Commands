#!/usr/bin/env node 

import axios from "axios"

const { Command } = require("commander")

const program = new Command ()

program  
.command("greet <name>") 
.action((name)=>{console.log(`Hello ${name}`)})

program 
.command("add <n1> <n2>")
.action((n1,n2)=>{console.log(Number(n1)+Number(n2))}) 

program 
.command("sub <n1> <n2>")
.action((n1,n2)=>{console.log(Number(n1)-Number(n2))})  

program 
.command("mul <n1> <n2>")
.action((n1,n2)=>{console.log(Number(n1)*Number(n2))})  

program 
.command("div <n1> <n2>")
.action((n1,n2)=>{console.log(Number(n1)/Number(n2))}) 

program 
.command("joke") 
.description("Random Joke")
.action(async ()=>{
    try {
        const res = await axios.get("https://official-joke-api.appspot.com/random_joke")
        console.log(res.data.setup)
        console.log(res.data.punchline)
    }catch(err){
        console.log(err)
    }
})

program.parse() 



