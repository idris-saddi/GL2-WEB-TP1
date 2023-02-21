const sub = document.querySelector('#sub');
const aff = document.querySelector('#aff');

sub.addEventListener('click', function () {
    const nom = document.querySelector('#nom').value;
    const comment = document.querySelector('#comment').value;
    const date = new Date();
    const dateNow = date.toLocaleDateString();
    const timeNow = date.toLocaleTimeString();
    const newComment = document.createElement('div');
    newComment.innerHTML = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${nom}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${dateNow} à ${timeNow}</h6>
            <p class="card-text">${comment}</p>
        </div>
    </div>
    `;
    aff.appendChild(newComment);
});