let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

let n = 0;

function addone(n) {
    n += 1;
    document.body.innerHTML = "<h1>Times clicked: " + n + "</h1>";
}