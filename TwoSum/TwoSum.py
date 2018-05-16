class Solution:
    def twoSum(self, nums, target):
        pairs = {}
        for n in range(0, len(nums)):
            c = nums[n]
            if(c in pairs):
                return [pairs[nums[n]], n]
            compliment = target - c
            pairs[compliment] = n
        return -1

#
#Equal to or fasther than 100% of Python3 submissions on LeetCode
#https://leetcode.com/submissions/detail/154544795/
#