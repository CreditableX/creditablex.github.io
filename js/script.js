let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

let n = 0;

incrementVal = function(eve){
    var _ele = $(eve.target);
    var _val = parseInt(_ele.text(),10);
    _ele.text(_val+1);
}