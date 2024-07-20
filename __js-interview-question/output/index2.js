"use strict";
var x = 5;
var y = 5;

function Operations(op1 = x, op2 = y) {
  this.x = op1;
  this.y = op2;
}

Operations.prototype.sum = () => this.x + this.y;

const op = new Operations(10, 20);

console.log(op.sum()); // 30
