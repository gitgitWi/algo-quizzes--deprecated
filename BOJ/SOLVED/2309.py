'''

2309. 일곱 난쟁이

- https://www.acmicpc.net/problem/2309
- mkdate : 2020-06-20

'''

H = sorted([int(input()) for _ in range(9)])

tot = sum(H)
for i, j  in enumerate(H) :
    for n, m in enumerate(H[i+1:]) :
        if tot - j - m == 100 :
            H.pop(H.index(j))
            H.pop(H.index(m))
            break

for _ in H :
    print(_)


'''
Short Codings
'''

# https://www.acmicpc.net/source/5414856

from itertools import *
for i in combinations(map(int,(map(input,[""]*9))),7):
 if sum(i)==100:
  list(map(print,sorted(i)))
  break

# https://www.acmicpc.net/source/11850366

# l = [int(input()) for _ in range(9)]

l = [ int(i) for i in '''20
7
23
19
10
15
25
8
13'''.split()]

m = [[i, j] for i in l for j in l if sum(l)-i-j == 100 if i != j]
print (m)

l.remove(m[0][0])
l.remove(m[0][1])
l.sort()

print(*l,sep='\n')