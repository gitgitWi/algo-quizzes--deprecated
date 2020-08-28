'''

주식가격

스택/큐

https://programmers.co.kr/learn/courses/30/lessons/42584#

이중 for-loop 안 쓸 수 있는 방법 찾고 싶다..

Python 이나 C++ 이나 Stack/Queue 상관없이 다들 이중dual loop이라니

'''


def solution(qes):
    size = len(qes)
    ans = [0] * size

    for i in range(size-1):
        for j in range(i, size-1):
            if qes[j] < qes[i]:
                break
            ans[i] += 1
    return ans


p1 = [1, 2, 3, 2, 4, 1, 3]
p2 = [5, 4, 3, 2, 1, ]
p3 = [1, 2, 3, 4, 5, ]
p4 = [1, 1, 1, 1, 1, ]
p5 = [3, 3]
qs = [p1, p2, p3, p4, p5]

# map(lambda x: print(solution(x)), qs)
for i in qs:
    print(solution(i))
