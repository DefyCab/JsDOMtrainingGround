function getCompanyName(name) {
  return `${name}`
}

myFunctions = {
  getCompanyName2: (name) => {
    return `${name}`
  },
}

const items = ["Love", "Erik", "Sven"]

function addListInMain(numberOfListItems) {
  const ulElement = document.createElement("ul")
  console.log(ulElement)

  for (let i = 0; i < numberOfListItems; i++) {
    const liItem = document.createElement("li")
    //textContent is like writing between ><
    liItem.textContent = `Item #${i + 1}`

    ulElement.appendChild(liItem)
  }

  // . means class otherwise main element
  const main = document.querySelector(".main")
  main.appendChild(ulElement)
}

addListInMain(10)

const companyName = getCompanyName("Salt")
const companyName2 = getCompanyName("S A L T")

const boldNodes = document.getElementsByClassName("bold")

for (let i = 0; i < boldNodes.length; i++) {
  boldNodes[i].innerHTML += " ... and bold"
}

const companyNameElement = document.querySelector("#companyName")
companyNameElement.innerHTML = companyName + " set using a query selector by id"

const boldNodesQuerySelected = document.querySelectorAll(".bold")
for (let i = 0; i < boldNodes.length; i++) {
  boldNodes[i].innerHTML += " ... and bold selected with query"
}

document.getElementById("companyName1").innerHTML = companyName
document.getElementsByTagName("div")[2].innerHTML = companyName2
document.getElementsByTagName("div")[1].innerHTML = "Jag heter Love"

console.log("salt> Functions loaded")
