/**
 * ISP :interface segregation principle
 * 
 * */

interface IWorker {
    work(): void
    eat(): void
}

class Developer implements IWorker {
    work(): void {
        console.log('Coding..');
    }
    eat(): void {
        console.log('Eating..');
    }
}

class Robot implements IWorker {
    work(): void {
        console.log('Building a car..');
    }

    /**
     * ! cant eat
     * Cant eat
     * */ 
    eat(): void {
        console.log('Eating..');
    }
}


