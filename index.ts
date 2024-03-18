import inquirer from "inquirer" ;

let answers = await inquirer.prompt([{
    message: "Enter your first name" ,
    type : "number" ,
    name : "firstName"
},
 
  { message: "Enter your second name" ,
  type : "number" ,
  name : "secondName"
},
{
    message: "choose any one operator to perform operation" ,
    type: "list" ,
    name: "operator" ,
    choices: ["addition" , "subtraction" , "multiplication" , "division" ,"modulus" ,"exponent"] 

}
]) ;

// CONDITIONAL STATEMENT..
if(answers.operator === "addition"){
console.log(answers.firstName + answers.secondName);
}
else if(answers.operator === "subtraction"){
    console.log(answers.firstName - answers.secondName);
}else if(answers.operator === "multiplication"){
    console.log(answers.firstName * answers.secondName);
}
else if(answers.operator === "division"){
    console.log(answers.firstName / answers.secondName) ;
}
else if(answers.operator === "modulus"){
    console.log(answers.firstName % answers.secondName) ;
}
else if(answers.operator === "exponent"){
    console.log(answers.firstName ** answers.secondName) ;
}
else{
console.log("please select your valid operation");
}
