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
  if (this.id === 'a') truesSelected++
  if (promptIdx === currQuiz.prompts.length) {
    concludeQuiz()
  } else {
    nextQuestion()
  }
}

function startQuiz(quizObj) {
  currQuiz = quizObj
  promptIdx = 0
  truesSelected = 0
  nextQuestion()
  updateTitle(currQuiz.title)
}

(function answerListener() {
  $(".option").click(answerHandler)
})();

(function nextQuizListener() {
  $("#next-quiz-button").click(() => {
    currQuizIdx = (currQuizIdx === quizArr.length - 1) ? 0 : ++currQuizIdx
    hideResult()
    updateOptionsImg("", "")
    startQuiz(quizArr[currQuizIdx])
  })
})()


startQuiz(quizArr[0])

  
