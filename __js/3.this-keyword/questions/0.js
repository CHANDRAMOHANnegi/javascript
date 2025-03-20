const obj = {
    name: 'Outer Object',
    outerMethod() {
        console.log(this.name); // "Outer Object"

        function innerMethod() {
            console.log(this.name); // undefined (or global object in non-strict mode)
        }

        const innerArrow = () => {
            console.log(this.name); // "Outer Object" (inherited)
        };

        innerMethod();
        innerArrow();
    }
};

obj.outerMethod();