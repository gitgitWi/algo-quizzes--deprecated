'''
1149. RGB거리
- https://www.acmicpc.net/problem/1149
'''

from sys import stdin


def I():
    return stdin.readline()


def intList():
    return list(map(int, I().split()))


N = int(I())
fees = [intList() for _ in range(N)]


for i in range(1, N):
    for j in range(3):
        fees[i][j] += min(fees[i-1][(j+1) % 3], fees[i-1][(j-1) % 3])

print(min(fees[-1]))
