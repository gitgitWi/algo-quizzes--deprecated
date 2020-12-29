'''
lv2. 프렌즈4블록

2018 KAKAO BLIND RECRUITMENT

https://programmers.co.kr/learn/courses/30/lessons/17679?language=python3
'''


# %%
def solution(m, n, board):

    def splitX():
        return list(map(lambda x: [i for i in x], board))

    def setblockErasedBoard(board):
        blockErased = board[:]
        xRange, yRange = range(m-1), range(n-1)

        def isBlock(x, y):
            return not blockErased[x][y] == False and blockErased[x][y] == blockErased[x+1][y+1] == blockErased[x][y+1] == blockErased[x+1][y]
        blockXY = [(x, y) for x in xRange for y in yRange if isBlock(x, y)]

        if len(blockXY) == 0:
            return blockErased

        fourWay = [(1, 1), (1, 0), (0, 0), (0, 1)]

        def makeFourWayFalse(x, y):
            for a, b in fourWay:
                blockErased[x+a][y+b] = False

        for x, y in blockXY:
            makeFourWayFalse(x, y)

        def setBlockDown(x, y):
            for upper in range(x-1, -1, -1):
                if upper >= 0 and blockErased[upper][y]:
                    # TODO
                    pass

        def setFourWayBlockDown(x, y):
            if x == m - 2:
                return
            for a, b in fourWay:
                setBlockDown(x+a, y+b)

        for x, y in blockXY:
            setFourWayBlockDown(x, y)

        return setblockErasedBoard(blockErased)

    splitedBoard = splitX()
    finishedBoard = setblockErasedBoard(splitedBoard)

    count = sum([1 for line in finishedBoard for x in line if x == False])
    return count


# %%
qq = [
    [4,	5,	['CCBDE', 'AAADE', 'AAABF', 'CCBBF']],
    [6,	6,	['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']]
]

for q in qq:
    print(solution(*q))
