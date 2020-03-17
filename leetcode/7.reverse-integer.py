#
# @lc app=leetcode id=7 lang=python3
#
# [7] Reverse Integer
#

# @lc code=start
class Solution:
    def reverse(self, x: int) -> int:
        nums = list(str(x))
        result = [0]
        if nums[0] == '-' :
            result[0] = nums[0]
            nums = nums[1:]
        result.extend(nums[::-1])
        out = ''
        for i in result :
            out += str(i)
        out = int(out)
        if out > 2**31-1 or out < -2**31 :
            return 0
        return out
        
# @lc code=end

