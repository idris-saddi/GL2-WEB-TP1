window.onload = function () {
    const sub = document.querySelector('#sub');
    const aff = document.querySelector('#aff');

    sub.addEventListener('click', function () {
        const nom = document.getElementById("name").value;
        const comment = document.getElementById("comment").value;
        const date = new Date();
        const dateNow = date.toLocaleDateString();
        const timeNow = date.toLocaleTimeString();
        const newComment = document.createElement('div');
        aff.appendChild(newComment);
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

        aff.appendChild(newComment);
        xx = document.querySelectorAll(".xx");
        xx.forEach(x => {
            if(x != null){
                x.addEventListener("click", function(){
                    const ele = x.parentNode;
                    console.log(ele.innerHTML);
                    ele.remove();
                });
            }
        });
        
    });
 

}