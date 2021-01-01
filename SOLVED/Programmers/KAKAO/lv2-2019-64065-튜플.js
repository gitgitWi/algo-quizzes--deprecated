/**
 * lv2. 튜플
 *
 * 2019 KAKAO 겨울 인턴
 *
 * https://programmers.co.kr/learn/courses/30/lessons/64065?language=javascript
 *
 * 튜플 - 각 원소 집합 내부 순서에 대해 이해하는데 오래 걸림
 *
 * 정규식 만드는데 오래걸림; `(?:)` 처음 써보는 표현식
 */

function solution(s) {
  const setReg = /\d+(?:,*\d*)*/g;
  const parsedS = s.match(setReg).map((ele) => ele.split(",").map(Number));
  const numMap = {};
  parsedS.forEach((arr) =>
    arr.forEach((num) => {
      numMap[num] ? numMap[num]++ : (numMap[num] = 1);
    })
  );

  const result = Object.entries(numMap)
    .sort((a, b) => b[1] - a[1])
    .map(([key, value]) => +key);
  return result;
}

module.exports = function solve() {
  const qq = [
    ["{{2},{2,1},{2,1,3},{2,1,3,4}}"],
    ["{{1,2,3},{2,1},{1,2,4,3},{2}}"],
    ["{{20,111},{111}}"],
    ["{{123}}"],
    ["{{4,2,3},{3},{2,3,4,1},{2,3}}"]
  ];

  qq.forEach((ele) => console.log(solution(...ele)));
};
