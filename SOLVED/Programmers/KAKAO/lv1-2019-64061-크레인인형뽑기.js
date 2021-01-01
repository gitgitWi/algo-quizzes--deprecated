/**
 * lv1. 크레인 인형 뽑기게임
 *
 * 2019 KAKAO 겨울 인턴
 *
 * https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
 *
 *
 * `const order = moves.reverse().map((move) => move - 1);`
 * array reverse 하는 부분에서,
 * moves.sort((a,b) => -1) 로 하는 경우
 * code-sandbox에서는 정상작동하는데, programmers에서 작동을 안해서 당황..
 * reverse를 알았으니 잘 써먹어야겠다
 *
 * while, if, for로 떡칠된 코드 개선할 수 있을까?
 */

function solution(board, moves) {
  const YSIZE = board.length;
  const yRange = [...Array(YSIZE).keys()];

  let picked = [];
  const order = moves.reverse().map((move) => move - 1);

  let count = 0;
  while (order.length > 0) {
    const currentX = order.pop();
    for (let currentY of yRange) {
      if (board[currentY][currentX] !== 0) {
        const pick = board[currentY][currentX];
        picked.push(pick);

        if (picked[picked.length - 2] === pick) {
          picked = picked.slice(0, -2);
          count += 2;
        }

        board[currentY][currentX] = 0;
        break;
      }
    }
  }

  return count;
}

module.exports = function solve() {
  const qq = [
    [
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1]
      ],
      [1, 5, 3, 5, 1, 2, 1, 4]
    ]
  ];

  qq.forEach((ele) => console.log(solution(...ele)));
};
