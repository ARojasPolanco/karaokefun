import { useState } from 'react'
import { Wheel } from 'react-custom-roulette-r19'
import generos from '../../data/generos.json'

interface RouletteProps {
  onGeneroSeleccionado: (genero: typeof generos[0]) => void
  girando: boolean
  setGirando: (girando: boolean) => void
}

const coloresSegmentos = [
  { backgroundColor: '#FF2D78', textColor: '#FFFFFF' },
  { backgroundColor: '#FFD93D', textColor: '#0f0f0f' },
  { backgroundColor: '#FF2D78', textColor: '#FFFFFF' },
  { backgroundColor: '#FFD93D', textColor: '#0f0f0f' },
  { backgroundColor: '#FF2D78', textColor: '#FFFFFF' },
  { backgroundColor: '#FFD93D', textColor: '#0f0f0f' },
]

export function Roulette({ onGeneroSeleccionado, girando, setGirando }: RouletteProps) {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)

  const data = generos.map((genero, index) => ({
    option: genero.nombre,
    style: {
      backgroundColor: coloresSegmentos[index].backgroundColor,
      textColor: coloresSegmentos[index].textColor,
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: 16,
      fontWeight: 700 as const,
    },
  }))

  const girarRuleta = () => {
    if (girando || mustSpin) return

    const nuevoPrizeNumber = Math.floor(Math.random() * generos.length)
    setPrizeNumber(nuevoPrizeNumber)
    setMustSpin(true)
    setGirando(true)
  }

  const handleStopSpinning = () => {
    setMustSpin(false)
    setGirando(false)
    onGeneroSeleccionado(generos[prizeNumber])
  }

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8">
      {/* Ruleta - la librería maneja su propio tamaño y pointer */}
      <div className="flex items-center justify-center">
        <div className="max-w-[400px] w-full">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={handleStopSpinning}
            backgroundColors={coloresSegmentos.map(c => c.backgroundColor)}
            textColors={coloresSegmentos.map(c => c.textColor)}
            outerBorderColor="#FF2D78"
            outerBorderWidth={4}
            innerBorderColor="#FF2D78"
            innerBorderWidth={2}
            radiusLineColor="#0f0f0f"
            radiusLineWidth={2}
            spinDuration={1.2}
          />
        </div>
      </div>

      {/* Estado de la ruleta */}
      <div className="text-center">
        {girando ? (
          <p className="font-display font-bold text-acento-secundario text-lg animate-pulse">
            Girando...
          </p>
        ) : (
          <p className="font-display text-texto-secundario text-base">
            Tocá el botón para girar la ruleta
          </p>
        )}
      </div>

      {/* Botón para girar */}
      <button
        onClick={girarRuleta}
        disabled={girando || mustSpin}
        className={`px-10 py-4 sm:px-12 sm:py-5 rounded-full font-display font-bold text-lg sm:text-xl transition-all shadow-xl ${
          girando || mustSpin
            ? 'bg-texto-secundario text-fondo cursor-not-allowed opacity-60'
            : 'bg-acento-primario text-white hover:bg-acento-primario/80 hover:scale-105 active:scale-95 cursor-pointer'
        }`}
      >
        {girando ? 'Girando...' : '🎰 Girar la Ruleta'}
      </button>
    </div>
  )
}
