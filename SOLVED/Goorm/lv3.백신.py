import sys
from collections import deque


def inputs():
    return map(int, sys.stdin.readline().split())


N, M = inputs()


graph = {}
for _ in range(M):
    a, b = inputs()
    if a in graph:
        graph[a].append(b)
    else:
        graph[a] = [b]
    if b in graph:
        graph[b].append(a)
    else:
        graph[b] = [a]


maxIdx, maxVal = 0, 0
unions = {}
sortedKeys = sorted(graph.keys())
for a in sortedKeys:
    if a in unions:
        continue

    unions[a] = {'head': a, "count": 1}
    queue = deque([a])
    while queue:
        curr = queue.popleft()
        for ch in graph[curr]:
            if ch > a and ch not in unions:
                unions[ch] = {'head': a, "count": 1}
                unions[a]['count'] += 1
                queue.append(ch)
    if unions[a]['count'] > maxVal:
        maxIdx = a
        maxVal = unions[a]['count']

print(maxIdx, maxVal)
