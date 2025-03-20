var user = {
    data: [
        { name: "T. Woods", age: 37 },
        { name: "P. Mickelson", age: 43 }
    ],
    clickHandler: function (event) {
        console.log(this);
        console.log(event);

        var randomNum = ((Math.random() * 2 | 0) + 1) - 1;
        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    }
}

document.querySelector("button")
    .addEventListener("click", user.clickHandler);

// When you use a regular function in an event listener, 
// this refers to the element on which the event listener is registered.