# Roadmap

_Orden y estado de las features. Es la vista de "qué hay hecho, qué toca ahora y qué viene". Cada entrada apunta a su carpeta en `features/`._

## Hecho ✅

1. **001 · Ruleta de Karaoke Argento (MVP)** — landing con ruleta de géneros musicales argentinos, desafío con timer de 30s, secciones "Sobre nosotros" (LIER), Colaborá, Colaboradores y Sugerencias.

## Siguiente 🔜

_Sin features asignadas actualmente. Revisar backlog._

## Backlog / ideas 💡

- **Base de datos comunitaria de canciones** — migrar de JSON estático a una DB real (a definir con los programadores de Bahía Blanca que se sumen) para poder incorporar canciones sugeridas por la comunidad sin editar código a mano.
- **Integración con preview de Spotify** — escuchar 30 segundos de la canción antes de cantarla.
- **Modo online con QR** — cada invitado tira su propia ruleta desde el celular escaneando un QR, sin pelearse por la pantalla principal.
- **Ranking / puntaje de la noche** — sistema de votos del público (aplausos/estrellas) para armar un leaderboard al final de la fiesta.
- **Google AdSense + Google Analytics 4** — monetización y métricas de uso, una vez que el sitio tenga tráfico real.
- **README de contribución técnico completo** — se escribe después del MVP, documentando la arquitectura real (no la planeada) para que programadores externos puedan sumarse con claridad.

> Cada feature nueva se crea como `features/NNN-nombre-feature/` con su archivo de feature (o `spec.md` / `plan.md` / `tasks.md` separados si la feature crece) antes de tocar código.