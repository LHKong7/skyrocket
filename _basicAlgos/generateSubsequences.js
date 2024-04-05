const generateSubsequences = (nums) => {
    const results = [];

    function backTrack(current, rest) {
        if (rest.length === 0) {
            results.push(current);
            return;
        }

        // Include the first element
        backTrack(current + rest[0], rest.slice(1));
        // Exclude the first element
        backTrack(current, rest.slice(1));
    }

    backTrack([], nums);
    return results;
}

// itearte method to generate all subsequences
const generateAllSubsequences = () => {
    
}

console.log(generateSubsequences([1, 2, 3]))

