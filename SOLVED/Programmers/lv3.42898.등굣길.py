'''
lv3. 등굣길
- https://programmers.co.kr/learn/courses/30/lessons/42898

웅덩이를 피해 갈 수 있는 모든 최단 경로의 수

타일링 유형

(m + 1) * (n + 1) 2차원 배열 생성하고
[1, 1]부터 시작하면 좀더 직관적으로 index 접근할 수 있음
'''


from typing import List


def solution(m: int, n: int, puddles: List[List[int]]) -> int:
    MOD = 1000000007

    board = [[0 for i in range(m+1)] for j in range(n+1)]
    for x, y in puddles:
        board[y][x] = -1

    board[1][1] = 1
    for row in range(1, n+1):
        for col in range(1, m+1):
            if board[row][col] == -1:
                continue
            tmp = []
            if board[row-1][col] != -1:
                tmp.append(board[row-1][col])
            if board[row][col-1] != -1:
                tmp.append(board[row][col-1])
            board[row][col] += sum(tmp)

    return board[n][m] % MOD
