'''

13300. 방 배정

- https://www.acmicpc.net/problem/13300
- mkdate : 2020-06-20

'''

N, K = map(int, input().split())

# stu = [(0,0)] * N
stu = [tuple(input().split()) for _ in range(N)]

stu_dic = {} 
for s, y in stu :
    if y in stu_dic : 
        if s == '0' : stu_dic[y][0] += 1
    else :
        if s == '0' : stu_dic[y] = [1, 0]
        else : stu_dic[y] = [0, 1]
 
from math import ceil

cnt = 0
for k, v in stu_dic.items() :
    # print (k, v)
    for m in range(2) :
        cnt += ceil(v[m]/2)

print (cnt)


'''
Short Codings
'''

# https://www.acmicpc.net/source/14289855

import sys
import math
n,k=map(int,input().split())
a=[[0,0]for i in range(6)]
for i in sys.stdin:
	s,g=map(int,i.split())
	a[g-1][s]+=1
r=0
for i in a:
	r+=math.ceil(i[0]/k)+math.ceil(i[1]/k)
print(r)