class SimpleHeap {
    constructor(comparatorFunc) {
        this.data = [];
        this.comparator = comparatorFunc;
    }

    insert(val) {
        if (this.data.length === 0) {
            this.data.push(val);
            return;
        } else {
            this.data.push(val);
            for (let i = Math.floor(this.data.length / 2) - 1; i >= 0; i--) {
                this.heapify(i);
            }
        }
    }

    deleteVal(val) {
        const index = this.data.indexOf(val);
        if (index === -1) return;

        [this.data[index], this.data[this.data.length - 1]] = [this.data[this.data.length - 1], this.data[index]];
        this.data.pop();
        for (let i = Math.floor(this.data.length / 2) - 1; i >= 0; i--) {
            this.heapify(i);
        }
    }

    extractMax() {
        if (this.data.length === 0) return null;
        if (this.data.length === 1) return this.data.pop();

        const max = this.data[0];
        this.data[0] = this.data.pop(); // replace root with last element
        this.heapify(0);
        return max;
    }

    heapify(idx) {
        let max = idx;

        let leftChildIdx = idx * 2 + 1;
        let rightChildIdx = idx * 2 + 2;

        if (leftChildIdx < this.data.length && this.comparator(this.data[leftChildIdx], this.data[max])) {
            max = leftChildIdx;
        }

        if (rightChildIdx < this.data.length && this.comparator(this.data[rightChildIdx], this.data[max])) {
            max = rightChildIdx;
        }

        if (max !== idx) {
            [this.data[idx], this.data[max]] = [this.data[max], this.data[idx]];
            this.heapify(max);
        }
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    let leftPtr = 0, rightPtr = 0;
    const maxHeap = new SimpleHeap((a, b) => a >= b);
    const res = [];

    while (rightPtr < n) {
        let currVal = nums[rightPtr];
        maxHeap.insert(currVal);

        if (rightPtr - leftPtr + 1 === k) {
            res.push(maxHeap.data[0]);
            maxHeap.deleteVal(nums[leftPtr]);
            leftPtr++;
        }

        rightPtr++;
    }

    return res;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow_deque = function(nums, k) {
    const n = nums.length;
    const queue = [];
    let leftPtr = 0, rightPtr = 0;
    const res = [];

    while (rightPtr < n) {
        let currVal = nums[rightPtr];
        while (queue[0] <= rightPtr - k) queue.shift();

        while (queue.length && currVal >= nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(rightPtr);

        if (rightPtr - leftPtr + 1 === k) {
            res.push(nums[queue[0]]);
            leftPtr++;
        }

        rightPtr++;
    }

    return res;
};

