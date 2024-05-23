#!/ usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
class player{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name=name;
    }
    fuelDecrease(){
                let fuel=this.fuel-25
                this.fuel=fuel
    }
    fueiIncrease(){
        this.fuel=100

    }
   
}
class oponent{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name=name;
    }
     fuelDecrease(){
         let fuel=this.fuel-25
        this.fuel=fuel
 }
}
let playerData = await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:"please enter your name"

    }
]);



let oponentData = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:"select your opponent",
        choices:["skeleton","bhoot","Alien"]
    }
]);

//gathered data
let p1=new player(playerData.name);

let o1=new oponent(oponentData.select);


 do{
    if(oponentData.select == "skeleton"){
     console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);
    let ask = await inquirer.prompt(
        {
            name:"opt",
            type:"list",
            message:"select youe opponent",
            choices:["Attock","Drink Portion","Run for your life.."],
        })
         if(ask.opt=="Attock"){
     
         let num=Math.floor(Math.random()*2)
        if(num>0){
            p1.fuelDecrease()         
              console.log(`${ chalk.bold.red(p1.name)} fuel is ${p1.fuel}`);
              console.log(`${o1.name} fuel is ${o1.fuel}`);
              if(p1.fuel<=0){
                console.log(chalk.red.bold.italic("you lost, try again"));
                process.exit()
              }
            
        }
        if(num<=0){
            o1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if(o1.fuel<=0){
                console.log(chalk.green.bold.italic("you lost, try again"));
                process.exit()
              }
        }
    }
    if(ask.opt=="Drink Portion"){
             p1.fueiIncrease()
              console.log(`you drink health portion your fuel is ${p1.fuel}`);
             
    }
    if(ask.opt== "Run for your life.."){
    
         console.log(chalk.red.bold.italic("you lost, try again"));
         process.exit()
   }
   }
   if(oponentData.select == "bhoot"){
    console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);
   let ask = await inquirer.prompt(
       {
           name:"opt",
           type:"list",
           message:"select youe opponent",
           choices:["Attock","Drink Portion","Run for your life.."],
       })
        if(ask.opt=="Attock"){
    
        let num=Math.floor(Math.random()*2)
       if(num>0){
           p1.fuelDecrease()         
             console.log(`${ chalk.bold.red(p1.name)} fuel is ${p1.fuel}`);
             console.log(`${o1.name} fuel is ${o1.fuel}`);
             if(p1.fuel<=0){
               console.log(chalk.red.bold.italic("you lost, try again"));
               process.exit()
             }
           
       }
       if(num<=0){
           o1.fuelDecrease()
           console.log(`${p1.name} fuel is ${p1.fuel}`);
           console.log(`${o1.name} fuel is ${o1.fuel}`);
           if(o1.fuel<=0){
               console.log(chalk.green.bold.italic("you lost, try again"));
               process.exit()
             }
       }
   }
   if(ask.opt=="Drink Portion"){
            p1.fueiIncrease()
             console.log(`you drink health portion your fuel is ${p1.fuel}`);
            
   }
   if(ask.opt== "Run for your life.."){
   
        console.log(chalk.red.bold.italic("you lost, try again"));
        process.exit()
  }
  }
  if(oponentData.select == "Alien"){
    console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);
   let ask = await inquirer.prompt(
       {
           name:"opt",
           type:"list",
           message:"select youe opponent",
           choices:["Attock","Drink Portion","Run for your life.."],
       })
        if(ask.opt=="Attock"){
    
        let num=Math.floor(Math.random()*2)
       if(num>0){
           p1.fuelDecrease()         
             console.log(`${ chalk.bold.red(p1.name)} fuel is ${p1.fuel}`);
             console.log(`${o1.name} fuel is ${o1.fuel}`);
             if(p1.fuel<=0){
               console.log(chalk.red.bold.italic("you lost, try again"));
               process.exit()
             }
           
       }
       if(num<=0){
           o1.fuelDecrease()
           console.log(`${p1.name} fuel is ${p1.fuel}`);
           console.log(`${o1.name} fuel is ${o1.fuel}`);
           if(o1.fuel<=0){
               console.log(chalk.green.bold.italic("you lost, try again"));
               process.exit()
             }
       }
   }
   if(ask.opt=="Drink Portion"){
            p1.fueiIncrease()
             console.log(`you drink health portion your fuel is ${p1.fuel}`);
            
   }
   if(ask.opt== "Run for your life.."){
   
        console.log(chalk.red.bold.italic("you lost, try again"));
        process.exit()
  }
  }
}
while(true);





