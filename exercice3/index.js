window.onload = function () {
    const sub = document.querySelector('#sub');
    const affichage = document.querySelector('#affichage');

    sub.addEventListener('click', function () {
         nom = document.getElementById("name").value;
         comment = document.getElementById("comment").value;
        if(nom == "" || comment == ""){
            alert("Veuillez remplir tous les champs");
            return;
        }
        const date = new Date();
        const dateNow = date.toLocaleDateString();
        const timeNow = date.toLocaleTimeString();
        const newComment = document.createElement('div');
        affichage.appendChild(newComment);
        // newComment.id= (newComment.previousSibling==null)? 1+"": (newComment.previousSibling.id+1) + "";
        newComment.innerHTML = `
        <div class="card m-2" style="width: 18rem;">
            <button type="button" class="btn-close xx" aria-label="Close"}></button>
            <div class="card-body">
                <h5 class="card-title col-9">${nom}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${dateNow} à ${timeNow}</h6>
                <p class="card-text">${comment}</p>
            </div>
        </div>
        `;

        affichage.appendChild(newComment);

        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";

        xx = document.querySelectorAll(".xx");
        xx.forEach(x => {
            if(x != null){
                x.addEventListener("click", function(){
                    const ele = x.parentNode;
                    console.log(ele);
                    ele.remove();
                });
            }
        });
        
    });
 

}