alert("مرحباً بك في موقعي الذي سيحسب درجتك!!")

// JAVASCRIPT IS NOT JAVA

let grade = prompt("Enter your grade as numbers")
console.log(`%c ${grade}`, "color:red;")

if(grade > 89 && grade < 101){
    console.log(`%c You got A`, "color:red;")
}
else if(grade > 79 && grade < 90){
    console.log(`%c You got B`, "color:red;")
}
else if(grade > 69 && grade < 80){
    console.log(`%c You got C`, "color:red;")
}
else if(grade > 59 && grade < 70){
    console.log(`%c You got D`, "color:red;")
}
else if(grade > 49 && grade < 60){
    console.log(`%c You got E`, "color:red;")
}
else if(grade < 50){
    console.log(`%c FAIAIAIAIAIL`, "color:red;")
}