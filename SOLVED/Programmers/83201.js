// @ts-check

/**
 * @description
 * Weekly 02. 상호 평가
 * createdAt `21.08.09.
 *
 * 다른 사람들 풀이를 보니, 처음에 x-y 축 변경 한번 하고 map 위주로 푸는 게 좀 더 나았을 것 같다
 *
 * @param {(number|string)[][]} scores i번 학생이 j번 학생에 대해 평가한 점수, 자기자신 평가한 점수가 유일한 최고점/최저점인 경우 평균에서 제외
 * @returns {string} 학생들의 학점 A~F(E X)가 합쳐진 문자열
 */
const solution = (scores) => {
  /**
   *
   * @param {number} size 범위 크기
   * @yields {number} (size-1) ~ 0
   */
  const range = function* (size) {
    while (size--) yield size;
  };

  /**
   *
   * @param {(number|string)[][]} scores i * j 점수표
   * @returns {(number|string)[][]} 최고점/최저점 제거된 점수표, 제거된 점수는 "del"로 표기
   */
  const getModifyLine = (scores, length = scores.length) => {
    for (const i of range(length)) {
      let minIdx = [],
        minVal = 101,
        maxIdx = [],
        maxVal = 0;

      for (const j of range(length)) {
        const cur = scores[j][i];
        if (cur < minVal) minVal = cur;
        if (cur > maxVal) maxVal = cur;
      }

      for (const j of range(length)) {
        const cur = scores[j][i];
        if (cur === minVal) minIdx.push(j);
        else if (cur === maxVal) maxIdx.push(j);
      }

      if (minIdx.length == 1 && minIdx[0] === i) scores[i][i] = "del";
      if (maxIdx.length == 1 && maxIdx[0] === i) scores[i][i] = "del";
    }

    // console.log(scores);

    return scores;
  };

  /**
   *
   * @param {(number|string)[][]} scores 2차원 점수 배열
   * @param {number} length 배열 길이, 반복문 길이
   * @returns {number[]} 평가 대상 학생들의 점수 배열
   */
  const getTargetScores = (scores, length = scores.length) => {
    const targetScore = Array.from({ length }, () => 0);

    for (const i of range(length)) {
      let iSum = 0,
        iNums = 0;
      for (const j of range(length)) {
        const cur = scores[j][i];
        if (typeof cur == "string") continue;
        iSum += cur;
        iNums++;
      }
      targetScore[i] = iSum / iNums;
    }
    // console.log(targetScore);
    return targetScore;
  };

  /**
   * @param {number} num 학점 숫자
   * @returns 학점 문자
   */
  const getAlpha = (num) => {
    if (num >= 70) {
      return num >= 80 ? (num >= 90 ? "A" : "B") : "C";
    } else {
      return num >= 50 ? "D" : "F";
    }
  };
  return getTargetScores(getModifyLine(scores)).map(getAlpha).join("");
};

[
  [
    [
      [100, 90, 98, 88, 65],
      [50, 45, 99, 85, 77],
      [47, 88, 95, 80, 67],
      [61, 57, 100, 80, 65],
      [24, 90, 94, 75, 65],
    ],
    "FBABD",
  ],
  [
    [
      [50, 90],
      [50, 87],
    ],
    "DA",
  ],
  [
    [
      [70, 49, 90],
      [68, 50, 38],
      [73, 31, 100],
    ],
    "CFD",
  ],
].forEach(([q, a]) => {
  const ans = solution(q);
  console.log(ans);
  console.assert(ans == a);
});
