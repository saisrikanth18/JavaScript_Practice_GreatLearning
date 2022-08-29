var s = 'madams';
var r = '';
for (var i = s.length - 1; i >= 0; i--) {
    r += s[i];
}
console.log(r);
if (r == s) {
    console.log('Given string is palindrome');
} else {
    console.log('Not a palindrome');
}


//Or another approach is
var s = 'abcaaaaaacba';
const isPalindrome = function (str) {
    var left = 0;
    var right = str.length - 1;
    while (right > left) {
        if (str.charAt(left) != str.charAt(right)) {
            return false
        }
        left++;
        right--;
    }
    return true
}
var result = isPalindrome(s);
if (result) {
    console.log("Given String is a Palindrome");
}
else {
    console.log("Given String is not a Palindrome");
}
