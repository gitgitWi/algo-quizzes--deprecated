# %% [markdown]
# # lv2. 뉴스 클러스터링
#
# 2018 KAKAO BLIND RECRUITMENT
#
# [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/17677?language=python3)

# %%
import re
from typing import List
from datetime import datetime
from pytz import timezone

# KST = timezone('Asia/Seoul')
# print(datetime.now(KST))


# %%
MAX_INT = 65536
notAlphabetReg = r'[\W\d]+'


def getKeys(_word: str) -> List[str]:
    word = _word.upper()
    length = len(word)
    keys = []
    for idx in range(length):
        if idx == len(word) - 1:
            break
        keys.append(f'{word[idx]}{word[idx+1]}')
    keys = sorted(list(filter(lambda key: re.match(r'[A-Z]{2}', key), keys)))
    return keys


def getUnion(arr1: List[str], arr2: List[str]) -> List[str]:
    union = arr1[:]
    temp = arr1[:]
    for b in arr2:
        if b in temp:
            temp.remove(b)
        else:
            union.append(b)
    return union


def getIntersection(arr1: List[str], arr2: List[str]) -> List[str]:
    intersection = []
    copyA, copyB = [arr1[:], arr2[:]] if len(
        arr1) > len(arr2) else [arr2[:], arr1[:]]
    for idx in range(len(copyB)):
        b = copyB.pop()
        if b in copyA:
            intersection.append(b)
            copyA.remove(b)
    return intersection


def solution(str1: str, str2: str) -> int:
    keys1, keys2 = getKeys(str1), getKeys(str2)

    union, intersection = len(getUnion(keys1, keys2)), len(
        getIntersection(keys1, keys2))

    if union == intersection:
        return MAX_INT
    result = int(intersection / union * MAX_INT)
    return result


qq = [
    ['FRANCE', 'french'],
    ['handshake', 'shake hands'],
    ['aa1+aa2',	'AAAA12'],
    ['E=M*C^2',	'e=m*c^2'],
]


for q in qq:
    str1, str2 = q
    print(solution(str1, str2))

# %%
