// Q1
// const solution = (n) => +Array.from(n.toString()).sort().reverse().join('');

// Q2
const solution = (participant, completion) => {
  const sortedP = participant.sort();
  const sortedC = completion.sort();

  while (sortedP.length > 0) {
    const currP = sortedP.pop();
    const currC = sortedC.pop();
    if (currP !== currC) return currP;
  }
  return;
};

// console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
// console.log(
//   solution(
//     ["marina", "josipa", "nikola", "vinko", "filipa"],
//     ["josipa", "filipa", "marina", "nikola"]
//   )
// );
