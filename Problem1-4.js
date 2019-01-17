//Problem 1:
// Put the start of your program in a main function. Create a loop that takes user input and put it in an array.
// Once the user quits, print all items in the array. DO NOT print the array, print the items/elements in the array.
//Problem2
//Put the start of your program in a main function. Create a function that can translate five English words into
// Spanish words. You should be able to call your function from your main function.

// Problem 3:
// Put the start of your program in a main function. Create a program that takes number inputs into an array until a
// quit word. Afterwards, display all numbers (not the array) and the sum.
//
// Problem 4:
// Put the start of your program in a main function. Create a class for Books with name, rating, genre, and author.
// Create a class method that will function that will change the rating of the book. Create three objects of the class
// Book and put them in an array. Lastly, use the array to display only the names of the books.

main();
    function main() {
    //problem1();
    //problem2();
    //problem4();

//Problem1
        var userInput = prompt("Enter a word");
        var wordArray = [userInput];
        var userInput = "";

        while(userInput === 'q')
        {
            userInput=prompt("Enter a word");
            wordArray.push(userInput);
        }
        console.log(wordArray); }


 //Problem2



// var expr = prompt("Enter day");
// switch (expr) {
//     case 'Monday':
//         console.log('lunes');
//         break;
//     case 'Tuesday':
//         console.log('martes');
//         break;
//     case 'Wednesday':
//         console.log('miercoles');
//         break;
//     case 'Thursday':
//         console.log('jueves');
//         break;
//     case 'Friday':
//         console.log('viernes');
//         break;
//     default:
//         console.log("Not a word");
// }}



//Problem4

class Books
{
    constructor(name, rating, genre, author)

    {
        this.name = name;
        this.rating = rating;
        this.genre = genre;
        this.author = author;

        printEverythingInHere()
     {
        console.log(this.name, this.rating, this.genre, this.author);
     }

     changeRating(ratingToChange)
     {
         this.rating = ratingToChange;
     }


    }

}

var rating1 = new rating("A", "B", "C", "D");
rating1.printEverythingInHere();
rating1.changeRating("D");
rating1.printEverythingInHere();
console.log(book.
