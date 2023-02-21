window.onload = function () {
    oo0 = document.querySelectorAll("#oo li")[0];
    oo0.addEventListener("click", function () {
        const col = Math.random().toString(16).slice(2, 8);
        oo0.style.color = "#" + col;
    });

    oo1 = document.querySelectorAll("#oo li")[1];
    oo1.addEventListener("click", function () {
        const col = Math.random().toString(16).slice(2, 8);
        oo1.style.color = "#" + col;
    });

    oo2 = document.querySelectorAll("#oo li")[2];
    oo2.addEventListener("click", function () {
        const col = Math.random().toString(16).slice(2, 8);
        oo2.style.color = "#" + col;
    });

    oo3 = document.querySelectorAll("#oo li")[3];
    oo3.addEventListener("click", function () {
        const col = Math.random().toString(16).slice(2, 8);
        oo3.style.color = "#" + col;
    });

    oo4 = document.querySelectorAll("#oo li")[4];
    oo4.addEventListener("click", function () {
        const col = Math.random().toString(16).slice(2, 8);
        oo4.style.color = "#" + col;
    });
}