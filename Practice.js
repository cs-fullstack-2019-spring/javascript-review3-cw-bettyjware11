var userInput = prompt("Enter a word");
var wordArray = [userInput];
var userInput = "";

while(userInput === 'q')
{
    userInput=prompt("Enter a word");
    wordArray.push(userInput);
}
console.log(wordArray);