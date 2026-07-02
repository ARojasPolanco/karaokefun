import { motion } from 'framer-motion'

export function SuggestionsSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-fondo-secundario">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            ¿Tenés una{' '}
            <span className="text-acento-secundario">canción</span>{' '}
            para sumar?
          </h2>

          <p className="text-texto-secundario text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            Recomendá canciones para que las sumemos a futuras versiones.
            ¡Tu favorita podría ser la próxima en salir en la ruleta!
          </p>

          <div className="bg-fondo border border-acento-secundario/30 rounded-2xl p-6 md:p-8 mb-8 max-w-md mx-auto">
            <p className="text-texto-secundario text-sm mb-2">
              Canal de contacto
            </p>
            <p className="text-acento-secundario font-display font-bold text-xl md:text-2xl">
              @lier.ar
            </p>
            <p className="text-texto-secundario text-sm mt-4">
              Las sugerencias se revisan y suman manualmente por ahora.
            </p>
          </div>

          <motion.a
            href="https://instagram.com/lier.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-display font-bold text-lg rounded-xl hover:opacity-90 transition-opacity shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar sugerencia por Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
