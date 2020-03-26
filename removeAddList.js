let i = 1
let addButton = document.getElementById('addButton')
let removeButton = document.getElementById('removeButton')
let addList = document.getElementById('addList')
removeButton.disabled = true
const add = () => {
    let ul = document.createElement("ul")
    ul.innerHTML = `<li> tտեքստ  ${i++}</li>`
    addList.appendChild(ul)
    removeButton.disabled = false
}

const remove = () => {
    i--
    let li = document.getElementsByTagName('li')
    addList.removeChild(addList.childNodes[li.length - 1])
    if (li.length === 0) {
        removeButton.disabled = true
    }
}
addButton.addEventListener('click', add);
removeButton.addEventListener("click", remove);