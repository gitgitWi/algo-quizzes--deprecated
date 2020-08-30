'''

H-index

https://programmers.co.kr/learn/courses/30/lessons/42747

문제를 이해하기 좀 어려웠음

예시 때문에 다들 더 헷갈린듯

질문 게시판에서 예시 [31,66] 던져준거 보고 이해했다

'''

qs = [
    [3, 0, 6, 1, 5]	,
    [3, 0, 6, 3, 5]	,
    [2, 0, 1, 3, 0]	,
    [10, 8, 5, 4, 3],
    [25, 8, 5, 3, 3], # 3
    [3, 3, 3, 3, 3], # 5
    [0,0,0,0,0],
    [31, 66] # 2
]

def solution(ct):
    ct.sort(reverse=True)
    ctlen = len(ct)
    print (ct)
    ans = 0
    for idx, h in enumerate(ct):
        if (idx + 1) > h : break
        ans = idx+1
    return ans

for q in qs:
    print (solution(q))


'''
신박한 풀이
'''

def solution(citations):
    citations.sort(reverse=True)
    answer = max(map(min, enumerate(citations, start=1)))
    return answer