var twoSum = function(nums, target) {
    let pairs = {};
    for(let n = 0; n < nums.length; n++)
    {
        let c = nums[n]
        if(c in pairs)
        {
            return [pairs[nums[n]], n];
        }
        let compliment = target - c;
        pairs[compliment] = n;
    }
    return -1;
};

/*
Equal to or fasther than 97.27% of Javascript submissions on LeetCode
https://leetcode.com/submissions/detail/144991438/
*/