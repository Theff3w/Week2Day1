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

# Exercice 2.1 : des petites balles en Objet

Vous devez dans un premier temps créer une Classe Ball qui représente une balle.

Sur le même principe que l'exercice précédent, vous devez afficher cette balle et la faire se déplacer.
Et donc créer des méthodes dans cette classe (display, move).

Maintenant que nous avons une Classe, nous pouvons créer plusieurs balles.

Essayer d'en créer plusieurs, puis d'appeler chacune leur méthode `move()` pour les faire se déplacer.

## Gérer toutes nos balles

Créez un nouvel objet `Game`.

Vous allez pouvoir ajouter des balles à cet objet, donc créer une collection (une composition multiple).

A l'aide d'une propriété `balls` et d'une méthode `add(Ball ball)` vous allez ajouter des balles à cette collection.

Une méthode `start()` permet ensuite de parcourir la collection de balles et d'appeler la méthode `move()` de chaque balle.

Vous pouvez donc maintenant ajouter autant de balles que vous le souhaitez, l'objet Game gère ses balles.

## Bonus : gérer la collision

Mettez en oeuvre la collision d'une balle avec les murs, puis de chaque balle entre elle.

https://developer.mozilla.org/fr/docs/Games/Techniques/2D_collision_detection