/**
 * A. Dense Array (800)
 *
 * @param {string[]} inputs
 */
const solutionA = (inputs) => {
  const getAns = (elements, array) => {
    let ans = 0;
    for (let i = 1; i < elements; i++) {
      const [ge, le] = array[i - 1] > array[i] ? [i - 1, i] : [i, i - 1];
      if (array[ge] / array[le] <= 2) continue;
      for (let j = array[le] * 2; j < array[ge]; j *= 2) {
        ans += 1;
      }
    }
    return ans;
  };

  const [, ...rest] = inputs;
  const q = rest.length;
  const ans = [];
  for (let i = 0; i < q; i += 2) {
    const elements = +rest[i];
    const array = rest[i + 1].split(" ").map((e) => Number(e));
    ans.push(getAns(elements, array));
  }
  console.log(ans.join("\n"));
};

// const inputsA = [
//   "6",
//   "4",
//   "4 2 10 1",
//   "2",
//   "1 3",
//   "2",
//   "6 1",
//   "3",
//   "1 4 2",
//   "5",
//   "1 2 3 4 3",
//   "12",
//   "4 31 25 50 30 20 34 46 42 16 15 16",
// ];

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});

const q = [];
rl.on("line", (line) => {
  line ? q.push(line) : rl.close();
}).on("close", () => {
  solutionA(q);
  process.exit();
});
