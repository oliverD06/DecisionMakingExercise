let randomNum=Math.random()*5+1;
randomNum = Math.floor(randomNum);
console.log(randomNum);
if (randomNum >=4) {
    console.log("Greater than or equal to 4");
}else if (randomNum === 2) {
    console.log("Equal to 2 or 3");
}else if (randomNum === 1) {
}else if (randomNum === 3) {
    console.log("Equal to 2 or 3");
}else if (randomNum === 1) {
    console.log("Equal to 1");
}
if (randomNum != 3) {
    console.log("Not equal to 3");
}

if (randomNum != 3 && randomNum != 5) {
    console.log("Not equal to 3 or 5")
}

if (randomNum === 2 || randomNum === 4) {
    console.log("Equal to 2 or 4")
}

