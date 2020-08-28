'''

체육복

https://programmers.co.kr/learn/courses/30/lessons/42862

Greedy

'''


def solution(n, lost, reserve):

    pureLost = list(set(lost) - set(reserve))
    pureReserve = list(set(reserve) - set(lost))

    for i in pureReserve:
        if i-1 in pureLost:
            pureLost.remove(i-1)
        elif i+1 in pureLost:
            pureLost.remove(i+1)

    return n - len(pureLost)


q1 = [5, [2, 4], [1, 3, 5]]
q2 = [5, [2, 4], [3]]
q3 = [3, [3], [1]]  # 2
q4 = [5, [1, 4], [1, 3, 5]]  # 5

qs = [q1, q2, q3, q4]

for q in qs:
    print(solution(q[0], q[1], q[2]))
