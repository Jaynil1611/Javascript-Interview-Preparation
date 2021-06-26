class Stack {
  constructor(size) {
    this.size = size;
    this.data = new Array(size);
    this.currentIndex = -1;
  }

  push(params) {
    let succeeded = false;
    if (this.currentIndex < this.size - 1) {
      this.currentIndex++;
      this.data[this.currentIndex] = params;
      succeeded = true;
    }
    return succeeded;
  }

  pop() {
    let poppedElement = null;
    if (!this.isEmpty()) {
      poppedElement = this.data[this.currentIndex];
      this.data[this.currentIndex] = null;
      this.currentIndex--;
    }
    return poppedElement;
  }

  topOfStack() {
    let poppedElement = null;
    if (!this.isEmpty()) {
      poppedElement = this.data[this.currentIndex];
    }
    return poppedElement;
  }

  isEmpty() {
    return this.currentIndex === -1 ? true : false;
  }
}

const matchBracket = {
  "[": "]",
  "{": "}",
  "(": ")"
};

const checkBalancedParanthesis = (string) => {
  const stack = new Stack(string.length);
  for (let i = 0; i < string.length; i++) {
    if (Object.keys(matchBracket).includes(string[i])) {
      stack.push(string[i]);
    } else if (
      !stack.isEmpty() &&
      matchBracket[stack.topOfStack()] === string[i]
    ) {
      stack.pop();
    } else {
      break;
    }
  }
  return stack.isEmpty() ? true : false;
};

console.log(checkBalancedParanthesis("[({})]"));
