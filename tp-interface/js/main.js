var listePersonnes = [
    {
        nom: 'Toto Dupont',
        age: 35,
        occupation: 'Facteur'
    },
    {
        nom: 'Jeanne Doe',
        age: 25,
        role: 'Admin'
    },
    {
        nom: 'Michel Michel',
        age: 23,
        occupation: 'Lutteur'
    },
    {
        nom: 'Michael Flinch',
        age: 64,
        role: 'Gérant'
    }
];
// 4. 
listePersonnes.forEach(function (personne) {
    console.log("Nom: ".concat(personne.nom, ", \u00C2ge: ").concat(personne.age));
});
