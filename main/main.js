module.exports = function main(inputs) {
    // write your code here...
    distance = inputs['distance']
    parkTime = inputs['parkTime']
    summary1 = parkTime * 0.25
    if (distance <= 2) {
      summary2 = 6
    } else if (distance <= 8) {
      summary2 = 6 + 0.8 * (distance - 2)
    } else {
      summary2 = 10.8 + 1.2 * (distance - 8)
    }
    return Math.round(summary1 + summary2);
};
