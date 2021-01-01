/**
 * lv2. 타겟 넘버
 * 
 * 이전에 py로 풀었던 것 
 * js FP 활용해 다시 풀어봄..
 * 여전히 한번에 바로 풀리는 문제는 아님ㅠ
 * 
 * https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
 */

const solution = (numbers, target) => {
	let comb = [0];
	numbers
		.forEach((num, idx) => {
			const temp = [...comb];
			comb = [];
			temp.forEach((ele) => {
				comb.push(ele + num);
				comb.push(ele - num);
			})
		})
	return comb.filter(num => num === target).length;
}
