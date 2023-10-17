# Exercice 2 : une petite balle


En JS, lorsque le DOM est chargé, créer un nouvel objet du DOM que vous ajouter directement dans le body.
Tout doit être créé en JS ! Utilisez `createElement` et les attributs pour définir les propriétés.

Cet objet, une balise DIV, aura des styles en lignes associés pour qu'elle soit 

- d'une taille de 30 par 30 pixels
- en forme de cercle (donc un cercle de rayon 30px)
- une couleur de fond rouge
- positionnée au milieu de l'écran


Elle aura aussi un identifiant unique (un numéro).


Une fois cet objet créé dans le DOM, vous devez :

- déplacer cet objet vers la droite de 1px toutes 1/60 de secondes (réduire la vitesse si cela va trop vite)
- si la balle touche la droite de l'écran elle fait demi tour
- si elle touche le côté gauche idem
- bref... elle rebondit de droite à gauche

## Bonus

Gérer la direction et les rebonds haut et bas !
Du coup votre balle doit commencer à partir en diagonale.

## Réflexions

Nous voulons ajouter plusieurs balles qui ont le même comportement (mais placées à des coordonnées différentes). 

Sans coder, que pouvons nous envisager pour gérer ce comportement facilement et sans rajouter ou dupliquer du code ?
(données pour chaque balle, action en commun, ...)