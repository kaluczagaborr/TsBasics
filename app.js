function add(n1, n2, ShowResult) {
    if (ShowResult == true)
        console.log(n1 + n2);
    else
        return n1 + n2;
}
var number1 = 23.7;
var number2 = 6;
var printRes = true;
add(number1, number2, printRes);
