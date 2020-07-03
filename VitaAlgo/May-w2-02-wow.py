'''
https://edu.goorm.io/learn/lecture/18444/시즌3-연재-중-위클리-비타알고-중급편/lesson/969822/5월-2주차-와우-3

2020-07-03
틀림

문제에 대한 이해가 잘 안감..
'''


wow = list(input())

ans = wow.count('o')

while len(wow) > 0 :
	if wow[0] == 'w' : 
		print (wow.pop(0))
		ans += 1
	else : break	

while len(wow) > 0 :
	if wow[-1] == 'w' : 
		print (wow.pop())
		ans += 1
	else : break

print (ans)