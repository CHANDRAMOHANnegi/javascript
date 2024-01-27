class IO {
    constructor(cb){
        this.observers = []
        this.cb = cb;
        window.addEventListener('scroll',()=>{
            this.findIntersectionNodes();
        })
    }
    subscribe(el){
        this.observers.push(el)
    }
    calculateElementVisibility(element) {
        const rect = element.getBoundingClientRect();
        
        // Calculate the intersection height between the element and the viewport
        const intersectionHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        
        // Calculate the total height of the element
        const elementHeight = Math.min(rect.height, window.innerHeight);
        
        // Calculate the percentage of the element in the viewport
        const percentageVisible = (intersectionHeight / elementHeight) * 100;
        
        return percentageVisible;
    }
    findIntersectionNodes(){
         for (let i = 0; i < this.observers.length; i++) {
           if(this.calculateElementVisibility(this.observers[i]) >= 0.5){
            this.observers[i].isIntersected = true;
            this.broadcast(); 
           }
            else
            this.observers[i].isIntersected = false;
         }
    }
    broadcast(){
        this.cb(this.observers)
    }
}

const boxElement = document.querySelector("#red");

let observer = new IO((entries) => {
 entries.forEach((entry)=>console.log(entry.isIntersected,'test'));
});

observer.subscribe(boxElement);

