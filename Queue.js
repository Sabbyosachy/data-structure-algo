//Fisrt in Fist Out =>FIFO


class Queue{
 
    constructor(){
        this.queue=[]
    }
    add(element){
        this.queue.push(element);
    }

    remove(){
        return this.queue.shift();
    }
}

const plates=new Queue();
plates.add('Korim');
plates.add('Rahim');
plates.add('Ruhul');
plates.add('Tajul');

console.log(plates.queue);
plates.remove()
console.log(plates.queue);