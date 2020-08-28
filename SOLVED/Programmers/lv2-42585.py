'''
https://programmers.co.kr/learn/courses/30/lessons/42585

쇠막대기

스택/큐
'''

def solution_1st (arr:str) :
	
	arr = list(arr)
	stack = []
	info = [''] * len(arr)
	for idx, val in enumerate(arr) :
		stack.append(val)
		if stack[-1] == ')' :
			stack.pop()
			stack.pop()
			if arr[idx-1] == '(' :
				info[idx-1], info[idx] = 'l_front', 'l_back'
			else : 
				info[idx] = f'height_{len(stack)+1}'
		else : 
			info[idx] = f'height_{len(stack)}'
	
	# print (info)

	'''
	['l_front', 'l_back', 

	'height_1', 'height_2', 'height_3', 'l_front', 'l_back', 'l_front', 'l_back', 'height_3', 'height_3', 'l_front', 'l_back', 'height_3', 'l_front', 'l_back', 'height_2', 'height_1', 

	'height_1', 'l_front', 'l_back', 'height_1']
	'''
	pdic = dict([ (h, 0) for h in set(info) if 'height' in h ])
	# print (pdic)

	stack = []

	for i, v in enumerate(info) :
		if 'height' in v :
			if v not in stack :
				stack.append(v)
				pdic[v] += 1
			else : 
				stack.remove(v)
		if v == 'l_back' :
			for h in stack :
				pdic[h] += 1

	# print (pdic)
	return sum(pdic.values())

# print (solution_1st ("()(((()())(())()))(())"))

'''
Test Case 1번이 시간초과, 나머지 모두 통과

코드를 정리할 필요..

level2 에서 코드가 길어지면 뭔가 문제가 있는건가..ㅎ
'''

def solution (arr:str) :

    arr = list(arr)
    stack = []
    ans = 0

    for idx, val in enumerate(arr) :
        if val == ')' :
            stack.pop()
            if arr[idx-1] == '(' :
                ans += len(stack) - 1

        else : 
            stack.append(val)
            ans += 1

    return ans

print (solution ("()(((()())(())()))(())"))


'''

다른 사람 풀이

스택도 필요없이 replace로 깔끔하게 푼 듯
'''

def solution(arrangement):
    answer = 0
    sticks = 0
    rasor_to_zero = arrangement.replace('()','0')

    for i in rasor_to_zero:
        if i == '(':
            sticks += 1
        elif i =='0' :
            answer += sticks
        else :
            sticks -= 1
            answer += 1

    return answer