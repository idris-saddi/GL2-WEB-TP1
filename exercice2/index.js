$(document).ready(function(){
    $("#color").change(function(){
        $("#par").css("color", $("#color").val());
    });
    $("#taille").change(function(){
        $("#par").css("font-size", $("#taille").val() + "px");
    });
    $("#font").change(function(){
        $("#par").css("font-family", $("#font").val());
    });
});

// document.getElementById("color").addEventListener("keyup", function(){
//     document.getElementById("par").style.color = document.getElementById("color").value;
// });
// document.getElementById("taille").addEventListener("change", function(){
//     document.getElementById("par").style.fontSize = document.getElementById("taille").value + "px";
// });
// document.getElementById("font").addEventListener("change", function(){
//     document.getElementById("par").style.fontFamily = document.getElementById("font").value;
// });

// var nod1 = document.getElementById("color");
// var nod2 = document.getElementById("taille");
// var nod3 = document.getElementById("font");

// nod1.addEventListener("change", function(e){
//         document.getElementById("par").style.color= nod1.value;
// })

// nod2.addEventListener("change", function(){
//     document.getElementById("par").style.fontSize = nod2.value + "px";
// })

// nod3.addEventListener("change", function(){
//     document.getElementById("par").style.fontFamily = nod3.value ;
// })