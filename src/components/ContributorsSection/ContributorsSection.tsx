import { motion } from 'framer-motion'
import colaboradores from '../../data/colaboradores.json'

const getInitials = (nombre: string) => {
  return nombre
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function ContributorsSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-fondo">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-acento-secundario">Colaboradores</span>
          </h2>
          <p className="text-texto-secundario text-base sm:text-lg max-w-2xl mx-auto">
            Las personas que hacen que este proyecto crezca. ¿Te sumás?
          </p>
        </motion.div>

        {colaboradores.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-texto-secundario">
              Todavía no hay colaboradores. ¡El primer PR te espera!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {colaboradores.map((colab, index) => (
              <motion.div
                key={colab.github}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-fondo-secundario rounded-2xl p-5 border border-texto-secundario/10 hover:border-acento-primario/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {/* Avatar con iniciales */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-acento-primario to-acento-secundario flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-fondo text-lg">
                      {colab.avatar || getInitials(colab.nombre)}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-texto-primario text-base truncate">
                      {colab.nombre}
                    </h3>
                    <p className="text-texto-secundario text-xs mt-0.5 truncate">
                      {colab.stack}
                    </p>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-4 pt-3 border-t border-texto-secundario/10">
                  {colab.github && (
                    <a
                      href={colab.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-texto-secundario hover:text-acento-primario transition-colors text-sm flex items-center gap-1.5"
                    >
                      <span className="text-base">🐙</span>
                      <span className="truncate max-w-[120px]">
                        {colab.github.split('/').pop()}
                      </span>
                    </a>
                  )}
                  {colab.linkedin && (
                    <a
                      href={colab.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-texto-secundario hover:text-acento-secundario transition-colors text-sm flex items-center gap-1.5"
                    >
                      <span className="text-base">💼</span>
                      <span className="truncate max-w-[120px]">
                        {colab.linkedin.split('/').pop()}
                      </span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-texto-secundario text-sm mb-4">
            ¿Ya colaboraste y no aparecés? Agregá tus datos en{' '}
            <code className="text-acento-primario bg-fondo px-1.5 py-0.5 rounded text-xs">
              src/data/colaboradores.json
            </code>
          </p>
          <motion.a
            href="https://github.com/ARojasPolanco/karaokefun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-acento-primario/10 text-acento-primario font-display font-bold text-sm rounded-full border border-acento-primario/30 hover:bg-acento-primario/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🐙 Ver en GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
