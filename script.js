function myFunction() {
    var randomnum=Math.floor(Math.random()*3)

    if(randomnum==0){
    document.getElementById("link").href = "a.html";
    document.getElementById("link").innerHTML = "a.html";
    document.getElementById("demo").innerHTML = randomnum;};
    if(randomnum==1){
        document.getElementById("link").href = "b.html";
        document.getElementById("link").innerHTML = "b.html";
        document.getElementById("demo").innerHTML = randomnum;};
    if(randomnum==2){
        document.getElementById("link").href = "c.html";
        document.getElementById("link").innerHTML = "c.html";
        document.getElementById("demo").innerHTML = randomnum;};    
  }