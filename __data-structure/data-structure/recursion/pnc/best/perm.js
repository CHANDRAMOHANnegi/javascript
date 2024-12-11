const permutations = (boxes, items, result) => {

    const helpers = (itemIndex, boxes, items, result) => {
        if (itemIndex > items) {
            result.push([...boxes])
            return
        }

        for (let index = 0; index < boxes.length; index++) {
            if (boxes[index] === 0) {
                boxes[index] = itemIndex
                helpers(itemIndex + 1, boxes, items, result)
                boxes[index] = 0
            }
        }
    }

    helpers(1, boxes, items, result)
}


const items = 2
const box = 3

const result = []
const boxes = Array(box).fill(0)

permutations(boxes, items, result)
console.log(result);
