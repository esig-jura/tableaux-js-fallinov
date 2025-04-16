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
const champPrenom = document.getElementById('prenom');
const champNom = document.getElementById('nom');
const champAge = document.getElementById('age');
const champLocalite = document.getElementById('localite');

// Déclaration des fonctions
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
function ajouterNouvellePersonne (event) {
    event.preventDefault(); // Stoppe l'envoi du formulaire

    // Récupération et nettoyage des valeurs saisies par l'utilsateur dans le formulaire
    let prenom = champPrenom.value.trim(); // trim Supprime les espaces en début et fin de chaîne
    let nom = champNom.value.trim();
    let age = parseInt(champAge.value); // Transforme la saisie en entier
    let localite = champLocalite.value.trim();

    // Tester si le formulaire et correctement rempli
    if(!prenom || !nom || !age || !localite) {
        alert('Merci de remplir tous les champs correctement !');
        return; // Sort de la fonction ajouterNouvellePersonne
    }

    // Ajoute une nouvelle personne à la fin du tableau
    personnes.push({
        prenom: prenom,
        nom: nom,
        age: age,
        localite: localite
    });

// Réafficher le tableau avec la nouvelle personne
    affichePersonnes();
}

// Gestion des événements
formulaire.addEventListener('submit', ajouterNouvellePersonne);

// Initialisation de l'application
affichePersonnes();