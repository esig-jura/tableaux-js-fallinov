/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';
// Déclaration des données
const personnes = [
    {
        nom: 'Doe',
        prenom: 'John',
        age: 25,
        localite: 'New York',
    },
    {
        nom: 'Ré',
        prenom: 'Jane',
        age: 30,
        localite: 'Los Angeles',
    },
    {
        nom: 'Mi',
        prenom: 'Jack',
        age: 28,
        localite: 'Chicago',
    },
    {
        nom: 'Fa',
        prenom: 'Jill',
        age: 35,
        localite: 'Miami',
    },
    {
        nom: 'Sol',
        prenom: 'Jim',
        age: 40,
        localite: 'San Francisco',
    }
];

// Récupération des éléments HTML
const tableBodyPersonnes = document.querySelector('.personnes'); // Corps du tableau
const formulaire = document.querySelector('form'); // Formulaire


formulaire.addEventListener('submit', function(event){
    event.preventDefault(); // Stoppe l'envoi du formulaire
    console.log("Formulaire envoyé !");
});


// Fonction qui affiche les personnes dans le tableau HTML
function affichePersonnes () {
    // Vider le tableau
    tableBodyPersonnes.innerHTML = '';
    // Créer une ligne pour chaque personne
    for (let pers of personnes) {
        tableBodyPersonnes.innerHTML += `
            <tr>
                <td>${pers.prenom}</td>
                <td>${pers.nom}</td>
                <td>${pers.age}</td>
                <td>${pers.localite}</td>
            </tr>`;
    }
}

// Appel de la fonction pour afficher les personnes
affichePersonnes();