// Write your code here!
const element = document.getElementById('main')
element.remove();

let newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.innerHTML = "Charles is the champion"

document.body.append(newHeader) 