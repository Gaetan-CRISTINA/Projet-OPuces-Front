# Installation Projet O'Puces Front & Back

## Etape 0: Démarrage Serveur Client
    1- je vais sur:
    https://kourou.oclock.io/ressources/vm-cloud/

    2- je clique sur Démarrer la VM (patience environ 2minutes)

    3- je copie la commande ssh pour se connecter:
    ssh student@prenom-nom-server.eddi.cloud

    4- dans le terminal de commande je colle la commande ssh

    5- je suis loggé quand "student@prenom-nom-server" s'affiche

    6- avant de commencer il faut se mettre dans le dossier serveur d'Apache
    cd /var/www/html

## Etape 1: Cloner les deux repos
    Normalement pas de problème pour git clone

## Etape 2: Installation du Back:
    1- Je vais dans mon dossier back
    cd /var/www/html/projet-O-Puces-back

    2- je me positionne sur la branch develop
    git checkout develop

    3- pour les tests on va faire une branch
    git checkout -b prod-votrePrenom

    4- je fais mon installation de wordpress (avec ou sans script)

    5- je peux donc via l'adresse de la machine me déplacer comme dans le localhost du téléporteur et accéder au back wordpress
## Etape 3: Installation du Front:
    1- je vais dans mon dossier front
    cd /var/www/html/projet-O-Puces-front

    2- je vais dans /opuces
    cd /opuces

    3- je me positionne sur la branch develop
    git checkout develop

    4- je fais ma branche test
    git checkout -b prod-votrePrenom

    5- je lance la production du dossier distant
    npm run build

    6- dans le localhost de la machine virtuelle je vois un fichier dist qui vient d'apparaître

    7- dans le terminal toujours, je vais déplacer mon dossier "dist"
    mv dist /var/www/html

    8- le dossier "dist" est maintenant à côté du repo front et du repo back

    9- si je veux dynamiser tout ça, c'est à dire que l'appli O'Puces se lance dés l'ouverture de l'url (http://prenom-nom-server.eddi.cloud):
    je me place dans disst
    cd /dist

    10- je vais sortir chaque élément du dossier, (toujours dans dist):
    mv index.html /var/www/html
    mv css /var/www/html
    mv favicon.ico/var/www/html
    mv img /var/www/html
    mv js /var/www/html
    mv media /var/www/html

    11- A partir de maintenant si je vais sur l'url :
    http://prenom-nom-server/eddi.cloud
    j'arrive directement sur O'Puces

## Oh Les copaines c'est Notre Projet!!!

    Pour rendre la VM publique et que l'url (http://prenom-nom-server/eddi.cloud) soit disponible à l'extérieur il faut ouvrir les ports.

    1- Dans https://kourou.oclock.io/ressources/vm-cloud/, une fois la VM démarrée, je clique sur "Rendre la VM publique"

    2- C'est ok, la vm est dispo depuis l'extérieur de l'école pour 2h!

    