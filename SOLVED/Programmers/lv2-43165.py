'''

타겟 넘버

DFS/BFS

https://programmers.co.kr/learn/courses/30/lessons/43165

ex)
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3


풀이 접근이 처음에 잘못 됐음
일단 다른 사람 풀이 참고해 제출하고
추후 다시 보는 걸로!

refs)
- https://train-validation-test.tistory.com/entry/Programmers-level-2-타겟-넘버-python
- https://velog.io/@seovalue/프로그래머스-타겟넘버-python

'''


def solution(numbers, target):
    tree = [0]
    for i in numbers:
        subtree = []
        for j in tree:
            subtree.append(j + i)
            subtree.append(j - i)
        print(subtree)
        tree = subtree
    return tree.count(target)


q1 = [[1, 1, 1, 1, 1], 3]
q2 = [[1, 2, 3, 2, 1], 3]

qs = [q1, q2]

for q in qs:
    print(solution(q[0], q[1]))
