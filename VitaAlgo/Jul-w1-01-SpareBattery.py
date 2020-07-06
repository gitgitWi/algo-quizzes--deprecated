'''
https://edu.goorm.io/learn/lecture/18444/시즌3-연재-중-위클리-비타알고-중급편/lesson/1027800/7월-1주차-보조-배터리-2

- mkdate : 2020-07-06-Mon

문제 이해하는게 젤 힘든 듯..

출력에 대한 설명도 너무 대충이고..
'''

a, b, c = map(int, input().split())
n = int(input())
cables = []
for _ in range(n) :
	cables.append(list(map(int, input().split()))[0])

tot = a+b+c

if tot < n : 
	cables = sorted(cables)[:tot]
	n = tot

print (n, sum(cables))