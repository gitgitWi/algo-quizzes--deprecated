'''
lv3. 정수삼각형

- https://programmers.co.kr/learn/courses/30/lessons/43105


특정 위치에서의 숫자 합 점화식
triangle[row][col] = max(triangle[row-1][col], triangle[row-1][col-1])

타일링 유형의 기본 문제
'''


from typing import List


def solution(triangle: List[List[int]]) -> int:
    rows = len(triangle)
    maxi = 0
    for row in range(1, rows):
        for col in range(row+1):
            tmp = []
            if col > 0:
                tmp.append(triangle[row-1][col-1])
            if col < row:
                tmp.append(triangle[row-1][col])
            triangle[row][col] += max(tmp)
            if maxi < triangle[row][col]:
                maxi = triangle[row][col]

    return maxi
