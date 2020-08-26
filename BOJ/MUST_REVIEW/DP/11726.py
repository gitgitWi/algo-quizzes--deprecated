'''

11726. 2Xn 스타일링

https://www.acmicpc.net/problem/11726

'''

n = int(input())

'''

이건 왜 틀리지..?
n=78 부터 다른 걸로..

전체 가로 n
2X1 로만 채우는 경우 ; 1

1x2 2m개 섞는 경우; 
가로칸 ; (n - m) 개
(n-m)Cm = (n-m)!/m!(n-2m)!


'''

# facto = [1] * (n+1)
# for i in range(1, n+1):
#     facto[i] = facto[i-1] * i

# print(facto)

# xs = [i for i in range(n+1) if n-2*i >= 0]
# print(xs)

# c = list(map(lambda x: facto[n-x] / (facto[x]*facto[n - 2*x]), xs))
# print(c)

# print(int(sum(c)) % 10007)


'''

ref)
- https://jaemin8852.tistory.com/157

'''

dp = [1, 2]
for i in range(1, n):
    dp.append(dp[i]+dp[i-1])

print(dp[n-1] % 10007)
