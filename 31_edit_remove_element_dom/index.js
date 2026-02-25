function addLanguage(langName) {
    const li = document.createElement("li");
    li.innerHTML = langName
    document.querySelector(".language").appendChild(li)
}
addLanguage("python")
addLanguage("java")
addLanguage("typescript")
function addOptiLanguage(langName) {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(langName))
    document.querySelector(".language").appendChild(li)


}
addOptiLanguage("going")

// edit the values 
const secondLang = document.querySelector("li:nth-child(2)")
const newLI = document.createElement("li")
newLI.textContent = "mojo"
secondLang.replaceWith(newLI)

const thirdLang = document.querySelector("li:nth-child(1)")
thirdLang.outerHTML = "<li>TypeScript</li>"

// remove 
const lastLang = document.querySelector("li:last-child")
lastLang.remove()