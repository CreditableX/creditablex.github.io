let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

var timesClicked = 0;

 function btnClick(){
    timesClicked ++;
     
    document.getElementById('timesClicked').innerHTML = timesClicked;
    return true 
}