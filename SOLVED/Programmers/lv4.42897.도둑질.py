'''
lv4. 도둑질
- https://programmers.co.kr/learn/courses/30/lessons/42897
'''

from typing import List


def solution(money: List[int]) -> int:
    END = len(money)
    maxi = 0
    # 첫번째 집을 포함하는 경우: 0 ~ len -1
    money0 = [0 for _ in range(END-1)]
    money0[0] = money[0]
    money0[1] = money[0]
    for cur in range(2, END-1):
        money0[cur] = max(money0[cur-2] + money[cur], money0[cur-1])
        if money0[cur] > maxi:
            maxi = money0[cur]

    # 첫번째 집을 포함하지 않는 경우: 1 ~ len
    money1 = [0 for _ in range(END)]
    money1[1] = money[1]
    for cur in range(2, END):
        money1[cur] = max(money1[cur-2] + money[cur], money1[cur-1])
        if money1[cur] > maxi:
            maxi = money1[cur]

    return maxi
