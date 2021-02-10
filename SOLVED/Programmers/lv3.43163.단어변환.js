/**
 * lv3. 단어 변환
 *
 * 백트래킹?
 *
 * @param {string} begin 시작 단어
 * @param {string} target 도착 단어
 * @param {string[]} words 중간 단어 배열
 * @returns {number}  최소 몇단계만에 가능한지
 */
const solution = (begin, target, words) => {
  if (!words.includes(target)) return 0;

  const visited = {};
  const len = target.length;

  const canChange = (a, b) => {
    const same = Array.from(a).reduce(
      (acc, _, idx) => (a[idx] === b[idx] ? acc + 1 : acc),
      0
    );
    return same === len - 1;
  };

  let mini = Number.MAX_SAFE_INTEGER;
  const bt = (current, visited, cnt) => {
    if (current === target) {
      if (cnt < mini) mini = cnt;
      return;
    }

    if (visited[current]) return;
    visited[current] = true;

    for (const nextWord of words) {
      if (!canChange(current, nextWord) || visited[nextWord]) continue;
      bt(nextWord, visited, cnt + 1);
    }
  };

  bt(begin, visited, 0);
  return mini;
};

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
