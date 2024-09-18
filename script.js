// const divs = document.querySelectorAll(".mainResult")

// function checkIfNegative(nodelist) {
//   for (let i = 0; i < nodelist.length; i++) {
//     if (Number(nodelist[i].textContent) < 0) {
//       nodelist[i].classList.remove("mainResult")
//       nodelist[i].classList.add("negativeResult")
//     } else if (Number(nodelist[i].textContent) > 0) {
//       nodelist[i].classList.remove("mainResult")
//       nodelist[i].classList.add("positiveResult")
//     } else {
//       nodelist[i].classList.remove("mainResult")
//       nodelist[i].classList.add("notANumber")
//     }
//   }
// }

// checkIfNegative(divs)

// if (element.classList.contains("negativeResult")

function addStyleBasedOfContent(element, content) {
    const convertedNumber = Number(content);
  
    if (Number.isNaN(convertedNumber)) {
      // return stoppar funktionen
      return;
    }
    if (convertedNumber < 0) {
      element.classList.add("negativeResult");
      return;
    }
    element.classList.add("positiveResult");
  }

  function addResultStyling() {
    const mainResultElements = document.querySelectorAll(".mainResult");
  
    for (let i = 0; i < mainResultElements.length; i++) {
      const content = mainResultElements[i].textContent;
  
      addStyleBasedOfContent(mainResultElements[i], content);
    }
  }

  // document.addEventListener("DOMContentLoaded", () => {
  //   console.log("Document is loaded, y'all");
  //   // addResultStyling();
  // });

addResultStyling()