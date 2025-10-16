/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SPOTIFY_EMBED_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
