let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

let n = 0;

function addone(n) {
    n += 1;
    document.getElementById("times").innerHTML = n;
}