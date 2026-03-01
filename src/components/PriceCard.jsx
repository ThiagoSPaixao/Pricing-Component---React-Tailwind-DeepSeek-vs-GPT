import React from 'react';
import { motion } from 'framer-motion';

const PriceCard = ({ 
  plan, 
  isAnnual, 
  isPopular = false 
}) => {
  // Calcula o preço baseado no período
  const getPrice = () => {
    if (plan.price.monthly === 'Grátis') return 'Grátis';
    if (plan.price.monthly === 'Custom') return 'Custom';
    return isAnnual ? plan.price.annual : plan.price.monthly;
  };

  // Formata o período para exibição
  const getPeriod = () => {
    if (plan.price.monthly === 'Grátis') return '';
    if (plan.price.monthly === 'Custom') return '';
    return isAnnual ? '/ano' : '/mês';
  };

  return (
    <motion.li 
      className="relative h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="article"
      aria-label={`Plano ${plan.name}`}
    >
      {/* Card com efeito de vidro */}
      <div className={`
        relative h-full p-8 rounded-2xl backdrop-blur-lg
        ${isPopular 
          ? 'bg-gradient-to-b from-purple-500/10 to-transparent border-2 border-transparent [background:linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))_padding-box,conic-gradient(from_180deg_at_50%_50%,#00FF94_0deg,#6B46C1_180deg,#00FF94_360deg)_border-box]' 
          : 'bg-white/5 border border-white/10'
        }
        hover:transform hover:scale-105 transition-all duration-300
      `}>
        {/* Badge "Mais Popular" */}
        {isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
              Mais Popular ⭐
            </span>
          </div>
        )}

        {/* Cabeçalho do Card */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <div className="flex items-baseline justify-center gap-1">
            <motion.span 
              key={getPrice()}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold text-white"
            >
              {getPrice()}
            </motion.span>
            <span className="text-gray-400 text-sm">{getPeriod()}</span>
          </div>
          <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
        </div>

        {/* Lista de Benefícios */}
        <ul className="space-y-4 mb-8" role="list" aria-label={`Benefícios do plano ${plan.name}`}>
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-300">
              <svg 
                className="w-5 h-5 text-green-400 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Botão de Ação */}
        <motion.button
          className={`
            w-full py-3 px-6 rounded-lg font-semibold transition-all
            ${isPopular
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25'
              : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Assinar plano ${plan.name}`}
        >
          {plan.cta}
        </motion.button>
      </div>
    </motion.li>
  );
};

export default PriceCard;