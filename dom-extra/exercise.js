Movies = [
    { title: "movie1", duration: 120, actor: "Meryl Streep"},
    { title: "movie2", duration: 150, actor: "Robert De Niro"},
    { title: "movie3", duration: 160, actor: "Jack Nicholson"},
    { title: "movie4", duration: 100, actor: "Denzel Washington"},
   ]
/*
   var counter = 0;
   var a = document.createElement("ul");
 function myFunction(){
   
    var one = document.createElement("p")
    var two = document.createElement("p")
    var three = document.createElement("p")
    one.innerHTML = `Movie title: ${Movies[counter].title}`
    two.innerHTML = `Duration: ${Movies[counter].duration}`
    three.innerHTML = `Actor: ${Movies[counter].actor}`
    a.appendChild(document.createElement("li").appendChild(one));
    a.appendChild(document.createElement("li").appendChild(two));
    a.appendChild(document.createElement("li").appendChild(three));
    document.getElementsByTagName("body")[0].appendChild(a);
    