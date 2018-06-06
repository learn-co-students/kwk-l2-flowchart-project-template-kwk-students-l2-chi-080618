var title = $("#title")
var prompt = $("#prompt")
var [optionA, optionB] = $(".option").toArray()
var resultWrapper = $("#result-wrapper")
var resultText = $("#result")

function updateTitle(str) {
  title.text(str)
}

function updatePrompt(str) {
  prompt.text(str)
}

function updateOptionsText(strA, strB) {
  optionA.innerText = strA
  optionB.innerText = strB
}

function updateOptionsImg(urlA, urlB) {
  updateOptionsText("", "")
  console.log(urlA);
  optionA.style.backgroundImage = urlA
  optionB.style.backgroundImage = urlB
}

function displayResult(str) {
  resultWrapper.css("opacity", 1)
  resultWrapper.css("pointer-events", "all")
  resultText.text(str)
}

function hideResult() {
  resultWrapper.css("opacity", 0)
  resultWrapper.css("pointer-events", "none")
}
