# Tech stack y convenciones

_Cómo está construido el proyecto y las reglas que todo el código debe respetar. Es la referencia técnica que ningún plan de feature debería contradecir._

## Tecnologías

- **Lenguaje:** TypeScript (modo estricto).
- **Framework / runtime:** React + Vite. Sin framework de servidor (SPA pura).
- **Estilos:** Tailwind CSS.
- **Animaciones:** Framer Motion (ruleta, transiciones, confeti, reveal de género/canciones).
- **Base de datos:** no aplica en esta etapa. Las canciones viven en un archivo JSON local versionado en el repo.
- **Tests:** no hay suite formal en el MVP. Validación manual contra los criterios de aceptación de cada feature.
- **Despliegue:** Vercel. TypeScript se compila a JS plano en el build (`vite build`); no afecta ni depende del proceso de deploy.

## Archivos / módulos clave

_Mapa orientativo: el agente puede ajustar nombres exactos, pero debe respetar esta separación de responsabilidades._

- `src/data/generos.json` — fuente de datos: géneros y canciones curadas.
- `src/components/Roulette/` — componente de la ruleta y su animación de sorteo.
- `src/components/ChallengeTimer/` — cuenta regresiva de 15s + botón de aceptar + revelado de penitencia.
- `src/components/AboutSection/` — sección "Sobre nosotros" (LIER).
- `src/components/CollaborateSection/` — sección de invitación a colaborar (Bahía Blanca / GitHub).
- `src/data/penitencias.json` (o similar) — lista de penitencias genéricas para cuando no se acepta el desafío a tiempo.

## Comandos

- `npm run dev` — arranca el entorno local.
- `npm run build` — compila para producción.
- `npm run lint` — revisa el estilo (configuración a definir por el agente según buenas prácticas de React + TS).

## Modelo de datos / dominio

- **Género** — `{ nombre: string, canciones: Cancion[] }`.
- **Canción** — `{ titulo: string, artista: string }`.
- El género **"Baladas Románticas"** es un comodín: no tiene restricción de nacionalidad de los artistas, a diferencia del resto de los géneros que sí son específicamente argentinos.
- No hay estado persistente entre sesiones: cada vez que se recarga la web, el historial de géneros salidos en la noche se reinicia (vive en memoria/estado de React, no en `localStorage` ni backend).

## Convenciones

- Convenciones de nombres, estructura de carpetas y patrones de componentes: **a criterio del agente**, siguiendo las buenas prácticas de React + TypeScript indicadas en sus skills/guías internas.
- Idioma de todo el contenido visible (textos, mensajes, penitencias, copys): **español argentino**, con tono informal y con alguna referencia/modismo argentino, especialmente en los mensajes del timer vencido.
- Estilo visual (paleta de colores, tipografía, layout): **a criterio del agente**, siguiendo sus guías de diseño, apuntando a una estética de fiesta/karaoke.

## Estilo visual

- Tema general: energético, tipo fiesta/boliche, apto para mostrarse en una pantalla grande (TV) durante la fiesta.
- Paleta, tipografías y breakpoints responsive: a definir por el agente.

## Límites duros

- No agregar backend ni base de datos en esta etapa (MVP). Las canciones se actualizan editando el JSON a mano.
- No instalar dependencias de pago.
- No subir archivos `.env` al repo si en el futuro se incorpora alguna API key (ej. Spotify).
- No implementar sistema de registro/login de usuarios.
- No dar a entender en ningún texto que colaborar en el proyecto implica una relación laboral remunerada.