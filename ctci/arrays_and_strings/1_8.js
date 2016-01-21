String.prototype.isSubstring = function(str) {
    return str.indexOf(this) !== -1;
};

// e.g. dabc abcd
// dabc+dabc = abcdabc -> check abcd is a substring of abcdabc 
function isRotation(str1, str2) {
    return str2.isSubstring(str1 + str1);
}

console.log(isRotation('erbottlewat', 'waterbottle'));
