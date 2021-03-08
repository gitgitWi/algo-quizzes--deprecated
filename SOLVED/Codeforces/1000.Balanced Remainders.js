/**
 * B. 1000. Balanced Remainders
 *
 * @param {string[]} inputs
 */
const solutionB = (inputs) => {
  const getAns = (size, array) => {
    const modArr = [0, 0, 0];
    for (let i = size; i--; ) {
      const curMod = array[i] % 3;
      modArr[curMod] += 1;
    }

    const bal = size / 3;
    const isBal = (bal) => modArr.every((e) => e === bal);
    if (isBal(bal)) return 0;

    let ans = 0;
    while (!isBal(bal)) {
      for (let i = 3; i--; ) {
        if (modArr[i] > bal) {
          modArr[i]--;
          modArr[(i + 1) % 3]++;
          break;
        }
      }
      ans += 1;
    }

    return ans;
  };

  const [, ...rest] = inputs;
  const q = rest.length;
  const ans = [];
  for (let i = 0; i < q; i += 2) {
    const size = +rest[i];
    const array = rest[i + 1].split(" ").map((e) => Number(e));
    ans.push(getAns(size, array));
  }
  console.log(ans.join("\n"));
};

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
  solutionB(q);
  process.exit();
});
