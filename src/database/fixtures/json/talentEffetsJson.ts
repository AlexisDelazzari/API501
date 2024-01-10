const talentEffetsJson = [
  {
    "uuid": 1,
    "nom": "Engrais",
    "description": "Augmente la puissance des capacités de type Plante du Pokémon quand il a perdu une certaine quantité de PV."
  },
  {
    "uuid": 2,
    "nom": "torrent",
    "description": "Augmente la puissance des capacités de type Eau du Pokémon quand il a perdu une certaine quantité de PV."
  },
  {
    "uuid": 3,
    "nom": "charbon",
    "description": "Augmente la puissance des capacités de type Feu du Pokémon quand il a perdu une certaine quantité de PV."
  },
  {
    "uuid": 4,
    "nom": "Tempête de sable",
    "description": "Déclenche une tempête de sable lors de l'entrée en jeu du Pokémon."
  },
  {
    "uuid": 5,
    "nom": "Voile Sable",
    "description": "Augmente l'esquive du Pokémon lors des tempêtes de sable."
  },{
    "uuid": 6,
    "nom": "Brasier",
    "description": "Augmente la puissance des capacités de type Feu du Pokémon quand il a perdu une certaine quantité de PV."
  },
  {
    "uuid": 7,
    "nom": "Point Poison",
    "description": "Peut empoisonner les assaillants au contact."
  },
  {
    "uuid": 8,
    "nom": "Glissade",
    "description": "Augmente la vitesse du Pokémon sous la pluie."
  },
  {
    "uuid": 9,
    "nom": "Torrent",
    "description": "Augmente la puissance des capacités de type Eau lorsque les PV du Pokémon sont faibles."
  },
  {
    "uuid": 10,
    "nom": "Lumiatirance",
    "description": "Augmente les chances de rencontrer des Pokémon sauvages."
  },
  {
    "uuid": 11,
    "nom": "Pieds Confus",
    "description": "Le taux d'esquive du Pokémon augmente s'il est confus."
  },
  {
    "uuid": 12,
    "nom": "Intimidation",
    "description": "Diminue l'attaque de l'adversaire en entrant au combat."
  },
  {
    "uuid": 13,
    "nom": "Torche",
    "description": "Empêche le Pokémon d'être brûlé et augmente la puissance de ses capacités de type Feu lorsqu'il est touché par une capacité de type Feu."
  },
  {
    "uuid": 14,
    "nom": "Tête de Roc",
    "description": "Empêche le Pokémon de subir des dégâts de recul."
  },
  {
    "uuid": 15,
    "nom": "Statique",
    "description": "Peut paralyser l'attaquant lorsqu'il porte une attaque directe."
  },
  {
    "uuid": 16,
    "nom": "Motorisé",
    "description": "Augmente la Vitesse du Pokémon s'il est touché par une capacité de type Électrique."
  },
  {
    "uuid": 17,
    "nom": "Pression",
    "description": "Le Pokémon exerce une pression sur le Pokémon adverse, ce qui lui fait utiliser deux fois plus de PP."
  },
  {
    "uuid": 18,
    "nom": "Absorb Volt",
    "description": "Le Pokémon absorbe les attaques de type Électrique pour augmenter son Attaque Spéciale."
  },
  {
    "uuid": 19,
    "nom": "Absorb Eau",
    "description": "Le Pokémon absorbe les attaques de type Eau pour restaurer ses PV."
  },
  {
    "uuid": 20,
    "nom": "Impassible",
    "description": "Augmente la Vitesse chaque fois que le Pokémon est apeuré."
  },
  {
    "uuid": 21,
    "nom": "Attention",
    "description": "Empêche le Pokémon d'être apeuré."
  },
  {
    "uuid": 22,
    "nom": "Point Poison",
    "description": "Peut empoisonner l'attaquant s'il utilise une attaque directe."
  },
  {
    "uuid": 23,
    "nom": "Illusion",
    "description": "Prend l'apparence du dernier Pokémon de l'équipe."
  },
  {
    "uuid": 24,
    "nom": "Cœur de Coq",
    "description": "Protège le Pokémon contre les baisses de Défense."
  },
  {
    "uuid": 25,
    "nom": "Corps Ardent",
    "description": "Peut brûler l'attaquant s'il utilise une attaque directe."
  },
  {
    "uuid": 26,
    "nom": "Levitate",
    "description": "Immunise le Pokémon contre les attaques de type Sol."
  },
  {
    "uuid": 27,
    "nom": "Fuite",
    "description": "Permet au Pokémon de fuir un combat contre un Pokémon sauvage."
  },
  {
    "uuid": 28,
    "nom": "Séquelle",
    "description": "Inflige des dégâts à l'attaquant s'il met K.O. le Pokémon avec une attaque directe."
  },
  {
    "uuid": 29,
    "nom": "Brasier",
    "description": "Quand les PV du Pokémon tombent en dessous d'un tiers de leur maximum, la puissance de ses attaques de type Feu augmente."
  },
  {
    "uuid": 30,
    "nom": "Annule Garde",
    "description": "Les attaques du Pokémon et celles de l'adversaire touchent à coup sûr."
  },
  {
    "uuid": 31,
    "nom": "Préscience",
    "description": "Permet de connaître la capacité la plus puissante de l'adversaire."
  },
  {
    "uuid": 32,
    "nom": "Fuite",
    "description": "Permet de fuir n'importe quel Pokémon sauvage."
  },
  {
    "uuid": 33,
    "nom": "SWARM",
    "description": "Augmente la puissance des capacités de type Bug du Pokémon quand il a perdu une certainité quantité de PV."
  },
  {
    "uuid": 34,
    "nom": "TERAVOLT",
    "description": "Les capacités du Pokémon ignorent les effets bénéfiques sur la Défense de la cible."
  },
  {
    "uuid": 35,
    "nom": "Isograisse",
    "description": "Réduit les dégâts reçus des attaques de type Feu et Glace."
  },
  {
    "uuid": 36,
    "nom": "Tête de Roc",
    "description": "Empêche le Pokémon de subir des dégâts de recul."
  },
  {
    "uuid": 37,
    "nom": "Corps Sain",
    "description": "Protège le Pokémon contre les baisses de stats."
  },
  {
    "uuid": 38,
    "nom": "Mauvais Rêve",
    "description": "Inflige des dégâts aux Pokémon adverses endormis à la fin de chaque tour."
  },
  {
    "uuid": 39,
    "nom": "Air Lock",
    "description": "Neutralise les effets du climat pendant le combat."
  }


















]

export default  talentEffetsJson
