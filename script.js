const divs = document.querySelectorAll(".mainResult")

console.log(divs)

function checkIfNegative(nodelist) {
  for (let i = 0; i < nodelist.length; i++) {
    if (Number(nodelist[i].textContent) < 0) {
      nodelist[i].classList.remove("mainResult")
      nodelist[i].classList.add("negativeResult")
    } else if (Number(nodelist[i].textContent) > 0) {
      nodelist[i].classList.remove("mainResult")
      nodelist[i].classList.add("positiveResult")
    } else {
      nodelist[i].classList.remove("mainResult")
      nodelist[i].classList.add("notANumber")
    }
  }
}

checkIfNegative(divs)
