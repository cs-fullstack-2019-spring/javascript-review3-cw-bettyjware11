class Dog
 {
     constructor(name, breed, color, gender)
    {
        this.name = name;
         this.breed = breed;
         this.color = color;
         this.gender = gender;
     }

     printEverythingInHere()
    {
         console.log(this.name, this.breed, this.color, this.gender);
    }

     changeColor(colorToChange)
     {
         this.color = colorToChange;
     }
 }

 var dog1 = new Dog("Spot", "Poodle", "White", "male");
 dog1.printEverythingInHere();
 dog1.changeColor("red");
 dog1.printEverythingInHere();