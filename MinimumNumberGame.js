var numberGame = function(nums) {
    const arr = [];
    nums.sort((a, b) => a - b); 
    
    while (nums.length > 0) {
        const alicePick = nums.shift();
        const bobPick = nums.shift();

        arr.push(bobPick);
        arr.push(alicePick);
    }
    return arr;
};
