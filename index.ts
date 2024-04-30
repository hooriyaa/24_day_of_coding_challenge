// QUESTION 70:
 function numberInLoop(){
   for(let a=0; a<=5; a++){
   console.log(a);
   };
 };
 numberInLoop();


// QUESTION 71:
// reassign let varaible:
let userName:string="hooriya";
userName="Mahnoor";
console.log(userName)

// reassign const varaible:
const z:string="Malahim";
try{
z="google";
console.log(z)
}catch(error){
    console.log("Error: const varaible can't be reassign!")
}


// QUESTION 72:
{
    let blocklet:string="Visible inside the block";
    let blockconst:string="also only inside the block";
    console.log(blocklet)
    console.log(blockconst)
}
try {
    console.log(blocklet)
}catch(error){
    console.log("blocklet: Can't be assign outside the block!! ")
}
try {
    console.log(blockconst)
}catch(error){
    console.log("blockconst: Can't be assign outside the block!! ")
}






