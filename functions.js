function getCompanyName(name) {
  return `${name}`
}

myFunctions = {
  getCompanyName2: (name) => {
    return `${name}`
  },
};

const companyName = getCompanyName("Salt")
const companyName2 = getCompanyName("S A L T")

const boldNodes = document.getElementsByClassName("bold");

for (let i = 0; i < boldNodes.length; i++) {
  boldNodes[i].innerHTML += " ... and bold";
}

const companyNameElement = document.querySelector("#companyName");
companyNameElement.innerHTML =
  companyName + " set using a query selector by id";

const boldNodesQuerySelected = document.querySelectorAll(".bold");
for (let i = 0; i < boldNodes.length; i++) {
  boldNodes[i].innerHTML += " ... and bold selected with query";
}


document.getElementById("companyName1").innerHTML = companyName
document.getElementsByTagName("div")[2].innerHTML = companyName2;
document.getElementsByTagName("div")[1].innerHTML = "Jag heter Love"

console.log("salt> Functions loaded")
