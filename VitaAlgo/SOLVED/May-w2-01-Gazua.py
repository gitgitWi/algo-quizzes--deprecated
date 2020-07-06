'''
https://edu.goorm.io/learn/lecture/18444/시즌3-연재-중-위클리-비타알고-중급편/lesson/970179/5월-2주차-가즈아-2

- 예산 안에서 가장 많이 살수 있는 날
- 그 날 이후 보유 가치가 가장 큰 경우
'''

# import sys.stdin.readline as rl

n, k = map(int, input().split())
a = list(map(int, input().split()))

# maxa, mina = max(a), min(a)

# if a.index(maxa) < a.index(mina) : 
# 	front = a[:a.index(maxa)]
# 	back = a[a.index(maxa):]

# 	if k//min(front) * max(front) + k % min(front) >= k//min(back) * max(back) + k % min(back) :
# 		maxa, mina = max(front), min(front)
# 	else : maxa, mina = max(back), min(back)

mina = min(a)

a = a[a.index(mina):]
maxa = max(a)

print (int((k // mina) * (maxa) + k % mina))
