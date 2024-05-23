var sumIndicesWithKSetBits = function(nums, k) {
    const countSetBits = (n) => {
        let count = 0;
        while (n) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    };

    let result = 0;
    for(let i = 0; i < nums.length; i++) {
        if (countSetBits(i) === k) {
            result += nums[i];
        }
    }
    return result;
}; 
