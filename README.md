# 🎤 KaraokeFun

**Ruleta de Karaoke Argento** — Una web interactiva para fiestas de karaoke que elige al azar un género musical argentino y desafía a los invitados a cantar fuera de su zona de confort.

> Proyecto de código abierto impulsado por [LIER](https://instagram.com/lier.ar)

---

## ✨ Features

### ✅ Implementado
- **Ruleta de géneros** — Animación con sorteo aleatorio entre 6 estilos musicales argentinos (Rock Nacional, Cumbia, Cuarteto, Folclore, Baladas Románticas)
- **Desafío con timer** — 30 segundos para aceptar el reto de cantar
- **Penitencias** — Si no aceptás a tiempo, una penitencia argentina te espera
- **Sección LIER** — Identidad y filosofía de la startup
- **Sección Colaborá** — CTA para programadores de Bahía Blanca
- **Sugerencias** — Canal para recomendar canciones vía Instagram
- **Responsive** — Funciona en celular, tablet y pantalla grande

### 🚧 En desarrollo / Para colaborar

| Feature | Dificultad | Estado |
|---------|-----------|--------|
| 🔲 Página de colaboradores | 🔵 Principiante | Abierto |
| 🎵 Preview Spotify (30s) | 🟡 Intermedio | Abierto |
| 🗄️ Base de datos comunitaria | 🟠 Avanzado | Planificado |
| 📱 Modo online con QR | 🟡 Intermedio | Abierto |
| 🏆 Ranking / Puntaje | 🟡 Intermedio | Abierto |

---

## 🛠 Stack Técnico

| Tecnología | Uso |
|------------|-----|
| **TypeScript** | Lenguaje principal (modo estricto) |
| **React + Vite** | Framework y bundler |
| **Tailwind CSS v4** | Estilos |
| **Framer Motion** | Animaciones (ruleta, modales, transiciones) |
| ~~Backend~~ | No aplica en MVP (SPA pura) |
| ~~Base de datos~~ | No aplica en MVP (JSON local versionado) |
| **Vercel** | Despliegue automático |

---

## 🚀 Cómo empezar

```bash
# 1. Clonar el repo
git clone https://github.com/tu-usuario/karaokefun.git
cd karaokefun

# 2. Instalar dependencias
npm install

# 3. Iniciar entorno local
npm run dev

# 4. Build para producción
npm run build
```

---

## 🤝 Cómo Contribuir

### 👥 ¿Quién puede contribuir?

- **Cualquier persona** con ganas de aprender y sumar experiencia en un proyecto real
- **Programadores de Bahía Blanca** — público prioritario del proyecto
- Stack recomendado: React, TypeScript, Tailwind, Git

### 📋 Requisitos

1. Tener Git instalado
2. Conocimientos básicos de React y TypeScript (o ganas de aprender)
3. Leer las convenciones del proyecto

### 🌿 Convención de branches

Todas las branches deben empezar con `feature/`:

```
feature/nombre-corto-descriptivo
```

Ejemplos:
```
feature/pagina-colaboradores
feature/spotify-preview
feature/modo-qr
```

### 💬 Commits semánticos

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
tipo(alcance): descripción corta
```

| Tipo | Cuándo usarlo |
|------|---------------|
| `feat` | Nueva feature |
| `fix` | Corrección de bug |
| `style` | Cambios de estilo (CSS, diseño) |
| `refactor` | Cambio en código sin cambiar funcionalidad |
| `docs` | Documentación (README, comentarios) |
| `chore` | Configuración, dependencias, tooling |

Ejemplos:
```
feat(colaboradores): agregar sección de colaboradores con datos de perfil
fix(timer): corregir centrado del número en el círculo del timer
style(ruleta): ajustar colores de segmentos para mejor contraste
```

### 🔄 Proceso de Pull Request

```
main (producción) ← dev (integración) ← feature/mi-feature (tu trabajo)
```

1. Crear branch desde `dev`:
   ```bash
   git checkout -b feature/mi-feature dev
   ```
2. Hacer cambios con commits semánticos
3. Pushear:
   ```bash
   git push origin feature/mi-feature
   ```
4. Abrir Pull Request hacia `dev`
5. **No merges tu PR** — el maintainer revisa y mergea

> [!IMPORTANT]
> Los PRs solo los mergea el maintainer. Vos abrís el PR y alguien lo revisa.

### ✅ Checklist antes del PR

- [ ] Probás que la app funciona con `npm run build`
- [ ] Tus commits siguen el formato semántico
- [ ] No dejás código comentado ni `console.log`
- [ ] Si agregaste una feature nueva, actualizás la tabla en este README
- [ ] Agregaste tus datos a `src/data/colaboradores.json` si es tu primer PR

---

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── Roulette/              # Ruleta con animación
│   ├── ChallengeTimer/        # Modal con timer + penitencias
│   ├── AboutSection/          # Sección LIER
│   ├── CollaborateSection/    # CTA colaboración
│   ├── ContributorsSection/   # Galería de colaboradores ← NUEVO
│   └── SuggestionsSection/    # Canal de sugerencias
├── data/
│   ├── generos.json           # 6 géneros musicales 🎵
│   ├── penitencias.ts         # Penitencias argentinas 😈
│   └── colaboradores.json     # ← Editá ACÁ para sumarte
├── App.tsx                    # Layout principal
├── main.tsx                   # Entry point
└── index.css                  # Tailwind + colores custom
```

### Convenciones de código

- **Idioma**: Todo el contenido visible en español argentino
- **Nombres**: Componentes en PascalCase, archivos en kebab-case
- **Estilos**: Tailwind CSS, sin CSS modules ni archivos separados
- **Estado**: Hooks (useState/useReducer), sin librerías externas de estado

---

## 🧠 Features para Colaboradores

Cada feature vive en su rama `feature/*` y se trabaja de forma independiente. Elegí la que más te guste.

### 🔲 1. Página de Colaboradores

**Dificultad:** 🔵 Principiante — Ideal para el primer PR

**Stack:** React + TypeScript + Tailwind

**Qué hacer:**
- Crear una sección en la landing que lea `src/data/colaboradores.json`
- Mostrar una ficha por colaborador con: foto/avatar, nombre, stack, GitHub y LinkedIn
- Diseño tipo galería responsive (grid)

**Para sumarte:**
1. Editar `src/data/colaboradores.json`
2. Agregar tus datos
3. Abrir PR

**Bonus:** Agregar avatar automático con [DiceBear](https://www.dicebear.com/) según el nombre.

---

### 🎵 2. Preview Spotify (30s)

**Dificultad:** 🟡 Intermedio

**Stack:** React + TypeScript + Fetch API

**Qué hacer:**
- Agregar botón de reproducción ▶ al lado de cada canción
- Reproducir 30 segundos de preview (mock primero, API real después)
- Modificar el flujo: el preview puede reproducirse antes de que arranque el timer

**Nota:** Empezar con datos mock en `src/data/spotify-mock.ts`. La integración real requiere API Key de [Spotify Developer](https://developer.spotify.com/).

**Archivos a modificar:**
- `src/components/ChallengeTimer/ChallengeTimer.tsx`
- `src/data/` (nuevo archivo mock)

---

### 🗄️ 3. Base de Datos Comunitaria

**Dificultad:** 🟠 Avanzado — Requiere experiencia en backend

**Stack:** A definir (Supabase sugerido por ser serverless y gratuito)

**Qué hacer:**
- Migrar `generos.json` a una base de datos real
- Crear formulario de sugerencias de canciones
- Sistema de aprobación/revisión de sugerencias

> ⏳ **Postergado**: Se define cuando se sumen programadores/as de Bahía Blanca con experiencia en backend.

---

### 📱 4. Modo Online con QR

**Dificultad:** 🟡 Intermedio

**Stack:** React + QR + WebSocket (futuro)

**Qué hacer:**
- Pantalla principal genera un código QR con ID de sala
- Cada invitado escanea y controla la ruleta desde su celular
- Sincronización en tiempo real

**Para empezar:**
- Usar `qrcode.react` para generar QR
- Mock con localStorage para simular multi-dispositivo
- Colaboradores avanzados pueden implementar WebSocket con Socket.io

---

### 🏆 5. Ranking / Puntaje

**Dificultad:** 🟡 Intermedio

**Stack:** React + TypeScript + localStorage

**Qué hacer:**
- Después de cada presentación, mostrar modal de votación (⭐ 1 a 5 estrellas)
- Guardar puntajes en localStorage
- Mostrar ranking al final de la noche (leaderboard)
- Opción de reiniciar el ranking para una nueva noche

---

## 📄 Licencia

Este proyecto es de código abierto bajo licencia MIT.

---

## 🙌 Agradecimientos

A la comunidad de programadores de Bahía Blanca que se suman a aprender, enseñar y construir. Este proyecto es un espacio para ganar experiencia real en un entorno colaborativo.
