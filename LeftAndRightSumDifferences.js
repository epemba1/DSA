var leftRightDifference = function(nums) {
    const n = nums.length;
    const leftSum = new Array(n).fill(0);
    const rightSum = new Array(n).fill(0);
    const answer = new Array(n).fill(0);

    //Calculate leftSum array
    for (let i = 1; i < n; i++) {
        leftSum[i] = leftSum[i - 1] + nums[i - 1];
    }

    //Calculate rightSum array
    for (let i = n - 2; i >= 0; i--) {
        rightSum[i] = rightSum[i + 1] + nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        answer[i] = Math.abs(leftSum[i] - rightSum[i]);
    }
    return answer;
};
