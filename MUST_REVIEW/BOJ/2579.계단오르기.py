from sys import stdin
def I(): return int(stdin.readline())


(prevSum, step1, step2) = (0, 0, 0)

n = I()

for _ in range(n):
    curr = I()
    (prevSum, step1, step2) = (max(step1, step2), prevSum + curr, step1 + curr)

print(max(step1, step2))
