'''

10093. 숫자

- https://www.acmicpc.net/problem/10093
- mkdate : 2020-06-20

'''

a, b = input().split()
a, b = int(a), int(b)

if b > a : a, b = b, a
if a == b : print (0)
else : print (a-b-1)

l = sorted([i for i in range(b+1, a)])
print (*l, sep=' ')