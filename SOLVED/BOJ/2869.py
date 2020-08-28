'''

2869. 달팽이는 올라가고 싶다

- https://www.acmicpc.net/problem/2869
- mkdate : 2020-06-20

'''

'''
7번 틀림, 1번 시간 초과
'''

A, B, V = map(int, input().split())

cnt = 1
h = 0
while True :
    h += A
    if h >= V : break
    h -= B
    cnt += 1

print (cnt)


'''
9번째 성공
'''

A, B, V = map(int, input().split())

if A == V : print (1)
else : 
	print (int((V-B) / (A-B) + (0 if (V-B) % (A-B) == 0 else 1)))