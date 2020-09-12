'''

Silver3. ATM

https://www.acmicpc.net/problem/11399

'''

from sys import stdin as st

input = st.readline

N = int(input())
ps = sorted(map(int, input().split()))

size = len(ps)
ans = [v*(size-i) for i, v in enumerate(ps)]

print(sum(ans))
