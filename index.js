
window.addEventListener("load", ()=>{
    let introButton = document.getElementById("intro-btn");
    let mainButton = document.getElementById("main-btn")

    const displayJokes =(data)=>{
        const{setup} = data;
        const{delivery}= data;
        document.getElementById("diwash").innerHTML="Diwash :"+setup;
        document.getElementById("you").innerHTML="You :"+delivery;
        console.log(data)
    }
    const fetchJokes = ()=>{
        fetch(
            "https://v2.jokeapi.dev/joke/any?type=twopart"
        )
        .then((response)=>response.json())
        .then((data)=>displayJokes(data));
    }
 
    introButton.addEventListener("click", function(){
        introButton.style.display="none";
        mainButton.style.display="block";
        document.getElementById("main-part").style.display="none";
        document.getElementById("joke-part").style.display="flex";
        mainButton.addEventListener("click",function(){
            console.log("clicked")
            fetchJokes()
        
        })
    })
    
   



})