var minimumAverage = function(nums) {
    nums.sort((a, b) => a - b);
    
    let averages = [];
    while (nums.length > 0) {
        // Remove the smallest and largest elements
        let minElement = nums.shift();
        let maxElement = nums.pop();
        
        // Calculate their average and add to averages array
        let average = (minElement + maxElement) / 2;
        averages.push(average);
    }
    
    // Return the minimum average
    return Math.min(...averages);
};

// Example test case
console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]));  // Output: 5.5
