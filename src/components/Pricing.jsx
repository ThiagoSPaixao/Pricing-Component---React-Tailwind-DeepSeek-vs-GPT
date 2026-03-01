import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PriceCard from './PriceCard';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  // Dados dos planos (DRY - mapeados uma única vez)
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfeito para começar',
      price: {
        monthly: 'Grátis',
        annual: 'Grátis'
      },
      features: [
        'Até 3 projetos',
        '5GB de armazenamento',
        'Suporte por email',
        'Domínio gratuito',
        'SSL incluso'
      ],
      cta: 'Começar Grátis',
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Para profissionais',
      price: {
        monthly: 'R$ 29',
        annual: 'R$ 290'
      },
      features: [
        'Projetos ilimitados',
        '50GB de armazenamento',
        'Suporte prioritário 24/7',
        'Domínios personalizados',
        'SSL avançado',
        'Analytics avançado',
        'API dedicada'
      ],
      cta: 'Assinar Pro',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Soluções personalizadas',
      price: {
        monthly: 'Custom',
        annual: 'Custom'
      },
      features: [
        'Tudo do plano Pro',
        'Armazenamento ilimitado',
        'SLA garantido',
        'Gerente de conta dedicado',
        'Treinamento da equipe',
        'On-premise disponível',
        'SSO e segurança avançada'
      ],
      cta: 'Falar com Vendas',
      popular: false
    }
  ];

  // Função para alternar o toggle com aria-label
  const handleToggle = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <section 
      className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 py-20 px-4"
      aria-labelledby="pricing-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <motion.h2 
            id="pricing-title"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Escolha o plano ideal para <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">você</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Preços simples e transparentes para todos os tamanhos de projeto
          </motion.p>

          {/* Toggle Switch Mensal/Anual */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Mensal
            </span>
            
            <button
              onClick={handleToggle}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              style={{ backgroundColor: isAnnual ? '#8B5CF6' : '#4B5563' }}
              role="switch"
              aria-checked={isAnnual}
              aria-label="Alternar entre preços mensais e anuais"
            >
              <span className="sr-only">Alternar período de cobrança</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Anual
              <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                Economize 20%
              </span>
            </span>
          </div>
        </div>

        {/* Grid de Cards */}
        <ul 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Planos disponíveis"
        >
          <AnimatePresence mode="wait">
            {plans.map((plan) => (
              <PriceCard
                key={plan.id}
                plan={plan}
                isAnnual={isAnnual}
                isPopular={plan.popular}
              />
            ))}
          </AnimatePresence>
        </ul>

        {/* Nota de rodapé */}
        <motion.p 
          className="text-center text-gray-500 text-sm mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          * Todos os planos incluem atualizações gratuitas. Cancele quando quiser.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;