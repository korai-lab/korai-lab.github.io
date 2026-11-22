# Koraï

Site statique de Koraï, laboratoire africain de recherche et développement en IA. GitHub Pages publie le contenu de la branche `main` à la racine du dépôt.

## Aperçu local

Ouvrir [`index.html`](index.html) directement dans un navigateur. La page [Applications](applications/index.html) contient les scénarios et les liens vers les sources des chiffres.

## Modifier un profil

Chaque membre dispose d’un dossier dans `membres/`. Le fichier `index.html` de ce dossier contient la biographie, les domaines de recherche et les liens.

Pour changer un portrait existant, remplacer `photo.jpg` dans le dossier du membre. La fiche et l’annuaire utilisent le même fichier. Pour ajouter un portrait à une nouvelle fiche, remplacer le bloc d’initiales par la balise indiquée dans le modèle, puis ajouter la même image à la carte de l’annuaire avec le chemin relatif au dossier du membre.

## Ajouter un membre

1. Copier `membres/modele/` vers `membres/prenom-nom/`. Utiliser des minuscules sans accents ni espaces pour le nom du dossier.
2. Indiquer l’institution sous le nom, préciser le rôle dans la biographie, puis ajouter les domaines de recherche et les liens professionnels. Enlever la mention « Modèle de profil » et, lors de la publication, la balise `noindex`.
3. Dans `membres/index.html`, dupliquer une carte de l’annuaire et actualiser son lien, les initiales, le nom et les domaines affichés.

Le profil est accessible à l’adresse `/membres/prenom-nom/`. En local, ouvrir directement le fichier `index.html` du dossier. Le modèle se trouve dans `membres/modele/index.html`.
