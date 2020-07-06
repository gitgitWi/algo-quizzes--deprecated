'''

2587. 대표값2

- https://www.acmicpc.net/problem/2587
- mkdate : 2020-06-20

'''

'''
1차 실패 ; IDE에서 잘 되는데, 제출하면 컴파일 에러..?
'''

nums = sorted([int(input()) for _ in range(5)])

print (int(sum(nums)/5))
print (nums[2])


'''
2차 성공
'''

nums = []
for _ in range(5) :
    nums.append(int(input()))

nums = sorted(nums)

print (int(sum(nums)/5))
print (nums[2])