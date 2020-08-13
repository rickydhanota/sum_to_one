function sumToOne(num){
    var num_str = num.toString();
    while (num_str.length > 1){
        var count = 0;
        for (var i = 0; i<num_str.length; i++){
            count = count + Number(num_str[i]);
        }
        num_str = count.toString();
        // console.log(num_str, "num_str");
    }
    return Number(num_str);
}
var y = sumToOne(35);
console.log(y);
