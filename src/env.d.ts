/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SPOTIFY_EMBED_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
