let test = document.getElementById("test")
let xhr = new XMLHttpRequest();
let url = "http://localhost:3300";

xhr.open("GET", url + "/personnes", true);

xhr.responseType = 'json'

xhr.onload = () => {
    const data = xhr.response;
    data.map(personne => {
        const prenom = document.createElement("h2");
        prenom.innerText = personne.prenom
        const age = document.createElement("p");
        age.innerText = personne.age
        const metier = document.createElement("p");
        metier.innerText = personne.metier
        test.appendChild(prenom);
        test.appendChild(age);
        test.appendChild(metier);
    })
}
xhr.send();
