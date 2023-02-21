window.onload = function () {
    var nod1 = document.getElementById("color");
    var nod2 = document.getElementById("size");
    var nod3 = document.getElementById("font");

    nod1.addEventListener("keyup", function () {
        document.getElementById("par").style.color = nod1.value;
    })

    nod2.addEventListener("change", function () {
        document.getElementById("par").style.fontSize = nod2.value + "px";
    })

    nod3.addEventListener("change", function () {
        var result = nod3.options[nod3.selectedIndex].text;
        document.getElementById("par").style.fontFamily = result + ",Charcoal,sans-serif";
    })
}