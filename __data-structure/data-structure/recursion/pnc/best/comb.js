const permutations = (boxes, items, result,) => {
    const helpers = (itemIndex, boxes, items, result, prevItem) => {
        if (itemIndex > items) {
            result.push([...boxes])
            return
        }

        for (let index = prevItem + 1; index < boxes.length; index++) {
            if (boxes[index] === 0) {
                boxes[index] = itemIndex
                helpers(itemIndex + 1, boxes, items, result, index)
                boxes[index] = 0
            }
        }
    }

    helpers(1, boxes, items, result, -1)
}


const items = 2
const box = 3

const result = []
const boxes = Array(box).fill(0)

permutations(boxes, items, result)
console.log(result);
