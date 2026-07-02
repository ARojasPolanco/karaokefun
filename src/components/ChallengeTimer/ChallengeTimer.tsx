import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { penitencias } from '../../data/penitencias'

interface Cancion {
  titulo: string
  artista: string
}

interface ChallengeTimerProps {
  generoNombre: string
  canciones: Cancion[]
  onReiniciar: () => void
  visible: boolean
}

const TIEMPO_MAXIMO = 30

export function ChallengeTimer({ generoNombre, canciones, onReiniciar, visible }: ChallengeTimerProps) {
  const [tiempoRestante, setTiempoRestante] = useState(TIEMPO_MAXIMO)
  const [aceptado, setAceptado] = useState(false)
  const [penitencia, setPenitencia] = useState('')
  const [tiempoAgotado, setTiempoAgotado] = useState(false)

  useEffect(() => {
    if (!visible || aceptado || tiempoAgotado) return

    setTiempoRestante(TIEMPO_MAXIMO)

    const intervalo = setInterval(() => {
      setTiempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(intervalo)
          setTiempoAgotado(true)
          const penitenciaAleatoria = penitencias[Math.floor(Math.random() * penitencias.length)]
          setPenitencia(penitenciaAleatoria)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(intervalo)
  }, [visible, aceptado, tiempoAgotado])

  const handleAceptar = useCallback(() => {
    setAceptado(true)
  }, [])

  const handleReiniciar = useCallback(() => {
    setTiempoRestante(TIEMPO_MAXIMO)
    setAceptado(false)
    setPenitencia('')
    setTiempoAgotado(false)
    onReiniciar()
  }, [onReiniciar])

  const circunferencia = 2 * Math.PI * 72
  const strokeDashoffset = circunferencia - (tiempoRestante / TIEMPO_MAXIMO) * circunferencia

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(8px)' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="bg-fondo-secundario rounded-3xl p-6 sm:p-8 border-2 border-acento-primario/50 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              {!aceptado && !tiempoAgotado ? (
                <motion.div
                  key="timer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center"
                >
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-texto-primario mb-1">
                    ¡Aceptá el desafío!
                  </h3>

                  <p className="text-texto-secundario text-sm sm:text-base mb-6">
                    Género: <span className="text-acento-secundario font-bold">{generoNombre}</span>
                  </p>

                  {/* Lista de canciones */}
                  <div className="mb-6">
                    <h4 className="font-display text-sm font-semibold text-texto-secundario mb-3 text-left uppercase tracking-wider">
                      Canciones para cantar
                    </h4>
                    <div className="space-y-2">
                      {canciones.map((cancion, index) => (
                        <div
                          key={cancion.titulo}
                          className="bg-fondo rounded-xl p-3 flex items-center gap-3 border border-texto-secundario/10"
                        >
                          <span className="w-7 h-7 rounded-full bg-acento-primario/20 text-acento-primario font-display font-bold text-xs flex items-center justify-center shrink-0">
                            {index + 1}
                          </span>
                          <div className="text-left min-w-0">
                            <p className="font-display font-semibold text-texto-primario text-sm truncate">
                              {cancion.titulo}
                            </p>
                            <p className="text-texto-secundario text-xs">
                              {cancion.artista}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timer circular */}
                  <div className="w-40 h-40 sm:w-44 sm:h-44 mx-auto mb-6 relative">
                    <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">
                      <circle
                        cx="80"
                        cy="80"
                        r="72"
                        fill="none"
                        stroke="#333"
                        strokeWidth="8"
                      />
                      <motion.circle
                        cx="80"
                        cy="80"
                        r="72"
                        fill="none"
                        stroke="#FF2D78"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circunferencia}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1, ease: 'linear' }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <motion.span
                        key={tiempoRestante}
                        initial={{ scale: 1.3 }}
                        animate={{ scale: 1 }}
                        className="font-display text-5xl sm:text-6xl font-bold text-acento-primario leading-none"
                      >
                        {tiempoRestante}
                      </motion.span>
                      <span className="text-texto-secundario text-xs mt-1">
                        segundos
                      </span>
                    </div>
                  </div>

                  <p className="text-texto-secundario text-xs mb-4">
                    Tenés {TIEMPO_MAXIMO} segundos para aceptar el desafío
                  </p>

                  <motion.button
                    onClick={handleAceptar}
                    className="w-full py-4 bg-acento-secundario text-fondo font-display font-bold text-lg sm:text-xl rounded-2xl hover:bg-acento-secundario/80 transition-colors cursor-pointer shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    🎤 ¡Acepto el desafío!
                  </motion.button>
                </motion.div>
              ) : aceptado ? (
                <motion.div
                  key="aceptado"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-4"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="text-7xl sm:text-8xl mb-6"
                  >
                    ✅
                  </motion.div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-green-400 mb-3">
                    ¡La pusiste!
                  </h3>
                  <p className="text-texto-secundario text-base sm:text-lg mb-6">
                    ¡A bailar, cantar y pasarla bien!
                  </p>
                  {/* Canciones en estado aceptado */}
                  <div className="space-y-2 mb-8 text-left max-w-sm mx-auto">
                    {canciones.map((cancion, index) => (
                      <div
                        key={cancion.titulo}
                        className="bg-fondo rounded-xl p-3 flex items-center gap-3 border border-green-500/20"
                      >
                        <span className="w-7 h-7 rounded-full bg-green-500/20 text-green-400 font-display font-bold text-xs flex items-center justify-center shrink-0">
                          {index + 1}
                        </span>
                        <div className="text-left min-w-0">
                          <p className="font-display font-semibold text-texto-primario text-sm truncate">
                            {cancion.titulo}
                          </p>
                          <p className="text-texto-secundario text-xs">
                            {cancion.artista}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    onClick={handleReiniciar}
                    className="px-8 py-4 bg-acento-primario text-white font-display font-bold text-lg rounded-xl hover:bg-acento-primario/80 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Volver a girar
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="penitencia"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-4"
                >
                  <motion.div
                    initial={{ y: -20, rotate: -10 }}
                    animate={{ y: 0, rotate: 10 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    className="text-7xl sm:text-8xl mb-6"
                  >
                    😈
                  </motion.div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-acento-primario mb-4">
                    ¡Se te acabó el tiempo!
                  </h3>
                  <p className="text-texto-primario text-lg sm:text-xl mb-8 leading-relaxed px-2">
                    {penitencia}
                  </p>
                  <motion.button
                    onClick={handleReiniciar}
                    className="px-8 py-4 bg-acento-primario text-white font-display font-bold text-lg rounded-xl hover:bg-acento-primario/80 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Intentar de nuevo
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
