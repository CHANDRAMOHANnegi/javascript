
// please complete the implementation
class EventEmitter {
    constructor(){
      this.listeners = {}
    }
  
    subscribe(eventName, callback) {
      if(this.listeners[eventName]){
        this.listeners[eventName].push(callback)
      }else{
        this.listeners[eventName]=[callback]
      }
      const index = this.listeners[eventName].length
      return {
        release:
      ()=>{
        this.listeners[eventName].splice(index-1,1)
      }}
    }
    
    emit(eventName, ...args) {
      for(const event of this.listeners[eventName]){
        event(...args)
      }
    }
  }