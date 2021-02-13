'''
Silver1. 12852. 1로 만들기 2
- https://www.acmicpc.net/problem/12852
'''


from sys import stdin, maxsize
N = int(stdin.readline())

dp = [maxsize] * (N+1)

res = []
mini = maxsize


def solution(cur, arr, cnt):

    nextArr = arr + [cur]

    if dp[cur] < cnt:
        return

    global mini
    if cur == 1:
        res.append(nextArr)
        mini = cnt
        return

    dp[cur] = cnt

    if (cur % 3) == 0 and cnt + 1 < mini:
        solution(int(cur / 3), nextArr, cnt + 1)

    if (cur % 2) == 0 and cnt + 1 < mini:
        solution(int(cur / 2), nextArr, cnt + 1)

    if cur > 1 and cnt + 1 < mini:
        solution(cur - 1, nextArr, cnt + 1)


solution(N, [], 0)

print(mini)
print(*sorted(res, key=lambda x: len(x))[0])
