"use strict"; 
const students = [
    { id: 1000, nom: 'JOHN',prenom: 'DOE',examen: 14, tp: 5 },
    { id: 2000, nom: 'BOB',prenom: 'CARLTON',examen: 7,  tp: 1 },
    { id: 3000, nom: 'RAYANE',prenom: 'SMITH',examen: 13, tp: 3 }
];

//slide 46 function B avec retour bool true=admis et false=ajourne
function B(moyenne) {
    // slide 42 operateur relationnel admis si la moyenne est >= 10
    return moyenne >= 10;
}
// function A appelle function B
function A() {
    // slide 45 Boucle for..of sur le tableau d'objets 
    for (const s of students) {
        const moyenne = s.examen * 0.75 + s.tp * 0.25; // slide 40 acces a examen seulement avec s.examen mm chose pour tp
        // Condition if..else (slide 43)
        if (B(moyenne)) { 
            // slide38 ffichage avec backstick 
            console.log(`${s.id}: ADMIS`);
        } else {
            console.log(`${s.id}: AJOURNE`);
        }
    }
}
