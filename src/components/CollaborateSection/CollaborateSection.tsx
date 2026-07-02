import { motion } from 'framer-motion'

export function CollaborateSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-fondo">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            ¡Sumate a{' '}
            <span className="text-acento-secundario">colaborar</span>!
          </h2>

          <p className="text-texto-secundario text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            ¿Sos programador/a de Bahía Blanca? Colaborá con este proyecto 
            de código abierto y sumá experiencia.
          </p>

          <div className="bg-fondo-secundario rounded-2xl p-6 md:p-8 border border-acento-primario/30 mb-8 max-w-xl mx-auto">
            <p className="text-texto-secundario text-sm mb-3 flex items-center justify-center gap-2">
              <span className="text-acento-primario">⚠️</span> Aclaración importante
            </p>
            <p className="text-texto-primario text-base md:text-lg">
              Esto <span className="font-bold text-acento-primario">no es</span> una oferta 
              de empleo remunerado. Es una invitación a contribuir al código abierto 
              y ganar experiencia en un proyecto real.
            </p>
          </div>

          <motion.a
            href="https://github.com/ARojasPolanco/karaokefun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-acento-primario text-white font-display font-bold text-lg rounded-xl hover:bg-acento-primario/80 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver en GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
