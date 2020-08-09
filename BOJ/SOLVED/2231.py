n = int (input())

ans = []
for i in range(n) :
    if sum (map (int, list(str(i)))) + i == n : 
        ans.append(i)
        break

print (0 if len(ans) == 0 else ans[0])