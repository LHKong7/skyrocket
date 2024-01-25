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
