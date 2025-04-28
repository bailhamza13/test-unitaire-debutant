# Test Unitaire Débutant

Ce projet est une introduction aux tests unitaires avec Jest.

## Table des matières
1. [Installation et Configuration](#installation-et-configuration)
2. [Structure du Projet](#structure-du-projet)
3. [Tests Unitaires](#tests-unitaires)
4. [Captures d'écran](#captures-décran)

## Installation et Configuration

### 1. Initialisation du projet Node.js
```bash
npm init -y
```
Cette commande crée un fichier `package.json` avec les configurations par défaut.

### 2. Installation de Jest
```bash
npm install --save-dev jest
```
Jest est installé comme dépendance de développement.

### 3. Configuration de Jest
Le fichier `package.json` est modifié pour utiliser Jest comme outil de test :
```json
{
  "scripts": {
    "test": "jest"
  }
}
```

## Structure du Projet

```
test-unitaire-debutant/
├── assets/                  # Dossier contenant les captures d'écran
│   ├── lancemen-test.PNG    # Capture du lancement des tests
│   ├── echec-test.PNG       # Capture des tests en échec
│   └── correction.PNG       # Capture des tests corrigés
├── math.js                  # Fichier contenant la fonction d'addition
├── math.test.js            # Fichier contenant les tests unitaires
├── package.json            # Configuration du projet
└── README.md               # Documentation du projet
```

## Tests Unitaires

### 1. Fonction d'Addition
Le fichier `math.js` contient la fonction d'addition :
```javascript
function addition(a, b) {
  return a + b;
}
```

### 2. Tests de la Fonction
Le fichier `math.test.js` contient les tests unitaires :
```javascript
const { addition } = require('./math');

test('addition de 1 + 2 égale 3', () => {
  expect(addition(1, 2)).toBe(3);
});

test('addition de -1 + 1 égale 0', () => {
  expect(addition(-1, 1)).toBe(0);
});

test('addition de 5.5 + 4.5 égale 10', () => {
  expect(addition(5.5, 4.5)).toBe(10);
});
```

### 3. Exécution des Tests
```bash
npm test
```
Cette commande exécute tous les tests définis dans le projet.

## Captures d'écran

- [Lancement des tests](assets/lancemen-test.PNG) : Montre l'exécution initiale des tests
- [Échec des tests](assets/echec-test.PNG) : Montre les tests en échec après modification volontaire du code
- [Correction des tests](assets/correction.PNG) : Montre les tests réussis après correction du code

