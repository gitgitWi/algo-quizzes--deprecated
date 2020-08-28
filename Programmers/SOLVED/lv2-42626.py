'''

더 맵게

Heap

https://programmers.co.kr/learn/courses/30/lessons/42626

왜케 지저분해보이지.. refactoring 필요해보임

'''

from heapq import heapify, heappop, heappush


def solution(sco, K):
    heapify(sco)
    ans = 0
    while True:
        first = heappop(sco)
        second = heappop(sco)
        if first >= K:
            return ans
        if second >= K:
            return ans+1

        new = first + second * 2
        if new >= K and len(sco) == 0:
            return ans+1
        if (first == 0 and second == 0 and K != 0) or (len(sco) == 0 and new < K):
            return -1

        heappush(sco, new)
        ans += 1
        # print(sco)


q1 = [[1, 2, 3, 9, 10, 12], 7]
q2 = [[1, 1, 1, 1, 1, 1, ], 7]
q3 = [[0, 0, 0, 0, 1], 7]
q4 = [[5, 5, 5, 5, 5, ], 1000000]
q5 = [[1, 1, 100], 7]
q6 = [[1, 2, 3, ], 11]

qs = [q1, q2, q3, q4, q5, q6]

for q in qs:
    print(solution(q[0], q[1]))
