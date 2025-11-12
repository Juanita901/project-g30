'use client'

import { useState } from 'react'
import { Star, Check, Phone, Instagram, MessageCircle, Play, Trophy, Target, Zap } from 'lucide-react'

export default function G30Page() {
  const [selectedPlan, setSelectedPlan] = useState('premium')

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-[#FFD700]/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-[#FFD700]">G30</span>
            <span className="text-white ml-2 text-lg">— Transforme seu corpo</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="hover:text-[#FFD700] transition-colors">Início</a>
            <a href="#sobre" className="hover:text-[#FFD700] transition-colors">Sobre</a>
            <a href="#planos" className="hover:text-[#FFD700] transition-colors">Planos</a>
            <a href="#resultados" className="hover:text-[#FFD700] transition-colors">Resultados</a>
            <a href="#contato" className="hover:text-[#FFD700] transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop&crop=center)'
          }}
        ></div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-4">
              <span className="text-[#FFD700]">G30</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
              Transforme seu corpo em 30 dias
            </h2>
            <p className="text-xl md:text-2xl text-[#FFD700] font-semibold mb-8">
              "Sua melhor versão começa agora."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black/60 backdrop-blur-sm p-6 rounded-2xl border border-[#FFD700]/30">
              <Trophy className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Resultados Reais</h3>
              <p className="text-gray-300">Transformação comprovada em 30 dias</p>
            </div>
            <div className="bg-black/60 backdrop-blur-sm p-6 rounded-2xl border border-[#FFD700]/30">
              <Target className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Foco Total</h3>
              <p className="text-gray-300">Disciplina e dedicação diária</p>
            </div>
            <div className="bg-black/60 backdrop-blur-sm p-6 rounded-2xl border border-[#FFD700]/30">
              <Zap className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Elite</h3>
              <p className="text-gray-300">Para quem quer mudar de vida</p>
            </div>
          </div>

          <div className="space-y-4 mb-12">
            <p className="text-2xl md:text-3xl font-bold text-white">
              "Não existe segredo, existe dedicação."
            </p>
            <p className="text-xl md:text-2xl text-[#FFD700]">
              30 dias podem mudar tudo.
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              Você contra você. G30 é a sua batalha diária.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#planos" 
              className="bg-gradient-to-r from-[#FFD700] to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              COMEÇAR AGORA
            </a>
            <button className="border-2 border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFD700] hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              VER RESULTADOS
            </button>
          </div>
        </div>
      </section>

      {/* Sobre o Criador */}
      <section id="sobre" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&crop=center" 
                  alt="Renan - Criador do G30"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl border-4 border-[#FFD700]"
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Conheça o <span className="text-[#FFD700]">Renan</span>
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Criador do método G30, Renan transformou sua própria vida e agora dedica-se a transformar a vida de milhares de pessoas através de um programa revolucionário de 30 dias.
                </p>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Com anos de experiência em transformação corporal e mental, Renan desenvolveu uma metodologia única que combina treino intensivo, nutrição estratégica e mindset de vencedor.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-[#FFD700]" />
                    <span className="text-lg">+10.000 pessoas transformadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-[#FFD700]" />
                    <span className="text-lg">Método comprovado cientificamente</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-[#FFD700]" />
                    <span className="text-lg">Acompanhamento personalizado</span>
                  </div>
                </div>

                <blockquote className="text-2xl font-bold text-[#FFD700] italic border-l-4 border-[#FFD700] pl-6">
                  "Sua transformação não é sobre o corpo que você vai ter, é sobre a pessoa que você vai se tornar."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Escolha Sua <span className="text-[#FFD700]">Transformação</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Planos desenvolvidos para diferentes objetivos, mas todos com o mesmo compromisso: sua transformação em 30 dias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Básico */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-[#FFD700]/50 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">G30 BÁSICO</h3>
                <div className="text-4xl font-black text-[#FFD700] mb-4">R$ 197</div>
                <p className="text-gray-400">Para quem está começando</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FFD700]" />
                  <span>Plano de treino 30 dias</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FFD700]" />
                  <span>Guia nutricional básico</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FFD700]" />
                  <span>Grupo no WhatsApp</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FFD700]" />
                  <span>E-book motivacional</span>
                </li>
              </ul>
              
              <button className="w-full bg-gray-800 text-white py-4 rounded-full font-bold hover:bg-gray-700 transition-colors">
                ESCOLHER PLANO
              </button>
            </div>

            {/* Plano Premium */}
            <div className="bg-gradient-to-b from-[#FFD700]/20 to-black rounded-2xl p-8 border-2 border-[#FFD700] relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFD700] text-black px-6 py-2 rounded-full font-bold">
                MAIS POPULAR
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">G30 PREMIUM</h3>
                <div className="text-4xl font-black text-[#FFD700] mb-4">R$ 397</div>
                <p className="text-gray-300">Para resultados máximos</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FFD700]" />
                  <span>Tudo do plano básico</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FFD700]" />
                  <span>Plano nutricional personalizado</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FFD700]" />
                  <span>Aulas ao vivo semanais</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FFD700]" />
                  <span>Suporte direto com Renan</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FFD700]" />
                  <span>App exclusivo G30</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-[#FFD700] to-yellow-500 text-black py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-2xl">
                COMEÇAR AGORA
              </button>
            </div>

            {/* Plano Elite */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-[#FFD700]/50 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">G30 ELITE</h3>
                <div className="text-4xl font-black text-[#FFD700] mb-4">R$ 697</div>
                <p className="text-gray-400">Transformação completa</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FFD700]" />
                  <span>Tudo do plano premium</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FFD700]" />
                  <span>Consultoria 1:1 com Renan</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FFD700]" />
                  <span>Plano pós G30 (60 dias)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FFD700]" />
                  <span>Grupo VIP exclusivo</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FFD700]" />
                  <span>Garantia de resultado</span>
                </li>
              </ul>
              
              <button className="w-full bg-gray-800 text-white py-4 rounded-full font-bold hover:bg-gray-700 transition-colors">
                QUERO SER ELITE
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-400 mb-4">
              💳 Parcelamento em até 12x sem juros | 🔒 Compra 100% segura
            </p>
            <p className="text-[#FFD700] font-semibold">
              ⚡ Oferta por tempo limitado - Últimas vagas!
            </p>
          </div>
        </div>
      </section>

      {/* Resultados e Depoimentos */}
      <section id="resultados" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-[#FFD700]">Resultados</span> Reais
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mais de 10.000 pessoas já transformaram suas vidas com o G30. Veja alguns resultados incríveis:
            </p>
          </div>

          {/* Antes e Depois */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-black/50 rounded-2xl p-6 border border-[#FFD700]/30">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-400 mb-2">ANTES</p>
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop&crop=center" 
                    alt="Antes"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">DEPOIS</p>
                  <img 
                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=400&fit=crop&crop=center" 
                    alt="Depois"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Marina, 28 anos</h3>
              <p className="text-gray-300 text-sm mb-3">-12kg em 30 dias</p>
              <p className="text-gray-400 text-sm italic">
                "Nunca pensei que conseguiria. O G30 mudou minha vida completamente!"
              </p>
            </div>

            <div className="bg-black/50 rounded-2xl p-6 border border-[#FFD700]/30">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-400 mb-2">ANTES</p>
                  <img 
                    src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=400&fit=crop&crop=center" 
                    alt="Antes"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">DEPOIS</p>
                  <img 
                    src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300&h=400&fit=crop&crop=center" 
                    alt="Depois"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Carlos, 35 anos</h3>
              <p className="text-gray-300 text-sm mb-3">-15kg em 30 dias</p>
              <p className="text-gray-400 text-sm italic">
                "Resultado que eu nunca imaginei. Renan é um gênio!"
              </p>
            </div>

            <div className="bg-black/50 rounded-2xl p-6 border border-[#FFD700]/30">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-400 mb-2">ANTES</p>
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop&crop=center" 
                    alt="Antes"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">DEPOIS</p>
                  <img 
                    src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=400&fit=crop&crop=center" 
                    alt="Depois"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Ana, 42 anos</h3>
              <p className="text-gray-300 text-sm mb-3">-10kg em 30 dias</p>
              <p className="text-gray-400 text-sm italic">
                "Aos 42 anos consegui o corpo dos meus sonhos. Gratidão eterna!"
              </p>
            </div>
          </div>

          {/* Depoimentos */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-2xl border border-[#FFD700]/30">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFD700] fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4 italic">
                "O G30 não é só um programa de emagrecimento, é uma transformação completa. Mudei meu corpo, minha mente e minha vida. Renan é um verdadeiro mentor!"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" 
                  alt="Juliana"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold">Juliana Santos</p>
                  <p className="text-sm text-gray-400">-18kg em 30 dias</p>
                </div>
              </div>
            </div>

            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-2xl border border-[#FFD700]/30">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFD700] fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4 italic">
                "Tentei de tudo antes do G30. Nada funcionava. Em 30 dias consegui o que não consegui em anos. O método do Renan é revolucionário!"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                  alt="Roberto"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold">Roberto Silva</p>
                  <p className="text-sm text-gray-400">-22kg em 30 dias</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-[#FFD700] mb-4">
              Sua transformação começa HOJE!
            </p>
            <a 
              href="#planos" 
              className="inline-block bg-gradient-to-r from-[#FFD700] to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              GARANTIR MINHA VAGA
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-black border-t border-[#FFD700]/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold mb-4">
                <span className="text-[#FFD700]">G30</span>
                <span className="text-white ml-2">— Transformação</span>
              </div>
              <p className="text-gray-400 mb-6">
                Programa de transformação corporal e mental com planos personalizados. Sua melhor versão começa agora.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank"
                  className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a 
                  href="https://instagram.com/g30oficial" 
                  target="_blank"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full hover:scale-110 transition-transform"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="tel:+5511999999999" 
                  className="bg-[#FFD700] text-black p-3 rounded-full hover:bg-yellow-500 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-400 hover:text-[#FFD700] transition-colors">Início</a></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-[#FFD700] transition-colors">Sobre o Renan</a></li>
                <li><a href="#planos" className="text-gray-400 hover:text-[#FFD700] transition-colors">Planos</a></li>
                <li><a href="#resultados" className="text-gray-400 hover:text-[#FFD700] transition-colors">Resultados</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Contato Direto</h3>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank"
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp: (11) 99999-9999</span>
                </a>
                <a 
                  href="https://instagram.com/g30oficial" 
                  target="_blank"
                  className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@g30oficial</span>
                </a>
                <p className="text-gray-400">
                  📧 contato@g30transformacao.com
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 mb-4">
              © 2024 G30 - Todos os direitos reservados. Desenvolvido para transformar vidas.
            </p>
            <p className="text-[#FFD700] font-semibold">
              "30 dias podem mudar tudo. Você contra você. G30 é a sua batalha diária."
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}