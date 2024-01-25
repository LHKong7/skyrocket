let array = [64, 25, 12, 22, 11];

const insertionSort = (arr, n) => {
    if (!arr) return;

    for (let i = 1; i < n; i++) {
        const val = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > val) {
            arr[j+1] = arr[j];
            j--;
        }

        arr[j + 1] = val;
    }
}

console.log("Original array: ", array);
insertionSort(array, array.length);
console.log("Sorted array: ", array);

