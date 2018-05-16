/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
      for(let i = 0; i < nums.length; i ++)
      {
            let n = nums[i];
            let greater_pair = 0 - n;
            let lesser_pairs = [];
            for(let x = i++; x < nums.length; x++)
            {
                let compliment = greater_pair - nums[x];
                console.log(compliment + " " + lesser_pairs[compliment]);
                if(lesser_pairs[compliment])
                    console.log(n+ " "+nums[x]+" "+compliment);
                else
                    lesser_pairs[compliment] = true;
            }
      }
      return "1";
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));