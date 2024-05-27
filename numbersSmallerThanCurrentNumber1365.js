var smallerNumbersThanCurrent = function(nums) {
    let sortedIndices = nums.map((value, index) => [value, index]).sort((a, b) => a[0] - b[0]);

    let result = new Array(nums.length);

    let countMap = {};

    // Iterate over the sorted indices
    for (let i = 0; i < sortedIndices.length; i++) {
        let [value, originalIndex] = sortedIndices[i];

        // If the value is not already in the map, set it with the current index.
        if (!(value in countMap)) {
            countMap[value] = i;
        }

        // Set the result for the original index
        result[originalIndex] = countMap[value];
    }

    return result;
};
