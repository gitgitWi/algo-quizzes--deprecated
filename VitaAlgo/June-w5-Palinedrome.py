'''
https://edu.goorm.io/learn/lecture/18444/시즌3-연재-중-위클리-비타알고-중급편/lesson/1021526/6월-5주차-회문-만들기-3

- mkdate : 2020-07-06-Mon

'''

line = list(input())

w = len(line)

'''
이중 for-loop 돌다보니 timeout이 문제
'''

# for i in range(2, w+1) :
# 	for j in range(w+1-i) :
# 		tmp = line[j:j+i]
# 		# 홀수 개 글자수는 한번만 와야?
# 		odds = [m for m in set(tmp) if tmp.count(m) % 2 == 1]
# 		if len(odds) < 2 : ans += 1
# 		# print (str(tmp), ans)

'''
하나만 홀수개 선택 (n+1)//2 [0 1 3] [0 1 3 5]
나머지는 모두 0 또는 짝수개 선택 n // 2 + 1 [0 2 4] [0 2 4]

k * (((i+1)//2 +1 ) * (j//2 +1) ^ (k-1) - 1)

이러면 순서에 따른 갯수 중복이 제거됨
'''

# odds = [line.count(m) for m in set(line)]
# 
# print (odds)
# 
# k = len(odds)
# ans = 0
# for i in range(k) :
# 	tmp =  (odds[i]+1) // 2 
# 	for j in range(k) :
# 		if i != j :
# 			tmp *= odds[j]//2 + 1
# 	print (tmp)
# 	ans += tmp
		
'''
앞에서부터 순서대로 하나씩 비교해보려면..?

결국 다시 이중 for-loop을 고치는 것으로..

똑같이 time-out..ㅜㅜ
'''

ans = w
for idx, word in enumerate(line) :
	for j in range(idx+2, w+1) :
		tmp = line[idx:j]
		print (tmp)
		if len ([i for i in set(tmp) if tmp.count(i) % 2 == 1 ]) < 2 : 
			ans += 1

print (ans)

'''
해설

- 비트마스크
- 구현

```cpp
#include<bits/stdc++.h>
using namespace std;
int main(){
	char msg[5050]; scanf("%s", msg);
	int ans = 0;
	for(int i = 0; msg[i]; ++i){
		int s = 0;
		for(int j = i; msg[j]; ++j){
			int len = j - i + 1;
			s ^= (1 << (msg[j] - 'a'));
			if(len % 2 && (s & (-s)) == s) ++ans;	//길이가 홀수이고 비트마스크가 2^k 형태인 경우
			else if(len % 2 == 0 && s == 0) ++ans;	//길이가 짝수이고 비트마스크가 0인 경우	
		}
	}
	printf("%d", ans);
}
```

'''