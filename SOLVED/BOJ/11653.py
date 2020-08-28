'''

소인수분해

https://www.acmicpc.net/problem/11653

mkdate : 2020-07-13-Mon

'''

n = int(input())
so = []

while n != 1 :
	if n % 2 == 0 :
		so.append(2)
		n //= 2
	elif n % 3 == 0:
		so.append(3)
		n //= 3
	else :
		for i in range(5, int(n+1), 2) :
			if n % i == 0 : 
				so.append(i)
				n //= i
				break

# print (*sorted(so), sep='\n')
print (*so, sep='\n')


'''

Short Codings

https://www.acmicpc.net/source/17629019

'''

n=int(input())
i=2
ran=int(n**0.5)
while i<=ran:
	while n%i==0:
		print(i)
		n=int(n/i)
	i+=1
if n>1:
	print(n)
