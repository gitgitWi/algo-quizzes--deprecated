'''

토마토

https://www.acmicpc.net/problem/7576

예제 답 5개는 맞았는데 제출하면 바로 틀림

어떤 부분에서 틀렸는지 확인해보기..
'''

# from sys import stdin
# rl = stdin.readline

# M, N = map(int, rl().split())
# tomatos = []
# matures = []
# noTomatos = 0
# for y in range(N):
#     child = list(map(int, rl().split()))
#     if 1 in child:
#         matures.append((y, child.index(1)))
#     if 0 not in child:
#         noTomatos += 1
#     tomatos.append(child)

# if noTomatos == N:
#     print(0)
# else:
#     days = 0
#     isNotMature = True
#     while isNotMature:
#         tmp = []
#         for t in matures:
#             for y, x in [(0, 1), (-1, 0), (0, -1), (1, 0), ]:
#                 curY, curX = t[0]+y, t[1]+x
#                 if 0 <= curY < N and 0 <= curX < M and tomatos[curY][curX] == 0:
#                     tomatos[curY][curX] = 1
#                     tmp.append((curY, curX))
#         matures = tmp

#         days += 1
#         if days > M*N:
#             days = -1
#             break
#         cnt = 0
#         for n in range(N):
#             if 0 in tomatos[n]:
#                 break
#             else:
#                 cnt += 1
#         if cnt == N:
#             isNotMature = False
#     print(days)

'''
REF
- https://suri78.tistory.com/131
- https://dojinkimm.github.io/problem_solving/2019/11/03/boj-7576-tomato.html
- https://velog.io/@devjuun_s/토마토-백준-7576번python
'''
