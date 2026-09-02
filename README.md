# le-conseilpatrimoine.fr — documentation du site

Site vitrine de L&E Conseil Finance et Patrimoine. Ce document explique comment le site fonctionne, comment le modifier, et comment le maintenir — sans dépendre d'un outil ou d'une personne en particulier.

## Ce que c'est (et ce que ce n'est pas)

- **Un site 100 % statique** : uniquement du HTML, CSS et JavaScript. Pas de WordPress, pas de base de données, pas de PHP, pas d'étape de build (npm, webpack...).
- Chaque page est un fichier `.html` autonome et lisible. Ce que vous voyez dans le fichier est exactement ce qui est envoyé au navigateur.
- Aucune dépendance externe à installer pour le modifier : un simple éditeur de texte suffit.

**Pourquoi c'est important :** un site statique a une surface d'attaque très réduite (pas de connexion admin, pas de plugin, pas de base de données à pirater) et n'importe quel développeur web — ou n'importe quelle IA, y compris une future version de Claude — peut l'ouvrir et comprendre immédiatement ce qui se passe, sans formation particulière.

## Où tout vit

- **Code source** : https://github.com/GuillaumeBoutin/conseilpatrimoine — ce dépôt est sous le compte GitHub personnel de Guillaume Boutin, pas sous un compte tiers. Tout l'historique des modifications (qui a changé quoi, et quand) y est conservé indéfiniment.
- **Hébergement** : GitHub Pages, gratuit, directement relié au dépôt ci-dessus. Toute modification poussée sur la branche `main` est mise en ligne automatiquement en 1 à 2 minutes.
- **Nom de domaine** : le-conseilpatrimoine.fr, configuré via le fichier `CNAME` à la racine du dépôt + les enregistrements DNS chez le registrar du domaine (à gérer séparément de GitHub).
- **HTTPS** : géré automatiquement par GitHub Pages, aucune action requise.

## Structure du dépôt

```
/                              accueil (index.html)
vos-objectifs/                 page "Investisseurs privés"
professionnels-dirigeants/     page "Dirigeants"
entreprises/                   page "Entreprises"
professions-liberales/         page "Professions libérales"
cabinet/                       équipe, agréments, méthode
guides/                        centre de connaissances (articles), organisé par public puis par thème
contact/, mentions-legales/, politique-de-confidentialite/
assets/
  css/style.css                 toute la feuille de style du site
  js/main.js, consent.js        menu mobile, FAQ accordéon, bandeau cookies
  img/                          photos, logos, agréments (+ versions .webp)
CNAME                          nom de domaine personnalisé
404.html                       page d'erreur (redirige vers l'accueil)
```

Chaque page reprend la même en-tête/pied de page ; il n'y a pas de composant partagé automatiquement — modifier le header partout demande de répéter le changement sur chaque fichier (des scripts ponctuels ont servi à ça pour les modifications en masse, voir historique Git).

## Faire une modification

1. **Texte, lien, image** : ouvrir le fichier `.html` concerné, éditer directement, enregistrer.
2. **Image** : déposer le nouveau fichier dans `assets/img/`, mettre à jour le `src="..."` dans le HTML.
3. **Style (CSS)** : modifier `assets/css/style.css`, puis **augmenter le numéro de version** dans `?v=NN` (visible dans chaque page, ex. `style.css?v=15` → `?v=16`) — sans ça, certains navigateurs continuent d'afficher l'ancienne feuille de style en cache.
4. **Mettre en ligne** :
   ```
   git add -A
   git commit -m "Description du changement"
   git push origin main
   ```
   Le site est à jour en 1-2 minutes. Pas de build, pas de déploiement manuel.

**Édition sans rien installer** : GitHub permet d'éditer un fichier directement depuis le navigateur (bouton crayon sur la page du fichier sur github.com) et de le committer depuis là — utile pour un changement ponctuel sans avoir Git en local.

## Prévisualiser en local avant de publier

Un simple serveur statique suffit (aucune dépendance à installer). Sous Windows, PowerShell :
```powershell
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()
# puis servir les fichiers du dossier — voir un exemple complet dans l'historique de développement de ce site
```
Ou plus simplement, avec Python installé : `python -m http.server 8080` depuis la racine du dépôt, puis ouvrir `http://localhost:8080/`.

## Sécurité — ce qui protège réellement le site

Un site statique GitHub Pages n'a pas de connexion "admin" à pirater. Le risque réel se situe sur les comptes qui permettent de le modifier :

1. **Activer la double authentification (2FA)** sur :
   - le compte GitHub (github.com/settings/security)
   - le compte de messagerie utilisé pour ce GitHub (souvent le point d'entrée le plus faible)
   - le compte chez le registrar du nom de domaine le-conseilpatrimoine.fr
2. **Ne jamais partager ces identifiants par email en clair** — utiliser un gestionnaire de mots de passe.
3. **Limiter les accès** au dépôt GitHub aux seules personnes qui en ont réellement besoin (Paramètres → Collaborators sur github.com/GuillaumeBoutin/conseilpatrimoine).
4. Le dépôt étant public ou privé selon votre choix, un dépôt **privé** évite que le code source soit visible par n'importe qui (le site reste public, seul le code source l'est ou non).

## Si votre interlocuteur habituel (Claude, ou toute autre personne) n'est plus disponible

Rien ici n'est verrouillé à un outil ou une personne :

- Le code est un **dépôt Git standard sur GitHub**, sous votre propre compte. Il continue d'exister, d'être hébergé et de fonctionner indépendamment de Claude, de Claude Code, ou de qui que ce soit d'autre.
- N'importe quel développeur web freelance ou agence peut reprendre ce dépôt en quelques minutes : c'est du HTML/CSS/JS standard, pas un framework propriétaire.
- Une nouvelle conversation Claude (aujourd'hui ou dans plusieurs années) peut également reprendre ce projet à froid en lisant ce fichier et l'historique Git — aucune information indispensable n'est "dans la tête" d'une session en particulier.
- Les deux documents de stratégie produits (audit SEO/IA et feuille de route éditoriale) sont publiés comme Artifacts sur votre compte claude.ai — ils restent accessibles depuis ce compte indépendamment de cette conversation. Pensez à en sauvegarder une copie (export PDF ou capture) si vous voulez une trace totalement indépendante de claude.ai.

## Contacts / comptes à connaître

- GitHub : github.com/GuillaumeBoutin (compte personnel)
- Hébergement : GitHub Pages (inclus, gratuit, aucun compte séparé)
- Domaine : le-conseilpatrimoine.fr — registrar à identifier si besoin (facture d'achat du domaine)
- Google Business Profile : fiche "L&E Conseil Finance Patrimoine" à Olivet
