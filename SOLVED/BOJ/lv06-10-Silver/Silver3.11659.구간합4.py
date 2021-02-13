'''
Silver3. 11659. 구간 합 구하기 4
- https://www.acmicpc.net/problem/11659
'''

from sys import stdin


def parser(): return list(map(int, stdin.readline().split()))


N, M = parser()
nums = [0] + parser()


for i in range(2, N+1):
    nums[i] += nums[i-1]


def find(a, b):
    return nums[b] - nums[a-1]


# 메모리 초과나는 방식
# memo = dict()
# for i in range(1, N+1):
#     memo[i] = {i: nums[i]}

# def find(a, b):
#     if b in memo[a]:
#         return memo[a][b]

#     i = a
#     while i < b:
#         i += 1
#         if i in memo[a]:
#             continue
#         memo[a][i] = memo[a][i-1] + nums[i]
#         if b in memo[i]:
#             memo[a][b] = memo[a][i] + memo[i][b] - nums[i]
#     return memo[a][b]


for _ in range(M):
    a, b = parser()
    print(find(a, b))
