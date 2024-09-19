document.addEventListener("DOMContentLoaded", () => {
  console.log("Document is loaded, y'all")
  addResultStyling()
})

const btn = document.getElementById("btnInversion")
btn.addEventListener("click", () => {
  invertColorsOfResults()
})

function addStyleBasedOfContent(element, content) {
  const convertedNumber = Number(content)

  if (Number.isNaN(convertedNumber)) {
    // return stoppar funktionen
    return
  }
  if (convertedNumber < 0) {
    element.classList.add("negativeResult")
    return
  }
  element.classList.add("positiveResult")
}

function addResultStyling() {
  const mainResultElements = document.querySelectorAll(".mainResult")

  for (let i = 0; i < mainResultElements.length; i++) {
    const content = mainResultElements[i].textContent

    addStyleBasedOfContent(mainResultElements[i], content)
  }
}

function invertColorsOfResults() {
  const mainResultElements = document.querySelectorAll(".mainResult")

  for (let i = 0; i < mainResultElements.length; i++) {
    const element = mainResultElements[i]
    console.log(element.textContent)

    if (element.classList.contains("positiveResult")) {
      element.classList.remove("positiveResult")
      element.classList.add("negativeResult")
      continue
    }

    if (element.classList.contains("negativeResult")) {
      element.classList.remove("negativeResult")
      element.classList.add("positiveResult")
      continue
    }
  }
}

