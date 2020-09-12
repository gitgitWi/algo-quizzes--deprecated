'''

Silver3. 바이러스

https://www.acmicpc.net/problem/2606

'''

from sys import stdin
input = stdin.readline


class Graph:
    def __init__(self, size):
        self.graph = dict([(i, []) for i in range(1, size+1)])

    def add(self, a, b):
        self.graph[a].append(b)


N = int(input())
Node = int(input())

coms = Graph(N)

for _ in range(Node):
    a, b = map(int, input().split())
    coms.add(a, b)
    coms.add(b, a)

# print(coms.graph)

visited = [0] * (N+1)

stack = [1]

while stack:
    curr = stack.pop()
    for n in coms.graph[curr]:
        if n == 0:
            continue
        if not visited[n]:
            stack.append(n)
            visited[n] = 1
    # print(visited)

print(sum(visited)-1)
