'''
2579. 계단 오르기
'''


from sys import stdin


def solution(N, level):
    if N == 1:
        return level[0]

    dp = [0] * N
    dp[0] = level[0]
    dp[1] = max(level[0] + level[1], level[1])
    if N == 2:
        return dp[1]

    dp[2] = max(level[0], level[1]) + level[2]
    if N == 3:
        return dp[2]

    for idx in range(3, N):
        dp[idx] = max(dp[idx-2], dp[idx-3] + level[idx-1]) + level[idx]

    return dp[N-1]


I = stdin.readline

N = int(I())
level = []
for _ in range(N):
    level.append(int(I()))

print(solution(N, level))


'''
ShortCoding 참고
'''


def I(): return int(stdin.readline())


(prevSum, step1, step2) = (0, 0, 0)

n = I()

for _ in range(n):
    curr = I()
    (prevSum, step1, step2) = (max(step1, step2), prevSum + curr, step1 + curr)

print(max(step1, step2))
