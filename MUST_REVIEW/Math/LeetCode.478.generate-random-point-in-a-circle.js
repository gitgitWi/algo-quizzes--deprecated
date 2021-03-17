/**
 * Medium. 478. Generate Random Point in a Circle
 * - 문제: https://leetcode.com/problems/generate-random-point-in-a-circle/
 * - 풀이참고: https://leetcode.com/problems/generate-random-point-in-a-circle/discuss/1113679/Python-Polar-coordinates-explained-with-diagrams-and-math
 */

class Solution {
  /**
   * @param {number} radius
   * @param {number} xCenter
   * @param {number} yCenter
   */
  constructor(radius, xCenter, yCenter) {
    this.radius = radius;
    this.xCenter = xCenter;
    this.yCenter = yCenter;
  }

  /**
   * @return {number[]}
   */
  randPoint() {
    const Theta = Math.random() * Math.PI * 2;
    const R = Math.sqrt(Math.random()) * this.radius;

    return [
      this.xCenter + Math.cos(Theta) * R,
      this.yCenter + Math.sin(Theta) * R
    ];
  }
}
