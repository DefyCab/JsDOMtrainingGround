function getUsers() {
  fetch("https://randomuser.me/api/?gender=female&results=30")
    .then((response) => response.json())
    .then((data) => console.log(data))
}

document.addEventListener("DOMContentLoaded", () => {
  getUsers()
})
