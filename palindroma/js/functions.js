function isPalindrome(text){
    let finalText = "";
    let result = "";
    for (let i = text.length -1 ; i >= 0 ; i --){
        const curText = text[i];
        finalText = finalText + curText;
        if (finalText === userWord){
            result = `La parola ${userWord} è una parola palindroma`;           
        }else {
            result = `La parola ${userWord} non è una parola palindroma`;
        }
}
return result;
}

