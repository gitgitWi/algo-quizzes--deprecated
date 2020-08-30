'''

가장 큰 수

https://programmers.co.kr/learn/courses/30/lessons/42746

'''

'''

간단한 것 같은데 뭔가 안풀리는 문제는 역시나 접근이 잘못된 경우.

다른 풀이들을 보니, QuickSort, sort/sorted 함수의 key에서 tuple 을 이용한 경우 등
근접하게 생각은 했는데, 적용을 계속 엉뚱하게 해서 몇시간을 헤매고 있었다.

뭔가 가장 pythonic 한 답은 string 값 비교 시 앞에서부터 한 unicode 단위로 비교하는 걸 활용한 답인 것 같아서 
일단 이걸로 제출했음..

refs)
- https://leedakyeong.tistory.com/entry/프로그래머스-가장-큰-수-in-python
- https://eda-ai-lab.tistory.com/467

'''

qs = [
    [6, 10, 2],
    [3, 30, 34, 5, 9],
    [3, 30, 34, 331, 3593, 333],
]

def solution(nums):
    nums = list(map(str, nums))
    nums.sort(key=lambda x: x*4, reverse=True)    
    return str(int(''.join(nums)))


for q in qs:
    print(solution(q))