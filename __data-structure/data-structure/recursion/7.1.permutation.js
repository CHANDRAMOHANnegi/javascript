
function permutation(str, asf) {
    if (str.length === 0) {
        console.log(asf + " ");

        return
    }

    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        const roq = str.substring(0, i) + str.substring(i + 1)

        permutation(roq, asf + ch)
    }

}

permutation("abc", "")

/*******
 * Here we are fixing the position of the character and then rotating other character
 * 
 * when the first loop will run, 
 * at first place, we will be fixing "a", "b", "c" and then rotating other character
 * 
 * 
 * Similar approach is used in
 * 1. combination-sum -2
 * 2. subsets - 2
 * 
 * where we remove duplicates
 * 
 * ***/ 