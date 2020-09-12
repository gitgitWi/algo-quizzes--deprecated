'''

Silver3. 프린터 큐

https://www.acmicpc.net/problem/1966

'''

from sys import stdin
from collections import deque
input = stdin.readline

for _ in range(int(input())):
    N, M = map(int, input().split())
    imp = list(map(int, input().split()))
    idx = deque(range(N))

    ans = 1
    while idx:
        curr = idx.popleft()
        if imp[curr] < max(imp):
            idx.append(curr)
        else:
            if curr == M:
                print(ans)
                break
            imp[curr] = 0
            ans += 1
