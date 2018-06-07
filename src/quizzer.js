var quizArr = Object.values(quizBlobs)
var currQuizIdx = 0
var currQuiz = null
var promptIdx = 0
var truesSelected = 0

function concludeQuiz() {
  if (truesSelected < currQuiz.results.trueTheshold) {
    displayResult(currQuiz.results.false)
  } else {
    displayResult(currQuiz.results.true)
  } 
}

function nextQuestion() {
  // this gets the next prompt out of our quiz object (which we got from `seed.json`) and updates it on the dom
  var newPrompt = currQuiz.prompts[promptIdx]
  updatePrompt(newPrompt.promptText)
  
  if (currQuiz.type === "text") {
    updateOptionsText(newPrompt.trueResponse, newPrompt.falseResponse)
  } else if (currQuiz.type === "img") {
    updateOptionsImg(newPrompt.trueResponse, newPrompt.falseResponse)
  }
  
  promptIdx++
}

function answerHandler(selectedID) {
  // this executes whenever a user selects a specific option
  if (this.id === 'true') {
    truesSelected++
  }
  
  // if we completed all of the prompts for the current quiz
  if (promptIdx === currQuiz.prompts.length) {
    concludeQuiz()
  } else {
    nextQuestion()
  }
}

function startQuiz(quizObj) {
  // reset all of the quiz variables, update the title, and give the first question
  currQuiz = quizObj
  promptIdx = 0
  truesSelected = 0
  updateTitle(currQuiz.title)
  nextQuestion()
}

function answerListener() {
  // this listens for clicks on our user selectable options
  $(".option").click(answerHandler)
}

function nextQuizListener() {
  // this listens for clicks on our "Display next quiz?" button on the results page
  $("#next-quiz-button").click(() => {
    // if this was the last quiz in the collection, restart at the first one
    if (currQuizIdx === quizArr.length - 1) {
      currQuizIdx = 0
    } else {
      currQuizIdx++
    }
    
    hideResult()
    updateOptionsImg("", "")
    startQuiz(quizArr[currQuizIdx])
  })
}

answerListener()
nextQuizListener()

startQuiz(quizArr[0])

  
