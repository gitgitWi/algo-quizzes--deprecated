'''

1475. 방번호

- https://www.acmicpc.net/problem/1475
- mkdate : 2020-06-20

'''

n = list(map(int, list(input())))

cnt = [0] * 10
for i in n:
    cnt[i] += 1
a = int((cnt[6]+cnt[9])/2+0.5)
b = max(cnt[0:6]+cnt[7:9])
print (a if a>b else b)


'''
Short Codings
'''

# https://www.acmicpc.net/source/10978278

s=input().replace('9','6')
print(max(int(s.count(a)/(1+(a=='6'))+.5) for a in set(s)))

# https://www.acmicpc.net/source/13635364

n = input().count
a = n('6')+n('9')
print(max(max(n(i) for i in '01234578'), (a+1)//2))