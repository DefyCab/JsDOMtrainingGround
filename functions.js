function getCompanyName(name) {
  return `${name}`
}

const companyName = getCompanyName("Salt")
const companyName2 = getCompanyName("S A L T")

document.getElementById("companyName").innerHTML = companyName
document.getElementsByTagName("div")[2].innerHTML = companyName2;
document.getElementsByTagName("div")[1].innerHTML = "Jag heter Love"

console.log("salt> Functions loaded")
