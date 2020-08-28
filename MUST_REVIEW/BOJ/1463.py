'''

1463. 1로 만들기

https://www.acmicpc.net/problem/1463

- create_at: Aug/26/2020
- 못풀고 답 찾아봄..
- refs
    - https://infinitt.tistory.com/247

'''


n = int(input())

dp = [0 for _ in range(n+1)]

for i in range(2, n+1):
    dp[i] = dp[i-1] + 1

    if i % 2 == 0 and dp[i] > dp[i//2] + 1:
        dp[i] = dp[i//2]+1

    if i % 3 == 0 and dp[i] > dp[i//3] + 1:
        dp[i] = dp[i//3] + 1


print(dp[n])
