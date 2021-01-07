/**
 * lv2. 멀쩡한 사각형
 *
 * https://programmers.co.kr/learn/courses/30/lessons/62048
 *
 * 최대공약수 문제인건 딱보고 알겠는데
 *  그 다음 수식 세우기가 생각이 잘 안나는 수학 문제..
 *  일단 GCD 공식은 그냥 외우자..
 */

const GCD = (a, b) => (a % b === 0 ? b : GCD(b, a % b));
const solution = (W, H) => W * H - (W + H - GCD(W, H));

const qq = [[8, 12]];

qq.forEach((q) => console.log(solution(...q)));
