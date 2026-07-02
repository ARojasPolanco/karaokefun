import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-fondo-secundario relative overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acento-primario/50 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Encabezado */}
          <div className="text-center mb-16">
            {/* Logo LIER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-8"
            >
              <div className="bg-[#1a1a1a] px-10 py-5 border border-logo-lier/20 shadow-xl">
                <span className="font-display text-4xl md:text-5xl font-bold tracking-[0.3em] text-logo-lier">
                  LIER
                </span>
              </div>
            </motion.div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Sobre{' '}
              <span className="text-acento-primario">nosotros</span>
            </h2>

            <p className="text-texto-secundario text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
              Creamos soluciones tecnológicas aplicando lógica e ingeniería, 
              transformando ideas en aplicaciones reales y efectivas.
            </p>
          </div>

          {/* Grid de pilares */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                titulo: 'Misión',
                descripcion: 'Desarrollar software que resuelva problemas reales con un enfoque pragmático, combinando creatividad y rigor técnico para entregar productos que marquen la diferencia.',
                icono: '🎯',
              },
              {
                titulo: 'Visión',
                descripcion: 'Ser un referente regional en desarrollo de aplicaciones web, construyendo un ecosistema de talento local en Bahía Blanca a través del código abierto y la colaboración comunitaria.',
                icono: '🔭',
              },
              {
                titulo: 'Valores',
                descripcion: 'Código abierto como filosofía, aprendizaje continuo, colaboración horizontal, calidad técnica sin excusas y diversión como motor creativo.',
                icono: '💡',
              },
            ].map((item) => (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-fondo rounded-2xl p-6 border border-texto-secundario/10 hover:border-acento-primario/30 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{item.icono}</div>
                <h3 className="font-display text-lg font-bold text-acento-secundario mb-3">
                  {item.titulo}
                </h3>
                <p className="text-texto-secundario text-sm leading-relaxed">
                  {item.descripcion}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Equipo y stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-fondo rounded-2xl p-8 border border-texto-secundario/10 mb-8"
          >
            <h3 className="font-display text-xl font-bold text-acento-primario mb-4">
              Nuestra filosofía
            </h3>
            <div className="space-y-4 text-texto-secundario text-sm sm:text-base leading-relaxed">
              <p>
                En LIER creemos que la mejor tecnología es la que se usa, no la que se 
                teoriza. Por eso cada proyecto que encaramos busca ser práctico, funcional 
                y lindo de usar. Este karaoke es un ejemplo: una idea simple, ejecutada con 
                cariño técnico, y puesta a disposición de la comunidad.
              </p>
              <p>
                Apostamos al desarrollo local y al talento de Bahía Blanca. Creemos que 
                la colaboración abierta es el camino más potente para aprender, crecer y 
                construir cosas que realmente importan. Este proyecto es código abierto 
                justamente para eso: para que cualquiera pueda estudiar, modificar y 
                mejorar lo que hacemos.
              </p>
            </div>
          </motion.div>

          {/* Badge open source */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-fondo rounded-full border border-acento-primario/30">
              <span className="text-acento-primario text-lg">❤️</span>
              <span className="text-texto-secundario text-sm font-display">
                Proyecto de código abierto impulsado por{' '}
                <span className="text-logo-lier font-semibold">LIER</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
