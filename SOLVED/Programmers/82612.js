/**
 * @description
 * Weekly 01. 부족한 금액 계산하기
 * createdAt `21.08.02.
 *
 * @param price {number}
 * @param money {number}
 * @param count {number}
 * @returns {number}
 */
const solution = (price, money, count) => {
  const rest = count * (count + 1) * 0.5 * price - money;
  return rest > 0 ? rest : 0;
};

console.log(solution(3, 20, 4) === 10);
