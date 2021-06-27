const MinStack = function() {
    this.stack = new Array();
    this.stackTop = -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(!this.isEmpty()){
        min = this.stack[this.stackTop][1];
        min = val < min ? val : min;
        this.stackTop++;
        return this.stack.push([val, min]);        
    }
    this.stackTop++;    
    this.stack.push([val, val])
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(!this.isEmpty()){
        this.stackTop--;
        return this.stack.pop()[0];        
    }    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(!this.isEmpty()){
        return this.stack[this.stackTop][0];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(!this.isEmpty()){
        return this.stack[this.stackTop][1];
    }
};

/**
 * @return {boolean}
 */
MinStack.prototype.isEmpty = function(){
    return this.stackTop === -1 ? true : false;
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
console.log(minStack.pop());
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2