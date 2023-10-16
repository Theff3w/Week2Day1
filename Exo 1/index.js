/*Créez 3 boutons dans une page HTML

En JS :

Sélectionnez ces 3 boutons et appliquez un gestionnaire d'évènement au click sur chacun des boutons
Utilisez le boucle for....of pour parcourir la collection (NodeList)
Utilisez une fonction de callBack pour modifier la classe CSS du bouton quand on click dessus
(ajoutez ou enlevez la classe CSS .selected qui va changer la couleur du bouton)
Vous devrez faire 2 versions : une fonction anonyme normal passée en paramètre,
et une fonction anonyme fléchée. Vous utiliserez this et/ou l'objet event
pour accéder au bouton sur lequel l'utilisateur a cliqué !
*/

let btn1 = document.getElementById('1');
let btn2 = document.getElementById('2');
let btn3 = document.getElementById('3');

const btns = document.querySelectorAll('.btn');

// Version fonction anonyme 

for (const btn of btns) {
    btn.addEventListener('click', function () {
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
        } else {
            this.classList.add('selected');
        }
    });
}

// Version fonction flechée

// for(const btn of btns) {
//     btn.addEventListener('click', (event) => {
//         if(event.target.classList.contains('selected')) {
//             event.target.classList.remove('selected');
//         } else {
//             event.target.classList.add('selected');
//         }
//     });
// }