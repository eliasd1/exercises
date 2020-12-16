var images = ["https://www.pcgamesn.com/wp-content/uploads/2019/01/Intel-i7-9700K-CPU-900x507.jpg", "https://www.amd.com/system/files/2020-07/559424-amd-ryzen-pro-1260X709.jpg", "https://images.firstpost.com/wp-content/uploads/2019/06/amd-radeon-rx-5700-xt.jpg", "https://s.yimg.com/os/creatr-uploaded-images/2020-06/6202f1e0-b63a-11ea-8efa-c68d6b052c23"]
var colors = ["#282828", "blue", "black"]
var button = document.querySelector("#prompt");

$("#range").on("input", function(){
    $("img").attr("src", images[$(this).val() - 1])
})

$("#mySelect").on("change", function(){
    $("body").css("background-color", colors[$(this).val()])
    if($(this).val() === "0"){
        alert("Background color set to default")
    }
})

button.addEventListener("click", function(){
    document.querySelectorAll("#button img").forEach(img => img.remove())
    getInput();
    displayImages();
})

function getInput(){
    var input = prompt("What is your name?")
    var count = 0;
    while(!isNaN(input) && count < 4){
        input = prompt("Please try again")
        count++;
    }
    if(count === 4){
        alert("Maximum number of tries exceeded")
    } else{
        alert("Welcome " + input)
    }
}

function displayImages(){
    var reply = prompt("Pick a number from 1-4")
    while(isNaN(reply) || (Number(reply) < 1) || (Number(reply) > 4)){
        reply = prompt("Please try again. Enter a number from 1-4")
    }
    for(let i = 0; i< reply; i++){
            document.querySelector("#prompt").insertAdjacentHTML("afterend", "<img src = " + images[i] + " style = 'width : 250px; height:200px; display: inline'>")
    } 
}

