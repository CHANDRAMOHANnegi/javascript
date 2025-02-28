
class Heap{
    constructor(comparator){
        this.queue = []
        this.comparator = comparator
    }
    size(){return this.queue.length}
    add(num){
        this.queue.push(num)
        this.upHeapify(this.size()-1)
    }
    remove(){
        if(!this.size())return 
        const last = this.size()-1
        this.#swap(last,0)
        // swapped
        const res = this.queue.pop()
        this.downHeapify(0)
        return res
    }
    upHeapify(index){
        if(index<=0)return
        const pi = this.#parent(index)
        if(this.comparator(this.queue[pi],this.queue[index]) > 0){
            this.#swap(pi,index)
            this.upHeapify(pi)
        }
    }
    downHeapify(index){
        const li = this.#left(index)
        const ri = this.#right(index)
        let minI = index
        if(li < this.size() && this.comparator(this.queue[minI],this.queue[li]) > 0){
            minI=li
        }
        if(ri < this.size() && this.comparator(this.queue[minI],this.queue[ri]) > 0){
            minI=ri
        }
        if(minI!==index){
            this.#swap(minI,index)
            this.downHeapify(minI)
        }
    }
    #parent(child){
        return Math.floor((child - 1)/2)
    }
    #left(parent){
        return (parent * 2) + 1
    }
    #right(parent){
        return (parent * 2) + 2
    }
    #swap(i,j){
        const temp = this.queue[i]
        this.queue[i]=this.queue[j]
        this.queue[j] = temp 
    }
    peek(){
        return this.queue[0]
    }
}
