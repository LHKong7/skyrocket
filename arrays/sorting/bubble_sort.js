let array = [64, 25, 12, 22, 11];

const bubbleSort = (arr, n) => {
    if (!arr) return;

    let swapped = false;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }

        if (!swapped) break;
    }
}

console.log("Original array: ", array);
bubbleSort(array, array.length);
console.log("Sorted array: ", array);

