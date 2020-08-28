'''

10808. 알파벳 개수

- https://www.acmicpc.net/problem/10808
- mkdate : 2020-06-20

'''

w = list(input())

import string
a = string.ascii_lowercase

# w_dict = dict([(i, w.count(i) ) for i in set(w)])

res = [w.count(i) for i in a]

print (*res, sep=' ')


'''
Short Codings
'''

# https://www.acmicpc.net/source/4902194

print(*map(input().count,map(chr,range(97,123))))

# https://www.acmicpc.net/source/8505424

a=[0]*26
for x in input():a[ord(x)-97]+=1
print(*a)
