// 1. 
interface User {
    nom: string;
    age: number;
    occupation?: string; 
  }
  
  // 2. 
  interface Admin {
    nom: string;
    age: number;
    role: string;
  }
  
  // 3. 
  type Personne = User | Admin;
  
  const listePersonnes: Personne[] = [
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
  listePersonnes.forEach((personne) => {
    console.log(`Nom: ${personne.nom}, Âge: ${personne.age}`);
  });
  