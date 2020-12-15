var images = ["https://www.pcgamesn.com/wp-content/uploads/2019/01/Intel-i7-9700K-CPU-900x507.jpg", "https://www.amd.com/system/files/2020-07/559424-amd-ryzen-pro-1260X709.jpg", "https://images.firstpost.com/wp-content/uploads/2019/06/amd-radeon-rx-5700-xt.jpg", "https://s.yimg.com/os/creatr-uploaded-images/2020-06/6202f1e0-b63a-11ea-8efa-c68d6b052c23"]
var colors = ["#282828", "blue", "black"]
$("#range").on("input", function(){
    $("img").attr("src", images[$(this).val() - 1])
})

$("#mySelect").on("change", function(){
    $("body").css("background-color", colors[$(this).val()])
    if($(this).val() === "0"){
        alert("Background color set to default")
    }
})