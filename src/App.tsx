import React from 'react';
import { ArrowDown } from 'lucide-react';
import Navigation from './components/Navigation';
import Button from './components/Button';
import Section from './components/Section';
import ApplicationForm from './components/ApplicationForm';

function App() {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-stone-800 bg-stone-50">
      <Navigation />

      {/* SECÇÃO 1: A PROVOCAÇÃO (HERO) */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Mantendo o tom luxuoso e misterioso */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550935114-99de2f4849fa?q=80&w=2940&auto=format&fit=crop" 
            alt="Luxury texture aesthetic" 
            className="w-full h-full object-cover grayscale-[30%] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-stone-950/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-5xl pt-20">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-10 animate-fade-in-up">
            O seu produto tem valor.<br />
            <span className="text-gold-200 italic">A sua marca também?</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200 tracking-wide">
            O nosso trabalho é garantir que a percepção do mercado esteja à altura da alma do seu negócio.
          </p>
          
          <div className="animate-fade-in-up delay-300">
            <Button onClick={scrollToForm} variant="primary">
              Candidatar-se à Sessão de Diagnóstico
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
            <ArrowDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </header>

      {/* SECÇÃO 2: O DIAGNÓSTICO (O PARADOXO) */}
      <Section id="diagnostico" className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-gold-600 uppercase mb-6 block">O Diagnóstico</span>
          <h2 className="font-serif text-4xl md:text-6xl text-stone-900 mb-16">O Paradoxo do Sucesso</h2>
          
          <div className="space-y-12 mb-20">
            {[
              "Comunica factos, mas inspira desejo?",
              "As suas métricas crescem, mas como é o impacto emocional da sua marca?",
              "Investe em comunicação, mas continua a competir por preço?"
            ].map((question, i) => (
              <p key={i} className="font-serif text-2xl md:text-4xl text-stone-600 leading-snug italic">
                "{question}"
              </p>
            ))}
          </div>

          <div className="relative py-12">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold-400 transform -translate-x-1/2 opacity-30"></div>
            <p className="relative bg-white z-10 inline-block px-8 py-4 text-stone-900 font-medium tracking-widest text-sm uppercase border-y border-stone-100 shadow-sm">
              O mercado reconhece o que faz, <br className="md:hidden"/>mas não compreende quem és.
            </p>
          </div>
        </div>
      </Section>

      {/* SECÇÃO 3: O MÉTODO */}
      <Section id="metodo" dark>
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          <div className="md:w-1/3">
            <h2 className="font-serif text-5xl md:text-6xl text-white sticky top-32 leading-tight">
              A relevância <br /><span className="text-gold-400 italic">constrói-se.</span>
            </h2>
          </div>

          <div className="md:w-2/3 space-y-20 border-l border-stone-800 pl-8 md:pl-16 py-8">
            {[
              {
                phase: "Fase 01",
                title: "O Diagnóstico",
                desc: "Mergulhamos na essência da sua marca para definir a visão e traçar um mapa estratégico que guia todo o projeto."
              },
              {
                phase: "Fase 02",
                title: "A Execução",
                desc: "Cada imagem, palavra e detalhe é criado com uma intenção precisa: reforçar o seu posicionamento e despertar desejo."
              },
              {
                phase: "Fase 03",
                title: "O Impacto",
                desc: "Analisamos os resultados para garantir que a nova perceção da sua marca gera valor real e duradouro."
              }
            ].map((item, i) => (
              <div key={i} className="group">
                <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block opacity-70 group-hover:opacity-100 transition-opacity">{item.phase}</span>
                <h3 className="font-serif text-3xl md:text-4xl text-stone-100 mb-6">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed text-lg font-light max-w-xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECÇÃO 4: A ORIGEM DA NOSSA LINGUAGEM */}
      <Section id="origem" className="bg-stone-100">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
          <div className="lg:w-1/2 relative">
             <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
                <img 
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Storytelling e viagem lifestyle" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-stone-900/10"></div>
             </div>
             {/* Elemento decorativo */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-200 -z-10"></div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-12">
              Emoção Comprovada, <br />
              <span className="italic text-stone-500">Estratégia Aplicada.</span>
            </h2>
            
            <div className="space-y-8 text-stone-600 leading-relaxed text-lg">
              <p>
                O <strong className="text-stone-900 font-medium">Viaje com a Jeni</strong> é a nossa prova pública do poder do storytelling. É o laboratório que demonstra como a emoção autêntica cria desejo e constrói uma audiência fiel.
              </p>
              
              <div className="w-12 h-px bg-gold-400"></div>

              <p>
                A <strong className="text-stone-900 font-medium">Martinali Creative</strong> aplica essa mesma linguagem como uma ferramenta estratégica para marcas. Não criamos apenas conteúdo; criamos o contexto onde a sua marca se torna indispensável.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECÇÃO 5: FORMULÁRIO (Mantido como estava, apenas reposicionado no flow) */}
      <Section id="contact">
        <div className="max-w-4xl mx-auto bg-white p-1 md:p-8 shadow-2xl shadow-stone-200/50">
          <div className="text-center mb-12 pt-8">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Inicie o seu Diagnóstico</h2>
            <p className="text-stone-500 text-sm tracking-wide uppercase">Candidatura para novos projetos</p>
          </div>

          <ApplicationForm />
        </div>
      </Section>

      {/* SECÇÃO 6: A ASSINATURA (FOOTER) */}
      <footer className="bg-stone-950 text-stone-400 py-24 md:py-32 border-t border-stone-900">
        <div className="container mx-auto px-6 text-center flex flex-col items-center justify-center">
          
          <div className="mb-12">
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 tracking-wide">
              Martinali Creative
            </h2>
            <div className="h-px w-24 bg-gold-500 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-stone-300 font-light italic tracking-wide">
              A transformação da autenticidade em autoridade.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-500 mt-12">
            <span>© 2025 Martinali Creative</span>
            <a href="#" className="hover:text-gold-400 transition-colors">Política de Privacidade</a>
            <a href="mailto:contato@martinali.com" className="hover:text-gold-400 transition-colors">contato@martinali.com</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;