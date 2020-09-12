'''

Silver4. 제로

- https://www.acmicpc.net/problem/10773

일반 `input()` 사용시 4072ms

`sys.stdin.readline` 사용시 108ms

시간 차이가 너무 많이 난다..

'''
from sys import stdin
input = stdin.readline

nums = []
for _ in range(int(input())):
    x = int(input())
    nums.append(x) if x != 0 else nums.pop()

print(sum(nums))
