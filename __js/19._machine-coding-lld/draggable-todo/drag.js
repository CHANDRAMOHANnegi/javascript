const draggable = document.querySelectorAll("li")
const droppable = document.querySelectorAll("ul")

draggable.forEach(drag => {
    drag.addEventListener("dragstart", function () {
        drag.classList.add("dragging")
    })

    drag.addEventListener("dragend", function () {
        drag.classList.remove("dragging")
    })
})

droppable.forEach(zone => {
    zone.addEventListener("dragover", function (event) {
        // console.log(event);
        event.preventDefault()

        const bottomTask = insertAboveTask(zone, event.clientY)
        const current = document.querySelector(".dragging")

        if(bottomTask){
            zone.insertBefore(current, bottomTask)
        }else{
            zone.appendChild(current)
        }
        // zone.style.backgroundColor="red"
    })
})

function insertAboveTask(zone, mouse_y) {
    const all_items = zone.querySelectorAll("li:not(.dragging)")

    console.log(all_items);
    

    let closestTask = null
    let closestOffset = Number.NEGATIVE_INFINITY

    all_items.forEach(item => {
        const { top } = item.getBoundingClientRect()
        const diff = top - mouse_y
        if (diff > 0) {
            if (diff > closestOffset) {
                closestOffset = diff
                closestTask = item
            }
        }
    })
    return closestTask
}