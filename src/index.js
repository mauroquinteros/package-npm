const messages = [
  "Mauro",
  "Ana",
  "Laura",
  "Julio",
  "Luis",
  "Thalia",
  "Carol",
  "Anny"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = { randomMsg }