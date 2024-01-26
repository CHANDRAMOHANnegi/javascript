/**
 * flatMap applies transformation(callback) to each element(can be array also) of an array(can be array of arrays) and 
 * flattens the resulting array by 1level if needed.
 */

let a = [1,2,3];
a.flatMap((element)=>element*2); // looks similar to map

/*append smthing to each element and return array at each iteration
resulting in array of arrays which flatMap flattens by one level*/
let b = [10,15,30].flatMap((element)=>[element,element*2]);
//console.log(b);

/**cb returns doubly nested array */
let c = [10,15,30].flatMap((element)=>[[element,element*2]]);
//console.log(c);

/**
 * flat(depth) => depth from 1(depth) to Infinity
 */

Array.prototype.myFlat = function(depth = 1){
    let array = this;
    let result = [];
    (function flatArray(array,depth){
        if(depth>=0){
            for(const ele of array){
                if(Array.isArray(ele))
                    flatArray(ele,depth-1)
                else
                    result.push(ele)
            }
        }
            else
                result.push(array)
        return;
    })(array,depth)
    return result;
}

Array.prototype.myflatMap = function(cb){
    let array = this;
    let result = [];
    for(i=0;i<array.length;i++){
        result.push(cb(array[i],i,array))
    }
    return result.myFlat();
}

let ans = [1,2,3].myflatMap((el)=>[el,el*2])
