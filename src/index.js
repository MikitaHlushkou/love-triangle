/**
* @param preferences - an array of integers. Indices of people, whom they love
* @returns number of love triangles
*/
module.exports = function getLoveTrianglesCount(preferences = []) {
var count = 0;
for(var i = 0; i < preferences.length; i++){
var first = preferences[i];
var second = preferences[first - 1];
if (preferences[second - 1] == i + 1) {
count++;}
}
return Math.round(count / 3);};
