/**
 * lv2. 스킬트리
 *
 * https://programmers.co.kr/learn/courses/30/lessons/49993
 *
 *  채검 난이도 정말 쉬운 문제인데,
 * 	스킬이 하나도 포함되지 않을 경우를 놓쳐서 오래걸림..와..
 *
 *  이런 사소한 조건 하나 때문에 실제 시험때 멘탈 터지는 듯
 */

const solution = (skill, trees) => {
  const arr = Array.from(skill);
  const count = trees.reduce((acc, tree) => {
    const filtered = Array.from(tree)
      .filter((val) => arr.includes(val))
      .join("");
    return (filtered.startsWith(skill[0]) && skill.includes(filtered)) ||
      !filtered
      ? acc + 1
      : acc;
  }, 0);
  return count;
};

const qq = [
  ["CBD", ["BACDE", "CBADF", "AECB", "BDA"]],
  ["ACB", ["RHTA", "CBADF", "AECB", "BDA"]],
  ["ABC", ["OPQ"]],
];

qq.forEach((q) => console.log(solution(...q)));

/**
 * ShortCoding
 *
 * RegExp, indexOf를 활용해 훨씬 깔끔한 풀이
 *
 * 문자열 자체를 정규식으로 넣을 방법이 없나 고민했는데,
 * RegExp로 하면 된다는 걸 알게 되었네
 */

function solution(skill, skill_trees) {
  var regex = new RegExp(`[^${skill}]`, "g");

  return skill_trees
    .map((x) => x.replace(regex, ""))
    .filter((x) => skill.indexOf(x) === 0 || x === "").length;
}
