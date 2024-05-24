var numberGame = function(nums) {
    const arr = [];
    nums.sort((a, b) => a - b); //Sort nums in ascending order
    
    while (nums.length > 0) {
        const alicePick = nums.shift();
        const bobPick = nums.shift();

        arr.push(bobPick);
        arr.push(alicePick);
    }
    return arr;
};
