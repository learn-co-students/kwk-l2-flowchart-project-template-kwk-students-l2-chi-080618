# Kode with Klossy  - Flowchart Application Project


## Overview

For your final project, we are going to start you off with a "Flowchart" style application that can lead a person down a [decision tree](https://www.pinterest.com/pin/125819383316124395/).

You can build all sorts of useful applications with this model, from helping someone pick a major in college, to deciding whether you should have another cookie (yes. always.), to knowing whether your friend might need help, to all sorts of use-cases. That's what makes this type of project fun: once you get the framework of the code working, you can add your own content and help people make better decisions.

Following is a sample version of what the working code may look like in the browser:

<img src="./completed-example.gif" align="center"/>


## Concept

[Flowcharts](https://en.wikipedia.org/wiki/Flowchart) or "Decision Trees" work by posing a question to a person and based on the answer they give, leading them to another question, until finally, you have a resolution.

For now, don't worry about the content or domain of your flow chart, you first have to implement the general functionality of the app before worrying about the content.


## Starter Code

As usual, we don't want you spending too much time wrestling with the basic HTML or CSS: `index.css` and `index.html` have been populated with everything you may need to get a simple implementation working (with you just needing to program the JavaScript). That being said, this is your final project and you should take the initiative to make it look, and function, however you like! Think of the base code provided here to be only an outline, and use it as a jumping off point. 

We have provided you with sample JavaScript code located in the `src/` directory. You will notice we have two files, which we use to split up responsibility (both are being imported in `index.html`):

`src/domAdapter.js` contains our functions that do the actual _changing_ of the DOM. For example, `updatePrompt(str)` takes in a string as an argument and replaces the prompt `<div>`'s contents with that string. You will notice that there are **no** functions in `domAdapter.js` that handle the actual quizzing application logic!

`src/quizzer.js` contains our functions that manage our application logic. They are responsible for starting the quiz, managing prompts and their user selected responses, and displaying results. Our quizzer app is getting all of its actual content (i.e. what the prompts are, what the provided answer options are, etc.) from the `data/seed.json` file. As you are now JSON experts, you should take a moment to get familiar with how we structured our JSON tree, because it is used in `quizzer.js`.


#### Using the JSON Data

As mentioned, the JSON file is the source of our actual quiz content, and `quizzer.js` is responsible for managing the delivery of that content (i.e. the quizzes themselves). If you look at the first line in `quizzer.js`, you will see that we are grabbing all of the quiz objects from our JSON and placing them in an array. The function `Object.values(obj)` simply ignores the keys of an object and places all of the values into an array. For example:

```js
myObj = {
  a: "hello",
  b: "goodbye"
}

var arr = Object.values(myObj)
console.log(arr)
// > [ "hello", "goodbye" ]
```

Using this, we can have a neat array of quiz objects that have all the data we need to display and run them, be it their title, prompts, or quiz type.


## Getting Started

We have provided only one basic implementation of this flowchart idea. In our example, we check if the amount of 'true' responses for the prompts are greater than the 'trueThreshold' and then display a result accordingly. 

As it currently stands, our application functions similar to a pass/not-pass quiz. The user either selects enough 'true' answers, (or not), and a result is given based on that. 

As you can see, the starter code isn't a true implementation of a decision tree. It always asks the same amount of questions, and answering one way or another won't change the questions that follow. 

Take a moment to run the code as is by opening `index.html`. For every event that you see or engage with on the DOM, go back to the code in `quizzer.js` and see what function it is controlling your user experience.


## Your Job

Ultimately, this is your final project, and you should take this in whatever direction most interests you! Following are a few ideas to get the creative juices flowing:

---

#### Expand the decision tree

Instead of checking whether enough "true" answers were selected, expand your decision tree to have different follow up questions for different answers, i.e.:
  
Should I go out tonight?
```
  "Are you tired?" ('yes' or 'no')  
    if yes --> "Do you lack sleep or are you worn out?" ('I lack sleep' or 'I'm worn out')  
    if no  --> "Do you have any obligations tonight?" ('Yes!' or 'No!')
```

Here are a few starter ideas: 

- What college should I go to?
- What should I major in?
- What movie should I watch tonight?
- What should I do if I'm being bullied?
---

#### Turn it into an actual quiz

Tally up the amount of correct answers and provide the user with a percentage score at the end of the quiz. For advanced implementations, give the questions different 'weights'. 

---

#### Expand on the image concept

Instead of having a user select a specific image based only on a text prompt, lookup how to use an [HTML `<audio>` tag][audio] and play a sound when a prompt is updated (i.e. a lion's roar), and have them guess which answer prompt the sound is associated with (i.e. lion or tiger). 

---

## Most Importantly

Have fun with it! Take what we have provided (or not!) and run with it in whatever direction you see fit. 



[audio]: https://www.w3schools.com/html/html5_audio.asp
