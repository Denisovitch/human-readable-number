module.exports = function toReadable (number) {
  
    let one = [
        "",
        "one ",
        "two ",
        "three ",
        "four ",
        "five ",
        "six ",
        "seven ",
        "eight ",
        "nine ",
        "ten ",
        "eleven ",
        "twelve ",
        "thirteen ",
        "fourteen ",
        "fifteen ",
        "sixteen ",
        "seventeen ",
        "eighteen ",
        "nineteen ",
    ];

    let ten = [
        "",
        "",
        "twenty ",
        "thirty ",
        "forty ",
        "fifty ",
        "sixty ",
        "seventy ",
        "eighty ",
        "ninety ",
    ];

    function numToWords(number, s) {
        let str = "";
        if (number > 19) {
            str = str + ten[parseInt(number / 10)] + one[number % 10];
        } else {
            str = str + one[number];
        }
        if (number != 0) {
            str = str + s;
        }
        return str;
    }

    let out = "";

    if (number == 0) {
        out = "zero";
    } else {
        if (String(number).length > 4) {
            out = "Too much symbols!!!";
        } else {
            out = out + numToWords(parseInt((number / 1000) % 100), "thousand ");
            out = out + numToWords(parseInt((number / 100) % 10), "hundred ");
            if (number > 100 && number % 100 > 0) {
                out = out;
            }
            out = out + numToWords(parseInt(number % 100), "");
        }
    }
    return out;    
}

