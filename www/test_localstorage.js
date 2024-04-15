// fetch('bdd.json')
//   .then(response => response.json()) // Convertir la réponse en JSON
//   .then(data => {
//     // Accéder aux données
//     console.log(data.squadName); // Affichera 'Super hero squad'
//     console.log(data.homeTown); // Affichera 'Metro City'
//     console.log(data.formed); // Affichera 2016
//     console.log(data.secretBase); // Affichera 'Super tower'
//     console.log(data.active); // Affichera true

//     // Accéder aux membres
//     data.members.forEach(member => {
//       console.log("Membre:", member.name);
//       console.log("Âge:", member.age);
//       console.log("Identité secrète:", member.secretIdentity);
//       console.log("Pouvoirs:", member.powers);
//     });
//   })
//   .catch(error => console.error('Une erreur s\'est produite:', error));


var data=  {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

  