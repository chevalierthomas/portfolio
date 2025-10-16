# Thomas Chevalier — Portfolio

Portfolio bilingue moderne construit avec [Astro](https://astro.build/) et React pour présenter le profil de Thomas Chevalier.

## Démarrage

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:4321` par défaut.

## Configuration

- Placez la photo `thomas.png` (ou tout autre fichier) dans `public/` puis mettez à jour `profileImage` dans `src/data/site.ts`. Par défaut, un avatar vectoriel est affiché pour éviter d’inclure des fichiers binaires.
- Ajustez également `ogImage` dans `src/data/site.ts` si vous générez votre propre visuel de partage.
- `PUBLIC_SPOTIFY_EMBED_URL` : définissez cette variable d’environnement pour afficher le widget Spotify.
- Les contenus FR/EN sont centralisés dans `src/data/translations.ts` pour un ajout simple de nouvelles expériences ou projets.

## Scripts

- `npm run dev` : lance le serveur de développement.
- `npm run build` : génère le site statique optimisé pour la production.
- `npm run preview` : prévisualise le build de production.
