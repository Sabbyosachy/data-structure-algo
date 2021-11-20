//Last In First Out => LIFO

class Stack{
    constructor(){
         this.stack=[]
    }

    add(element){
      this.stack.push(element);
    }

    remove(){
        return this.stack.pop();
    }
}
const plates=new Stack();
plates.add('Korim');
plates.add('Zaman');
plates.add('Limon');
plates.add('Rukul');
plates.add('Noyon');

console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);

