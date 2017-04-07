![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Vikings *Object Oriented Programming*

## Introduction

We have learned Object Oriented Programming and Prototypal inheritance with JavaScript. Now we will work with our Viking friends applying all the concepts we just learned today. Let's start with the exercise.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- Make sure you use objects and prototypal inheritance during the exercise.
- We should follow good object oriented principals.

## Submission

- Upon completion, run the following commands

```
git add .
git commit -m "done"
git push origin master
```

- Navigate to your repo and [create a Pull Request](https://help.github.com/articles/creating-a-pull-request/)

## Testing Introduction

### What is testing?

Software testing is a process of executing an application to validate and verify that it meets the business and technical requirements and works as expected.

Testing is a process, not a single activity. So the process of designing tests early at the beginning of the development and the product's life cycle can help to prevent deficiencies in the code or product design.

In this exercise, we have created all the tests you need to create the solution, and you have to execute them all and create the code to accomplish all the requirements.

Tests prove that your code actually works in every situation in which it’s designed to work. Even when you are improving the design or creating new features, you can change your current code without breaking what already works.

### Testing with Jasmine

![Jasmine Logo](https://i.imgur.com/A1pop7h.png)

Jasmine is an automated testing framework for JavaScript. It is designed to be used in BDD (behavior-driven development) programming which focuses more on the business value than on the technical details.

We have already included Jasmine in the project you just forked, so let's see how to use it to implement our code.

### Usage

Before start coding, we will explain the project structure we have provided you:

```
starter-code/
├── lib
│   ├── jasmine-2.5.2/
│   |   └── ...
│   ├── .gitkeep
│   └── jquery-3.1.1.min.js
├── spec
│   └── VikingSpec.js
├── src
│   └── viking.js
└─ SpecRunner.html
```

We are going to be working with the files inside the `spec` and `src` folders. In the `lib` folder you can find all the files that compose Jasmine, that are already linked with the `SpecRunner.html` file.

**Run tests**

Run the tests with Jasmine is super easy, you just have to open the `SpecRunner.html` file in your browser. You will find something like this:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_efa91dc3a708695262d274908469649c.png)

It means that right now we have two different tests and just one is passing. We have to implement the code to pass both tests.

**Write the code**

You have to write the correct code to pass the tests in the `src/viking.js` file. The starter code you will find in the file is the following:

```javascript
// Soldier
function Soldier () {}

// Viking
function Viking () {}

// Saxon
function Saxon () {}

// War
function War () {}
```

In this case, the test says that `Soldiers Should have a number of health`, so we have to write the correct code that accomplishes this test. Once we have implemented the correct code, we can refresh the `SpecRunner.html` page to see how our tests are passing.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_d3f5633180f716941b65b193832b96bd.png)

![For the win](https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif)

**Execute all the tests**

Now that we are passing two tests, the next step is to uncomment the next test. To do that, we have to remove the comment from the `spec/VikingSpec.js` file, and refresh the page to see what we have to implement next:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ce10ddc36ffcf5b9c3235bf882f75b0a.png)

Once we have checked out that the test is failing, we can implement the code to make it pass. This is how [TDD (Test-driven development)](https://en.wikipedia.org/wiki/Test-driven_development) works. Once you have implemented the code to pass all the tests, the exercise will be done.

**Note this is a very big picture about Jasmine and TDD. We will learn how to use Jasmine in the future lessons of the course :)**

## Exercise

![](https://i.imgur.com/5TPElt8.jpg)

### Soldier
- Create a new `soldier` constructor function that allows you to create soldiers.
- A `soldier` should be able to have `health`, `strength`, `attack`, and `receiveDamage`.
- The `soldier` attack will use all his `strength` to create damage.
- When he receives a damage, that damage will be removed from his `health`.

### Viking
- Create a new `viking` function that allows you to create vikings.
- The vikings will be `soldiers` with a `name`.
- Each viking in the army will have a `battleCry`, a `console.log` that writes **"Odin Owns You All!"**. ([Learn more about battle cries](http://www.artofmanliness.com/2015/06/08/battle-cries/))
- The application should inform us when the vikings receive damage, by logging **"{vikingName} has received {amountOfDamage} points of damage"**.
- If a Viking dies in combat, the application should log **"{vikingName} has died in act of combat"**.

### Saxons
- Create a new `saxons` function that allows you to create saxons, that will be weaker than `vikings`.
- The application should inform us when the saxons receive damage, by logging **"A Saxon has received {amountOfDamage} points of damage"**.
- If a Saxon dies in combat, the application should log **"A Saxon has died in combat"**.

### War
- Create a new `war` function that allows us to have a Vikings army and a Saxons army to fight between them.
- It should has a `saxonAttack` function to attack the vikings.
- It should has a `vikingAttack` function to attack the saxons.
- It should has a `showStats` function to show a message of how have won the combat.

**//Happy Coding!!**

![Vikings picture](https://i.imgur.com/fHHEoEj.jpg)
