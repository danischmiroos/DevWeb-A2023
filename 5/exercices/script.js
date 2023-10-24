/*
Interactions, fonctions et événements

Exercices sur les fonctions:

1. Créez une fonction nommée `helloWorld` qui écrit "Hello world !" dans la console.

*/

console.log('Hello, World!')

/*

2. Créez une fonction nommée `doubler` qui prend un argument, que vous pouvez par exemple appeler `valeur`, et qui retourne la valeur entrée en argument additionnée à elle-même. 

Résultats attendus :

doubler(5); // 10
doubler(30); // 60
doubler('1'); // "11"
doubler('Salut !'); // "Salut !Salut !"

*/

function doubler(nombre1) {
    return nombre1 + nombre1
}

console.log(doubler(5))
console.log(doubler(30))
console.log(doubler('1'))
console.log(doubler('Salut !'))

/*

3. Créez une fonction nommée `doublerChiffre` qui prend un argument, que vous pouvez par exemple appeler `chiffre`, et qui retourne le double de la valeur entrée. 

Résultat attendus :

doublerChiffre(5); // 10
doublerChiffre(10); // 20
doublerChiffre('Pas un chiffre'); // NaN (qui veut littéralement dire "Not a Number")

*/

function doublerChiffre(nombre1) {
    return nombre1 *2
}

console.log(doublerChiffre(5))
console.log(doublerChiffre(10))
console.log(doublerChiffre('Pas un nombre'))

/*

4. Créez une fonction nommée `sommeDeuxValeurs` qui prend deux arguments, que vous pouvez nommer par exemple `valeur1` et `valeur2`, et qui retourne la somme des deux valeurs. 

Résultats attendus :

sommeDeuxValeurs(5, 10); // 15
sommeDeuxValeurs(doubler(5), 20); // 30
sommeDeuxValeurs('Salut ', 'ça va ?'); // "Salut ça va ?"

*/

function sommeDeuxValeurs(valeur1, valeur2) {
    return valeur1 + valeur2
}

console.log(sommeDeuxValeurs(5, 10))
console.log(sommeDeuxValeurs(doubler(5), 20))
console.log(sommeDeuxValeurs('Salut ', 'ça va?'))

/*

5. Créer une fonction `sommerTroisNombres` qui prend 3 nombres comme paramètres et retourne leur somme dans la console.

*/

function sommerTroisNombres(valeur1, valeur2, valeur3) {
    return valeur1 + valeur2 + valeur3
}

console.log(sommerTroisNombres(1, 2, 3))
console.log(sommerTroisNombres(123, 456, 789))
console.log(sommerTroisNombres('Math','émat','iques'))

/*

6. Créez une variable `chiffre` qui vaut `1` ainsi qu'une fonction `ajouterUn` qui va ajouter 1 à `chiffre`.

Résultat attendu:

let chiffre = 1;

ajouterUn();

// Si on affiche "chiffre" maintenant...
console.log(chiffre); // 2


*/

let chiffre = 1;

chiffre = chiffre + 1;

console.log(chiffre)

/*

7. Créez une fonction `derniereLettre` qui prend un argument, que vous pouvez par exemple appeler `chaine`, qui retourne la dernière lettre d'une chaîne de caractère. 

Résultat attendu :

derniereLettre('Salut !'); // "!"
derniereLettre("Mais c'est génial ce truc, dis donc"); // "c"
derniereLettre('a'); // "a"

*/

function derniereLettre(chaine) {
    return chaine
}

console.log(derniereLettre('asdf'))

/*

8. Créez une fonction `quadrupler` qui utiliser la fonction `doubler` créée plus haut et qui retourne le quadruple de la valeur donnée en arguent.

Résultats attendus :

quadrupler(5); // 20
quadrupler(30); // 120
quadrupler('1'); // "1111"
quadrupler('Salut !'); // "Salut !Salut !Salut !Salut !"

*/

function quadrupler(chiffre1) {
    return chiffre1 + chiffre1 + chiffre1 + chiffre1
}

console.log(quadrupler(5))
console.log(quadrupler(30))
console.log(quadrupler('1'))
console.log(quadrupler('Salut !'))

/*

Appeler des fonctions:

8. Appelez la fonction crée en (1.).

*/

console.log('Hello, World!')

/*

9. Appelez la fonction crée en (5.).

*/

console.log(sommerTroisNombres(123, 456, 789))

/*

10. Créez une variable nommée "resultat" et affectez lui la valeur de retour de la fonction `doubler` du point (2.). Affichez "resultat" dans la console.

*/

let resultat;
resultat = doubler
console.log(resultat(12))

/*

Quelles différences notez-vous entre ces trois fonctions?

Événements et interactions:

Création de bouton : 

Depuis index.html:

11. Dans le fichier "index.html", créez un bouton à l'aide de la balise <input> (voir la doc concernant les balises <button> et <input type="button">).

12. Donnez un texte à ce bouton grâce à l'attribut "value".

13. Utilisez l'attribut "onclick" pour déclencher une alerte dans votre navigateur (Une alerte peut être déclenchée grâce à la fonction alert("un texte..."), essayez!) 

Depuis script.js:

14. Dans le fichier "script.js", créez un bouton avec createElement('input').

15. Attribuez du texte à ce bouton (en utilisant setAttribute par exemple).

16. À l'aide de addEventListener(), faites en sorte que ce bouton déclenche la fonction (1.) lorsqu'on clique dessus. 

Interactions:

17. En Javascript, créez un apragraphe et donnez lui un texte.

18. Rendez ce paragraphe clickable en utilisant addEventListener() (vous pouvez lui attribuer la fonction de votre choix).
*/

