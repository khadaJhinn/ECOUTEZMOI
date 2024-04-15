fetch('bdd.json')
  .then(response => response.json()) // Convertir la réponse en JSON
  .then(data => {
    // Accéder aux données
    console.log(data.squadName); // Affichera 'Super hero squad'
    console.log(data.homeTown); // Affichera 'Metro City'
    console.log(data.formed); // Affichera 2016
    console.log(data.secretBase); // Affichera 'Super tower'
    console.log(data.active); // Affichera true

    // Accéder aux membres
    data.members.forEach(member => {
      console.log("Membre:", member.name);
      console.log("Âge:", member.age);
      console.log("Identité secrète:", member.secretIdentity);
      console.log("Pouvoirs:", member.powers);
    });
  })
  .catch(error => console.error('Une erreur s\'est produite:', error));