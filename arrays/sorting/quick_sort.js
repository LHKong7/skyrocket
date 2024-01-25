let array = [64, 25, 12, 22, 11];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
};

const quickSort = (nums, left, right) => {
    if (left < right) {
        let partitionIdx = randomized_parition(nums, left, right);
        quickSort(nums, left, partitionIdx - 1);
        quickSort(nums, partitionIdx + 1, right);
    }
}

const randomized_parition = (nums, left, right) => {
    const randomIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    [nums[randomIndex], nums[right]] = [nums[right], nums[randomIndex]]
    return parition(nums, left, right);
}

const parition = (nums, left, right) => {
    const pivot = nums[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (nums[j] < pivot) {
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    [nums[i+1], nums[right]] = [nums[right], nums[i+1]];
    return i + 1;
}


console.log("Original array: ", array);
insertionSort(array, array.length);
console.log("Sorted array: ", array);

