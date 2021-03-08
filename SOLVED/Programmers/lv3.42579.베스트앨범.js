/**
 * lv3. 42579. 베스트앨범
 * - https://programmers.co.kr/learn/courses/30/lessons/42579
 *
 */
function solution(genres, plays) {
  const map = {};
  const totTimes = {};
  const size = genres.length;
  for (let i = size; i--; ) {
    const curGenre = genres[i];
    const curPlay = plays[i];
    const curList = map[curGenre];
    if (curList) {
      totTimes[curGenre] += curPlay;
      curList.push([curPlay, i]);
      map[curGenre] = curList
        .sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]))
        .slice(0, 2);
    } else {
      totTimes[curGenre] = curPlay;
      map[curGenre] = [[curPlay, i]];
    }
  }

  return Object.keys(totTimes)
    .sort((a, b) => totTimes[b] - totTimes[a])
    .map(key => map[key].map(e => e[1]))
    .flat();
}

[
  [
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  ]
].forEach(q => console.log(solution(...q)));
