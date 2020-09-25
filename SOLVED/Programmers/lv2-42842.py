'''

카펫

https://programmers.co.kr/learn/courses/30/lessons/42842

brown 의 가로 세로를 x, y 라고 하면
yellow = (x-2) * (y-2) = xy - 2x- 2y + 4 = xy - brown
brown = 2x + 2y -4
xy = yellow + brown

'''


import math


def solution(brown, yellow):

    tot = brown + yellow

    x, y = 0, 0
    for cur in range(tot-1, 0, -1):
        if (tot % cur == 0):
            tmp = tot/cur
            if (cur-2) * (tmp - 2) == yellow:
                return [cur, int(tmp)]


qs = [
    [10, 2],
    [8, 1],
    [24, 24],
]

for q in qs:
    print(solution(q[0], q[1]))


'''
ShortCodings

역시 방정식으로 풀수 있었다.
중2 수학인데 머리가 안 돌아가서..
'''


def solution(brown, yellow):
    ans = ((brown-4)+math.sqrt((brown-4)**2-16*yellow))//4
    return [ans+2, yellow//ans+2]
