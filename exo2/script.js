"use strict"; // slide 52 pour signaler les variables non definies


// slide39 tableau de chaines de caracteres 
function f1() {
    //daclaration local car elle est utilise dans la f2 et f3
    const etudiants = ['Etudiant1', 'Etudiant2', 'Etudiant3'];
    // slide45 boucle for..of pour parcourir le tableau 
    for (const etudiant of etudiants) {
        console.log(etudiant); // un élément par ligne (slide 34)
    }
}

// slide  40 un objet etudiant
function f2() {
    const etudiant = {
        nom: 'John',
        prenom: 'Doe',
        age: 30
    };
    console.log(etudiant); // sldie 41 affichage objet
}

function f3() {
    //slide 41 tableau dobjet
    const etudiants = [
        { nom: 'sahari', prenom: 'celina lydia', age: 21 },
        { nom: 'baaziz', prenom: 'hiba', age: 20 },
        { nom: 'nom3', prenom: 'prenom3', age: 23 }
    ];

    for (const etudiant of etudiants) {
        console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age);
    }
}
