
interface Workable {
    work(): void
}

interface Eatable {
    eat(): void
}


class DDeveloper implements Workable,Eatable {
    work(): void {
        console.log('Coding..');
    }
    eat(): void {
        console.log('Eating..');
    }
}

class RRobot implements Workable {
    work(): void {
        console.log('Building a car..');
    }
}