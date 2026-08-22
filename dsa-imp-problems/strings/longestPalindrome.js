function longestPalindrome(s){

    let result = "";

    function expand(left, right){

        while(left>=0 && right<s.length && s[left]===s[right]){
            left--;
            right++;
        }

        return s.substring(left+1, right);
    }

    for(let i=0; i<s.length; i++){

        const odd = expand(i, i);
        const even = expand(i, i+1);

        if(odd.length > result.length){
            result = odd;
        }

        if(even.length > result.length){
            result = even;
        }
    }
    return result;
}

console.log(longestPalindrome("mycarisracecar"));
console.log(longestPalindrome("babad"));