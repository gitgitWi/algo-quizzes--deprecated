'''

11286. 절대값 힙

- https://www.acmicpc.net/problem/11286
- mkdate : 2020-07-07

'''

'''
기본 리스트로 구현할 수 있는 문제가 아니었음..
'''

# lst, abs_list = [], []
# for _ in range(int(input())) :
# 	x = int(input())

# 	if x == 0 :
# 		if len(abs_list) == 0 : 
# 			print (0)
# 		else :
# 			rm = abs_list.index(min(abs_list))
# 			print (lst.pop(rm))
# 			abs_list.pop(rm)
# 	else :
# 		lst.insert(0, x)
# 		abs_list.insert(0, abs(x))


'''
`heapq` module 사용
'''

import heapq
from sys import stdin

input = stdin.readline

h = []
heapq.heapify(h)
for i in range(int(input())) :
	n = int(input())
	if n == 0 :
		if len(h) == 0:
			print (0)
		else : 
			print (heapq.heappop(h)[1])
	else :
		heapq.heappush(h, (abs(n), n))


'''
Short Codings
'''

# https://www.acmicpc.net/source/6271003
import heapq as H,sys
h=[]
input()
for s in sys.stdin:
	x=int(s)
	y=max(x*2,-x+~x)or H.heappop(h or[0])
	H.heappush(h,y)if x else print(y//2^y%-2)