var employee = {
    id: 467239,
    name: "Megan Cain",
    team: 4,
    payTier: 7
}

//1. Write the syntax that will access the value 4
employee.team;

//2. Write the syntax that will access the value "Megan Cain"
employee.name;

//3. 3. What will happen if you call employee.age? Why?
//You will get an error. Employee has no member called age.

var student = {
    name: "Francy",
    program: "Front End",
    module: 5,
    alum: true
}


//1. Write the syntax that will access the value "Front End":
student.program; 
//2. Write the syntax that will access the value true: 
student.alum;
//3. What will happen if you call francy.module? Why?
//You will get an error. There is no object named francy.

var user1 = {
    name: "Sodie",
    age: 8,
    breed: "shih-tzu",
    hobbies: ["Sun bathing", "Bossing People Around", "Napping"],
}

var user2 = {
    name: "Mangia",
    age:7,
    breed:"Greater Swiss Mountain Dog",
    hobbies: ["Checking counter for human Snacks", "Drinking out of Sodie’s Water Bowl"],  
}


//1. Access the string "Sodie"
user1.name;
//2. Access the number 7
user2.age;
//3. Access the array from user1
user1.hobbies;
//4. Using the data from the objects, print out the sentence "Shih-Tzu and a Greater Swiss Mountain Dog - BFFs"
console.log(user1.breed+ " and a " + user2.breed + " - BFFs");
//5. Access the list of user2's hobbies
user2.hobbies;
//6. Print out the entire user2 object
console.log(user2);
//7. Using the data from the objects, find the average age of the users
(user1.age + user2.age)/2
//8. Access the string "Mangia"
user2.name;
//9. Determine how many hobbies user2 has (programmatically)
user2.hobbies.length;
//10. Print a sentence out for each hobby that user2 has, including the name of that user. Example: "Mangia loves checking counter for human snacks"
for(let i = 0; i<user2.hobbies.length; i++){
    console.log(user2.name + " loves " + user2.hobbies[i]);
}
//11. add a property of “bestFriend” to user1. Assign it to a string of anything you want.
user1.bestFriend = "Nancy";
//12. re-assign user1 age to 9. Then, re-assign user2’s hobbies to an array of your choice!
user1.age = 9;
user2.hobbies = ["Chewing Table Legs","Knocking over household objects"];

//1. Create an object to hold information on your favorite recipe. It should have properties for
var recipe = {
    recipeTitle: "Grilled Cheese",
    servings: 1,
    ingredients: ["Bread", "Butter", "Cheese"],
    directions: "Butter the pan, put the cheese between the bread, grill it.",
    letsCook: function() {
        console.log("I'm hungry! Let's cook "+ this.recipeTitle);
    }
};
//2. Try displaying some information about your recipe to the screen
console.log(recipe.recipeTitle + recipe.servings);
//3. Create a loop to list all of the ingredients to the screen
for(let i=0; i<recipe.ingredients.length; i++){
    console.log(recipe.ingredients[i]);
}
//4. Add a function called letsCook that says “I’m hungry! Let’s cook..” with the name of your recipe title – call your new method
recipe.letsCook();

var student = {
    name: "Tristan",
    program: "Front End",
    module: 1,
    alum: false
};

//1. Write the syntax that will move Tristan to Module 2: 
student.module = 2;
//2. Write the syntax that will move Tristan to Module 5: 
student.module = 5;
//3. Write the syntax that will make Tristan an alum: 
student.alum = true;
//4. What will happen if you run tristan.module = 3? Why?
//You will recieve an error. There is no variable named Tristan.