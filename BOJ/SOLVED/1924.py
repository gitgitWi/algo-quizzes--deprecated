X, Y = map (int, input().split()) 

month = [31,28,31,30,31,30,31,31,30,31,30,31]

days = ["SUN", 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

print (days [(sum ( month[:X-1] ) + Y) % 7])