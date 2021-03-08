/**
 * Easy. 575. Distribute Candies
 * - https://leetcode.com/problems/distribute-candies/
 *
 * @param {number[]} candyType
 * @return {number}
 */
function distributeCandies(candyType) {
  const dist = candyType.length / 2;
  const hash = new Set(candyType);
  return hash.size > dist ? dist : hash.size;
}
