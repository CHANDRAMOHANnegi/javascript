const combToPerm = (totalBoxes, totalItems) => {

    const helper = (currentBox, currentAns, totalBoxes, totalItems, result) => {
        if (currentBox > totalBoxes) {
            result.push([...currentAns])
            return
        }

        helper(currentBox + 1, [...currentAns, 0], totalBoxes, totalItems, result)

        for (let i = 1; i <= totalItems; i++) {
            if (!currentAns.includes(i)) {
                helper(currentBox + 1, [...currentAns, i], totalBoxes, totalItems, result)
            }
        }
    }
    const result = []
    helper(1, [], totalBoxes, totalItems, result)
    return result
}


console.log(combToPerm(4, 4))