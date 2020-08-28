'''

- https://edu.goorm.io/learn/lecture/18444/시즌3-연재-중-위클리-비타알고-중급편/lesson/957423/4월-3주차-회문-3

- mkdate : 2020-04-20

'''

'''
1차 실패
'''

# word = [ i for i in input() ]

# for _ in range( int(input()) ) : 
# 	check = 1
# 	nums = [int(i) for i in input().split()]
# 	if word[nums[0]-1] != word[nums[1]-1] : check = 0
# 	else :
# 		for i in range ((nums[1]-nums[0]) // 2) :
# 			if word [nums[0] -1 + i] != word[nums[1]-1 - i] : 
# 				check = 0
# 				break
# 	print (check)


'''
2차 정답
'''

word = [ i for i in input() ]
# print (word)

for _ in range( int(input()) ) : 
	check = 1
	nums = [int(i) for i in input().split()]
	# print (nums)
	# print (word[nums[0]-1], word[nums[1]-1])
	if word[nums[0]-1] != word[nums[1]-1] : check = 0
	else :
		for i in range (1, ((nums[1]-nums[0]) // 2)+1) :
			if word [nums[0] -1 + i] != word[nums[1]-1 - i] : 
				check = 0
				break
	print (check)