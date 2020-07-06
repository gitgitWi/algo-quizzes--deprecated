'''

Ctrl + F

- https://edu.goorm.io/learn/lecture/18444/시즌3-연재-중-위클리-비타알고-중급편/lesson/957424/4월-3주차-ctrl-f-3

- mkdate : 2020-04-20

'''

'''
1차 제출 == Timeout!!

기냥 brute force 방식이 맞았던 걸까...
'''

# line = [ i for i in input() ]
# search = [ j for j in input() ]
# m = len(search)
# front = search[0]
# idx = 0
# while 1 :
	
# 	try : 
# 		tmp = line.index(front)
# 	except : 
# 		break
# 	# print (idx+1)
# 	line = line[tmp:]
# 	# print ("line : ", line)
# 	if len(line) < m : break
# 	check = True
# 	for _ in range(m) :
# 		if line[_] != search[_] : 
# 			check = False
# 			break
			
# 	idx += tmp + 1
# 	if check == True : 
# 		print(idx)
# 	line = line[1:]


'''
2차 제출 == Almost Pass

4번 하나만 Timeout, 나머지 9개는 Pass

조건 하나 더 추가해도 마찬가지...
'''

line = [ i for i in input() ]
n = len(line)
search = [ j for j in input() ]
m = len(search)
front = search[0]

for _ in range(n) :
	if n-_ < m : break
	if line[_] == front :
		check = True
		for k in range(1, m) :
			if line [_+k] != search[k] : 
				check = False
				break
		if check == True : print (_+1)


'''
2차 제출 == Still Timeout

방식을 좀 바꿔봐도 4번은 여전히 timeout

설마 Python이라 안되는 건...아니겠지...??
'''

# line = input()
# n = len(line)
# search = input()
# m = len(search)

# for idx, word in enumerate(line) :
#     if n - idx < m : break
#     if word == search[0] and line[idx + m-1] == search[-1]:
#         check = True
#         for sidx, sword in enumerate(search) : 
#             if line[idx + sidx] != sword : 
#                 check = False
#                 break
#         if check == True : print (idx+1)


'''

'''