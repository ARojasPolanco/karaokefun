# 001 · Ruleta de Karaoke Argento (MVP)

**Estado:** propuesta

_Feature única que combina qué hace, por qué, cómo se implementa y las tareas, siguiendo la variante simplificada del template mientras el proyecto es chico. Se separará en `spec.md` / `plan.md` / `tasks.md` cuando la feature crezca o varias personas trabajen en paralelo sobre ella._

---

## Qué hace

La persona entra a la landing y ve un botón para "girar la ruleta". Al tocarlo:

1. Una ruleta visual gira (animación tipo casino, con sonido opcional de tambor) y se detiene en un género musical argentino, elegido al azar.
2. Se revela el género junto con la lista de canciones conocidas de ese estilo (título + artista).
3. Arranca automáticamente una cuenta regresiva de **15 segundos** con un botón grande de "Acepto el desafío".
4. Si la persona toca el botón a tiempo → queda registrado en pantalla como aceptado (ej: un check o mensaje de aliento).
5. Si el tiempo se agota sin tocar el botón → la web revela automáticamente una **penitencia** graciosa, con un mensaje bien argentino (ej: tono de "che, te la buscaste").
6. La web también expone una sección **"Sobre nosotros"** (LIER) y una sección **"Colaborá"** invitando a programadores de Bahía Blanca a sumarse al repo open source.

## Por qué

Las fiestas de karaoke suelen ser aburridas porque la gente solo canta géneros donde se siente segura. Forzar (de forma lúdica) a salir de la zona de confort, con presión de tiempo y consecuencia social si no se anima, hace la fiesta más divertida y pareja para todos.

## Datos: géneros y canciones

_Set curado inicial. Se ampliará más adelante con sugerencias de la comunidad recibidas por Instagram (ver sección "Colaborá / Sugerencias")._

### Rock nacional
- Como Alí — Los Piojos
- Costumbres Argentinas — Los Abuelos de la Nada
- Yo no me quiero casar, ¿y usted? — Turf
- Verano del 92 — Los Piojos

### Cumbia de antes
- Si te vas — La Nueva Luna
- ¿A decirme qué? — Los Lirios de Santa Fe
- Se parece más a ti — Jambao
- El bombón asesino — Los Palmeras
- Yo me enamoré — Amar Azul

### Cuarteto
- Amor clasificado — Rodrigo Bueno
- Mujeres que hacen mal — Gary
- Adicto a ti — Walter Olmos
- La morocha — Luck Ra
- El federal — La Mona Giménez
- Hola perdida — Luck Ra

### Cumbia actual
- Amor de vago — La T y la M
- Costumbres — Damas Gratis
- Debió ser así — K Personajes
- Adicto a tu piel — La Contra
- Otro día más — K Personajes

### Folclore
- La ley y la trampa — Chaqueño Palavecino
- Eterno amor — Los Manseros Santiagueños
- La noche sin ti — Los Huayra
- Amor salvaje — Chaqueño Palavecino
- Zamba para olvidarte — Daniel Toro

### Baladas Románticas
_Género comodín: sin restricción de nacionalidad de los artistas, a diferencia del resto._
- Entre la tierra y el cielo — Los Nocheros
- Qué lloro — Sin Bandera
- Abrázame muy fuerte — Juan Gabriel
- Dejaría todo — Chayanne
- Rosas — La Oreja de Van Gogh
- Tú de qué vas — Franco de Vita

## Mecánica del timer y penitencias

- Duración: **15 segundos**, arrancan apenas se revela el género/canciones.
- Botón grande y visible: "Acepto el desafío 🎤" (texto de ejemplo, el agente puede ajustar copy).
- Si se agota el tiempo sin aceptar: mostrar automáticamente una penitencia con tono argentino y divertido. El agente debe generar una lista genérica de penitencias livianas y aptas para todo público (ej: bailar unos segundos, sacarse una selfie graciosa, hacer de coro en la próxima canción de otro, contar un chiste malo, etc.). No incluir penitencias vinculadas a consumo de alcohol como única opción — pueden existir, pero no deben ser la mayoría ni las únicas disponibles.
- El mensaje de "se te acabó el tiempo" debe sentirse con identidad argentina (modismos, tono picante pero amigable).

## Sección "Sobre nosotros"

- Presenta a **LIER** como la startup creadora del proyecto.
- Logo de LIER: fondo oscuro (#1a1a1a aprox.), texto "LIER" en blanco/beige, tipografía condensada en mayúsculas (usar como referencia de identidad visual, no reproducir el archivo de imagen original pixel por pixel salvo que se suba el asset directamente al proyecto).
- Texto descriptivo de LIER (usar tal cual, traducido a formato web): *"Creamos soluciones tecnológicas aplicando lógica e ingeniería, transformando ideas en aplicaciones reales y efectivas."*
- Mencionar que este proyecto es un ejercicio de código abierto impulsado por LIER.

## Sección "Colaborá"

- CTA dirigido a programadores de Bahía Blanca, con un tono genérico tipo: *"¿Sos programador/a de Bahía Blanca? Colaborá con este proyecto de código abierto y sumá experiencia."*
- Debe dejar explícitamente claro que **no es una oferta de empleo remunerado**.
- Link al repositorio de GitHub (placeholder `<URL_REPO_GITHUB>` hasta que exista).

## Sección "Sugerencias de canciones"

- Texto invitando a la gente a recomendar canciones para sumar a futuras versiones.
- Canal de contacto: Instagram de LIER — placeholder `<INSTAGRAM_LIER>` (el dato real lo completa el dueño del proyecto antes de publicar).
- Aclarar que las sugerencias se revisan y suman manualmente por ahora (no hay formulario ni base de datos en este MVP).

## Criterios de aceptación

- [ ] Al presionar "girar la ruleta", se anima visualmente y se detiene en un género elegido al azar.
- [ ] Se muestran todas las canciones (título + artista) del género sorteado.
- [ ] Al revelarse el género arranca automáticamente un timer visible de 15 segundos.
- [ ] Existe un botón para aceptar el desafío que detiene el timer y muestra una confirmación.
- [ ] Si el timer llega a 0 sin haberse aceptado, se muestra automáticamente una penitencia con mensaje argentino, sin necesitar que nadie la dispare manualmente.
- [ ] Las penitencias se eligen al azar de un set variado (no siempre la misma).
- [ ] Existe una sección "Sobre nosotros" visible con el texto y la identidad de LIER.
- [ ] Existe una sección "Colaborá" con el CTA para programadores de Bahía Blanca y el link al repo (o placeholder).
- [ ] Existe una sección con el canal de contacto (placeholder de Instagram) para sugerir canciones.
- [ ] El sitio es responsive: usable tanto en celular (para tirar la ruleta) como en pantalla grande/TV (para mostrar el resultado en la fiesta).
- [ ] Todo el copy está en español argentino, con tono informal.
- [ ] El género "Baladas Románticas" funciona igual que el resto de la ruleta, sin tratamiento especial en la mecánica (solo se diferencia en el dato de que no es 100% argentino).

## Fuera de alcance

- Base de datos y backend real (queda en backlog, se hará junto a colaboradores).
- Formulario de sugerencias dentro de la web (por ahora es 100% vía Instagram/redes, manual).
- Integración con Spotify, modo online con QR, ranking de la noche, AdSense/GA4 — todo en `constitution/roadmap.md`, backlog.
- Detección automática de si la persona efectivamente cantó o no — se resuelve con el timer + botón, no con reconocimiento de audio/video.

---

## Enfoque técnico (plan)

Landing SPA en React + Vite + TypeScript, sin backend. Todo el estado (género actual, historial de la noche, estado del timer/penitencia) vive en memoria de React vía hooks (`useState`/`useReducer`), sin persistencia entre recargas.

### Implementación sugerida

1. Definir `src/data/generos.json` con la estructura `{ nombre, canciones: [{ titulo, artista }] }` para los 6 géneros listados arriba.
2. Definir `src/data/penitencias.json` (o array en TS) con el set de penitencias genéricas.
3. Construir `Roulette` — componente con la animación de sorteo (Framer Motion) que selecciona un género al azar del JSON.
4. Construir `GenreReveal` — muestra el género sorteado + lista de canciones.
5. Construir `ChallengeTimer` — cuenta regresiva de 15s, botón de aceptar, y lógica de reveal de penitencia al vencer el tiempo.
6. Construir `AboutSection` — contenido de LIER.
7. Construir `CollaborateSection` — CTA de colaboración + link a GitHub (placeholder).
8. Construir sección de sugerencias con el placeholder de Instagram.
9. Ensamblar todo en la landing principal, cuidando el diseño responsive (mobile para tirar la ruleta, pantalla grande para mostrar el resultado).

### Decisiones

- **JSON estático en vez de DB** — coherente con el scope de MVP definido en `constitution/tech-stack.md`; evita complejidad innecesaria para una primera versión.
- **Timer automático en vez de votación grupal** — no depende de que un tercero "acuse" a la persona de no cantar; es más simple de implementar (sin backend) y genera la misma tensión lúdica.
- **Sin `localStorage`** — se descarta para mantener el MVP simple; el historial de la noche puede perderse al recargar, lo cual es aceptable en esta etapa.

### Riesgos

- **Repetición de géneros en una noche corta** — con solo 6 géneros, puede salir el mismo dos veces seguidas y sentirse repetitivo. Mitigación: considerar que la ruleta no repita el último género salido (a definir con el agente si se implementa en el MVP o se deja para después).
- **Uso en pantalla grande (TV)** — el diseño debe verse bien proyectado a distancia, no solo en celular. Mitigación: priorizar tipografías grandes y alto contraste en el género/canciones revelados.
- **Tono de las penitencias** — deben ser divertidas sin resultar ofensivas ni excluyentes para el rango etario amplio (15-60 años). Mitigación: revisar manualmente la lista generada por el agente antes de publicar.

---

## Tareas

- [ ] Configurar proyecto base (Vite + React + TypeScript + Tailwind).
- [ ] Crear `generos.json` con los 6 géneros y sus canciones.
- [ ] Crear set de penitencias.
- [ ] Implementar componente de ruleta con animación y sorteo aleatorio.
- [ ] Implementar reveal de género + lista de canciones.
- [ ] Implementar timer de 15s + botón de aceptar desafío.
- [ ] Implementar reveal automático de penitencia al vencer el timer.
- [ ] Implementar sección "Sobre nosotros" (LIER).
- [ ] Implementar sección "Colaborá" con CTA y link a GitHub (placeholder).
- [ ] Implementar sección de sugerencias de canciones (placeholder de Instagram).
- [ ] Verificar diseño responsive (mobile + pantalla grande).
- [ ] Validar contra los criterios de aceptación de esta feature.
- [ ] Deploy en Vercel.
- [ ] Mover esta feature a "Hecho" en `../../constitution/roadmap.md`.