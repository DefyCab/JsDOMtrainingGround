function getUsers(element) {
  fetch("https://randomuser.me/api/?gender=female&results=30")
    .then((response) => response.json())
    .then((data) => {
      element.textContent = data.results.length
    })
}

document.addEventListener("DOMContentLoaded", () => {
  const mainElement = document.querySelector("main")
  getUsers(mainElement)
})
