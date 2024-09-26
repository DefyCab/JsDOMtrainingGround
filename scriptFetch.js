function getUsers(element) {
  fetch("https://randomuser.me/api/?gender=female&results=30")
    .then((response) => response.json())
    .then((data) => {
      const userList = document.createElement("div")

      for (let i = 0; i < data.results.length; i++) {
        const user = data.results[i]
        const userHeading = document.createElement("h2")
        userHeading.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`

        const userImage = document.createElement("img")
        userImage.src = `${user.picture.thumbnail}`

        const userDiv = document.createElement("div")
        userDiv.appendChild(userHeading)
        userDiv.appendChild(userImage)

        userList.appendChild(userDiv)
      }

      element.appendChild(userList)
    })
}

document.addEventListener("DOMContentLoaded", () => {
  const mainElement = document.querySelector("main")
  getUsers(mainElement)
})
