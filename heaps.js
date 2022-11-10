// Access O(1)
// Insert O9(n)
//
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getMin() {
    return this.heap[1];
  }

  getHeap() {
    return this.heap;
  }

  insert(node) {
    // insert the node into the array at the end
    this.heap.push(node);

    // if the heap have a value
    if (this.heap.length > 1) {
      // mark the position of the node
      let position = this.heap.length - 1;
      //   while the position isn't the top and parent node is greater than the inserted node
      while (
        position > 1 &&
        this.heap[Math.floor(position / 2)] > this.heap[position]
      ) {
        // swap the nodes
        [this.heap[Math.floor(position / 2)], this.heap[position]] = [
          this.heap[position],
          this.heap[Math.floor(position / 2)],
        ];
        // set the position of the new node to the parent
        position = Math.floor(position / 2);
      }
    }
  }

  remove() {
    let top = this.heap[1];
    let position = 1;
    let leftChild = position * 2;
    let rightChild = position * 2 + 1;

    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return top;
      }

      //   let position = 1;
      //   let leftChild = position * 2;
      //   let rightChild = position * 2 + 1;

      while (
        this.heap[leftChild] &&
        this.heap[rightChild] &&
        (this.heap[position] > this.heap[leftChild] ||
          this.heap[position] > this.heap[rightChild])
      ) {
        if (this.heap[leftChild] < this.heap[rightChild]) {
          [this.heap[position], this.heap[leftChild]] = [
            this.heap[leftChild],
            this.heap[position],
          ];
          position = leftChild;
        } else {
          [this.heap[position], this.heap[rightChild]] = [
            this.heap[rightChild],
            this.heap[position],
          ];
          position = rightChild;
        }
        leftChild = position * 2;
        rightChild = position * 2 + 1;
      }
    } else if (
      this.heap[rightChild] === undefined &&
      this.heap[leftChild] < this.heap[position]
    ) {
      [this.heap[position], this.heap[leftChild]] = [
        this.heap[leftChild],
        this.heap[position],
      ];
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    return top;
  }
}

const minHeap = new MinHeap();
minHeap.insert(20);
console.log(minHeap.getHeap());
minHeap.insert(6);
console.log(minHeap.getHeap());
minHeap.insert(5);
console.log(minHeap.getHeap());
minHeap.insert(12);
console.log(minHeap.getHeap());
minHeap.insert(16);
console.log(minHeap.getHeap());
minHeap.insert(22);
console.log(minHeap.getHeap());
minHeap.insert(1);
console.log(minHeap.getHeap());
minHeap.insert(2);
console.log(minHeap.getHeap());
minHeap.insert(3);
console.log(minHeap.getHeap());

minHeap.remove();
console.log(minHeap.getHeap());
minHeap.remove();
console.log(minHeap.getHeap());
minHeap.remove();
console.log(minHeap.getHeap());
minHeap.remove();
console.log(minHeap.getHeap());
minHeap.remove();
console.log(minHeap.getHeap());
minHeap.remove();
console.log(minHeap.getHeap());
minHeap.remove();
console.log(minHeap.getHeap());
minHeap.remove();
console.log(minHeap.getHeap());
minHeap.remove();
console.log(minHeap.getHeap());
