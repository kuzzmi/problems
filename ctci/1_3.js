function sortWord(str) {
    return str.split('').sort().join('');
}
function arePermutations(str1, str2) {
    return sortWord(str1) === sortWord(str2);
}

console.log(arePermutations('afdlafsdfasdfasdffdlafsdfasdfasdffdlafsdfasdfasdffdlafsdfasdfasdfsdhflajskdfhlasjdfsdhflajssdhflajskdfhlasjdfsdhflajskdfhlasjdfkdfhlasjdfbc', 'bsdsdhflajskdfdlafsdfasdfasdffdlafsdfasdfasdffdlafsdfasdfasdfffdlafsdfasdfasdfhlasjdfsdhflajskdfhlasjdfhflajskdfhlasjdfsdhflajskdfhlasjdfca'));
// console.log(arePermutations('abc', 'gca'));
