(() => {
  'use strict'
  const ws = io.connect()

  ws.on('connect', socket => {
    console.log('socket conencted');
  })

  const form = document.querySelector('form')
  const name = document.querySelector('input[name="name"]')
  const text = document.querySelector('input[name="text"]')
  const ul = document.querySelector('ul')

  form.addEventListener('submit', () => {
    const [n, t] = [name.value, text.value]
    
    ws.emit('sendChat', {
      name: n,
      text: t
    })

    displayChat(n, t)  

    event.preventDefault()
  })

  function displayChat () {
    const li = generateLI(name.value, text.value)

    text.value = ''
    ul.appendChild(li)
  }

  function generateLI (name, text) {
    const li = document.createElement('li')
    const textNode = document.createTextNode(`${name}: ${text}`)

    li.appendChild(textNode)
    return li
  }

  function getJSON(url, db) {
    const request = new XMLHttpRequest()
    request.open('GET', url)

    request
  }

})();