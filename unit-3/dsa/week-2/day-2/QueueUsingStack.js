//implement queue using stacks

/*
Stack {
  push()
  top()
  pop()
  isEmpty()
}
*/
class Queue {
    constructor()
    {
        this.s1 = new Stack()
        this.s2 = new Stack()
    }
    push(value) {
    	this.s1.push(value);
     // console.log(this.s1);
      
    }
    pop() {
      while(this.s1.stack.length>1){
      this.s2.push(this.s1.stack.pop());
      }
     // deletes (shift()-)
    
      var temp=this.s1.pop();
      //swap two stacks
      this.s2.stack.reverse();
      [this.s1.stack,this.s2.stack]=[this.s2.stack,this.s1.stack]
      
       
    }
    front() {
    	//write your code here..
    return this.s1.stack[0];
      
    }
    isEmpty() {
    	//write your code here..
      if(this.s1.stack.length==0)
        return true;
      else
        return false;
    }
}

