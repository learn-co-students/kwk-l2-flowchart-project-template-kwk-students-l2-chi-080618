
// we are naming some globals here to make our life easier and not need to call the $("identifier") notation all the time
var title = $("#title")
var prompt = $("#prompt")
var [optionA, optionB] = $(".option").toArray()
var resultWrapper = $("#result-wrapper")
var resultText = $("#result")

// updates the title element, which displays the title of the quiz the user is currently taking
function updateTitle(str) {
  title.text(str)
}

// updates the text inside of the prompt div
function updatePrompt(str) {
  prompt.text(str)
}

// If we want our user selectable options to be text, we shold use this.
function updateOptionsText(strA, strB) {
  optionA.innerText = strA
  optionB.innerText = strB
}

// If we want our user selectable options to be images, we can use this!
function updateOptionsImg(urlA, urlB) {
  updateOptionsText("", "") // first we reset the text
  optionA.style.backgroundImage = urlA
  optionB.style.backgroundImage = urlB
}

// This makes the results div visible and also 'clickable'
function displayResult(str) {
  resultWrapper.css("opacity", 1)
  resultWrapper.css("pointer-events", "all")
  resultText.text(str)
}

// this makes the results div invisible and 'unclickable'
function hideResult() {
  resultWrapper.css("opacity", 0)
  resultWrapper.css("pointer-events", "none")
}
