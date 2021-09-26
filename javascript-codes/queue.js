// This code is meant for the exercise to create a queue class from scratch
//console.clear()

class Queue {
    constructor() {
        this.itemList = [];
    }
    //Push to Queue
    push(item){
        this.itemList.push(item);
    }
    //List Items of Queue
    check(){
        console.log(this.itemList);
    }
    //Pop first item of Queue
    pop(){
        if (this.itemList.length == 0) return console.log(`Queue is currently empty!`);
        this.itemList.shift();
    }

}

// Create a random list of items for testing
const initializeTestCase = () => {
    const numberOfItems = Math.floor(Math.random() * 10);
    let items = [];
    while (numberOfItems > 0){
        const randomString = Math.random().toString(36).substring(2,7);
        testCase.push(randomString);
    }
    return items;
}

// Initialize the testing
const testQueueClass = () => {
    const testCase = initializeTestcase();
    const my_queue = new Queue();

    for(item in testCase) {
        my_queue.push(item);
    }
}

// Sample test case from provided pseudocode
const testQueue = () => {
    const my_queue = new Queue();
    my_queue.push('Milk');
    my_queue.push('Eggs');
    my_queue.push('Ham');
    my_queue.push('Bacon');
    my_queue.check();       
    my_queue.pop();
    my_queue.check();          
    my_queue.pop();
    my_queue.check();
    my_queue.pop();
    my_queue.check();
    my_queue.pop();
    my_queue.check();
    my_queue.pop();
    return true
}

let bool = testQueue()
 //let bool = testQueueClass();
 if(bool) console.log('Success!'); else console.log('Error!');         


