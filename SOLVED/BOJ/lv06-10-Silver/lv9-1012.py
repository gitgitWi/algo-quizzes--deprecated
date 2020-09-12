'''

Silver2. 유기농 배추

https://www.acmicpc.net/problem/1012

어쩌다 첫 제출에 맞긴했는데, 
dums-dum 대신 그냥 count 해도 되고, 
indent도 너무 많다

다른 풀이들처럼 0으로 만들면 visited 도 불필요

'''

import sys
from sys import stdin
input = stdin.readline


class Table:
    def __init__(self, m, n):
        self.M = m
        self.N = n
        self.T = [[0]*self.N for i in range(self.M)]
        self.visited = [[0]*self.N for i in range(self.M)]
        self.arr = []

    def add(self, a, b):
        self.T[a][b] = 1
        self.arr.append((a, b))

    def bfs(self):
        dums = []
        # 동-북-서-남
        toX = [1, 0, -1, 0]
        toY = [0, 1, 0, -1]

        for i in self.arr:
            a, b = i
            if not self.visited[a][b]:
                stack = [[a, b]]
                dum = []
                while stack:
                    c, d = stack.pop()
                    if self.T[c][d]:
                        self.visited[c][d] = 1
                        dum.append([c, d])
                    for j in range(4):
                        nextX = c+toX[j]
                        nextY = d+toY[j]
                        if nextX < 0 or nextY < 0 or nextX > self.M-1 or nextY > self.N-1:
                            continue
                        if self.T[nextX][nextY] and not self.visited[nextX][nextY]:
                            stack.append([nextX, nextY])
                dums.append(dum)
                dum = []
        return len(dums)


for _ in range(int(input())):
    M, N, K = map(int, input().split())
    tb = Table(M, N)
    for k in range(K):
        a, b = map(int, input().split())
        tb.add(a, b)

    print(tb.bfs())


'''

Short Codings

https://www.acmicpc.net/source/16421563

대부분 전체 덩어리를 0으로 만들면서 카운팅

`for i, j in [(i+1, j), (i-1, j), (i, j+1), (i, j-1)]:` 

- 이게 더 직관적이라 좋아보임
- 실제 개발환경에선 모르겠지만 적어도 코테에서는 실수를 좀더 줄일 수 있을 듯

'''

I = sys.stdin.readline


def f(i, j):
    q = [(i, j)]
    while q:
        i, j = q.pop()
        g[i][j] = 0
        for i, j in [(i+1, j), (i-1, j), (i, j+1), (i, j-1)]:
            if i > -1 and i < n and j > -1 and j < m and g[i][j]:
                q += [[i, j]]


def J(): return map(int, I().split())


for _ in [0]*int(I()):
    c = 0
    n, m, k = J()
    g = [[0]*m for i in [0]*n]
    for i in [0]*k:
        v, w = J()
        g[v][w] = 1
    for i in range(n):
        while any(g[i]):
            f(i, g[i].index(1))
            c += 1
    print(c)
