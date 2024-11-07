const data = [
    { id: 1, content: "hello-world 1", label: "tab 1" },
    { id: 2, content: "hello-world 2", label: "tab 2" },
    { id: 3, content: "hello-world 3", label: "tab 3" },
]

document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelector('.tabs')

    const tabContentContainer = document.querySelector('.tabContentContainer')

    const tabsList = document.createElement("ul")

    tabs.appendChild(tabsList)

    let selectedTabId = data[0].id

    function createTab(tabData) {
        const li = document.createElement("li")
        li.innerHTML = tabData.label
        li.setAttribute("data-id", tabData.id)
        tabsList.appendChild(li)
    }

    data.forEach(createTab)

    tabsList.addEventListener("click", function (event) {
        const target = event.target
        console.log(target.dataset.id);
        if (target.tagName === "LI") {
            const dataId = parseInt(target.dataset.id)
            selectedTabId = dataId
            updateContent(selectedTabId)
            target.classList.add("selected")
        }
    })

    function updateContent(selectedTabId) {
        const content = data.find(d => d.id === selectedTabId).content

        const allItems = tabsList.childNodes

        allItems.forEach(target=>{
            const dataId = parseInt(target.dataset.id)
            console.log(dataId);
            if(selectedTabId !== dataId){
               target.classList.remove('selected')
            }

        })

        tabContentContainer.innerHTML = `<p>${content}</p>`
    }

    updateContent(selectedTabId)

})