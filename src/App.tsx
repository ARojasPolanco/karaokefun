import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Roulette } from './components/Roulette/Roulette'
import { ChallengeTimer } from './components/ChallengeTimer/ChallengeTimer'
import { AboutSection } from './components/AboutSection/AboutSection'
import { CollaborateSection } from './components/CollaborateSection/CollaborateSection'
import { ContributorsSection } from './components/ContributorsSection/ContributorsSection'
import { SuggestionsSection } from './components/SuggestionsSection/SuggestionsSection'
import generos from './data/generos.json'

type Pantalla = 'ruleta' | 'timer' | 'resultado'

function App() {
  const [pantalla, setPantalla] = useState<Pantalla>('ruleta')
  const [generoSeleccionado, setGeneroSeleccionado] = useState<typeof generos[0] | null>(null)
  const [girando, setGirando] = useState(false)

  const handleGeneroSeleccionado = (genero: typeof generos[0]) => {
    setGeneroSeleccionado(genero)
    setGirando(false)
    // Pequeña pausa antes de mostrar el timer
    setTimeout(() => {
      setPantalla('timer')
    }, 600)
  }

  const handleReiniciar = () => {
    setGeneroSeleccionado(null)
    setPantalla('ruleta')
  }

  return (
    <div className="min-h-screen bg-fondo">
      {/* Header */}
      <header className="py-6 md:py-8 px-4 text-center border-b border-texto-secundario/10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
            <span className="text-acento-primario">Karaoke</span>
            <span className="text-acento-secundario">Fun</span>
          </h1>
          <p className="text-texto-secundario text-sm md:text-base">
            ¡Sacá lo que tenés adentro! 🎤
          </p>
        </motion.div>
      </header>

      {/* Sección principal */}
      <main className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {pantalla === 'ruleta' && (
              <motion.div
                key="ruleta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Roulette
                  onGeneroSeleccionado={handleGeneroSeleccionado}
                  girando={girando}
                  setGirando={setGirando}
                />
              </motion.div>
            )}

            {pantalla === 'timer' && generoSeleccionado && (
              <motion.div
                key="info-genero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center py-12"
              >
                <p className="text-texto-secundario text-sm animate-pulse">
                  Preparando desafío...
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Modal del Timer */}
      <ChallengeTimer
        generoNombre={generoSeleccionado?.nombre || ''}
        canciones={generoSeleccionado?.canciones || []}
        onReiniciar={handleReiniciar}
        visible={pantalla === 'timer'}
      />

      {/* Secciones institucionales */}
      <div className="relative">
        {/* Divisor decorativo */}
        <div className="h-px bg-gradient-to-r from-transparent via-acento-primario/40 to-transparent" />
      </div>
      <AboutSection />
      <CollaborateSection />
      <ContributorsSection />
      <SuggestionsSection />

      {/* Footer */}
      <footer className="py-6 px-4 text-center border-t border-texto-secundario/20 bg-fondo-secundario">
        <p className="text-texto-secundario text-sm">
          © 2026 <span className="text-logo-lier font-semibold">LIER</span> — Proyecto de código abierto
        </p>
      </footer>
    </div>
  )
}

export default App
