n = int(input())

print (
    '\n'.join([ (f"{'*'*i}{' '*(n-i)*2}{'*'*i}" if i <= n 
        else f"{'*'*(2*n-i)}{' '*(i-n)*2}{'*'*(2*n-i)}") 
            for i in range( 1, 2 * n )
    ])
)


# for i in range( 1, 2*n ) :
#     print (f"{'*'*i}{' '*(n-i)*2}{'*'*i}" if i <= n 
#         else f"{'*'*(2*n-i)}{' '*(i-n)*2}{'*'*(2*n-i)}") 