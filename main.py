def va_ch02_dp (n:int) :
	d = [1, 1]
	for i in range(2, n) :
		d.append (d[i-1] + d[i-2])
		# print (i, d[-1])
	return d[-1]

# print (va_ch02_dp(20))

def va_ch02_bfs (start:int) :

	chk, q = [0] * 1010, []

	q.append(start)
	chk[start] = 1

	# while(q.size()) :

	# 	cur = q.pop(0)

	# 	for i in range()


	return None

# print (va_ch02_bfs())

