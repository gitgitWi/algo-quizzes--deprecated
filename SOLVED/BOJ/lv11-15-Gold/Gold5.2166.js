/**
 * 2166. 다각형의 면적
 *
 * N각형의 꼭지점 좌표 N개
 *
 * 출발점과 다른 두 점으로 만들어지는 삼각형의 넒이를 벡터 외적을 활용한 신발끈 공식으로 구한 후
 * 이 삼각형들의 총합을 구하면 다각형의 총 넓이가 된다.
 * 이때 별모양처럼 오목한 다각형은 합이 음수가 나오므로 반드시 절대값으로 변환해야 함
 *
 * @param {string[]} input stdin, 3<= N <=10,000
 * @returns 다각형의 면적, 소수점 둘째 자리에서 반올림
 */
const solution = (input) => {
  const [N, ...dots] = input;
  const points = dots.map((d) => d.split(" ").map(Number));
  const [startX, startY] = points[0];

  const getTri = (a, b) => {
    const [ax, ay] = a;
    const [bx, by] = b;
    return (ax - startX) * (by - startY) - (ay - startY) * (bx - startX);
  };

  let ans = 0;
  for (let i = 2; i < N; i++) {
    ans += getTri(points[i], points[i - 1]);
  }

  return (Math.abs(ans) * 0.5).toFixed(1);
};

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
console.log(solution(input));

// console.log(solution(["4", "0 0", "0 10", "10 10", "10 0"]));
