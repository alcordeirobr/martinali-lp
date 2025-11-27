import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import Navigation from './components/Navigation';
import Button from './components/Button';
import Section from './components/Section';
import ApplicationForm from './components/ApplicationForm';

function App() {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-stone-800">
      <Navigation />

      {/* SECÇÃO 1: A PROVOCAÇÃO */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
            alt="Office luxury minimalism" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-5xl pt-20">
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8 animate-fade-in-up">
            O seu produto tem valor. <br />
            <span className="text-gold-400 italic">A sua marca também?</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
            O nosso trabalho é garantir que a percepção do mercado esteja à altura da alma do seu negócio.
          </p>
          <div className="animate-fade-in-up delay-300">
            <Button onClick={scrollToForm} variant="primary">Candidatar-se à Sessão de Diagnóstico</Button>
          </div>
        </div>
      </header>

      {/* SECÇÃO 2: O DIAGNÓSTICO */}
      <Section id="diagnosis" className="bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4 block">A Dor Articulada</span>
          <h2 className="font-serif text-4xl md:text-6xl text-stone-900 mb-16">O Paradoxo do Sucesso</h2>
          
          <div className="space-y-8 text-xl md:text-2xl font-serif text-stone-700 leading-relaxed mb-16">
            <p className="hover:text-gold-600 transition-colors duration-500">Comunica factos, mas inspira desejo?</p>
            <p className="hover:text-gold-600 transition-colors duration-500">As suas métricas crescem, mas como é o impacto emocional da sua marca?</p>
            <p className="hover:text-gold-600 transition-colors duration-500">Investe em comunicação, mas continua a competir por preço?</p>
          </div>

          <div className="inline-block border-t border-b border-stone-300 py-6 px-10">
            <p className="text-sm md:text-base uppercase tracking-widest text-stone-900 font-medium">
              O mercado reconhece o que faz, mas não compreende quem és.
            </p>
          </div>
        </div>
      </Section>

      {/* SECÇÃO 3: O MÉTODO */}
      <Section id="process" dark>
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-widest text-gold-400 uppercase mb-4 block">Engenharia de Valor</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">A relevância constrói-se.</h2>
        </div>
        
        <div className="space-y-12 relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-[29px] top-4 bottom-4 w-px bg-stone-800"></div>

          {[
            {
              step: "1",
              title: "O Diagnóstico",
              desc: "Mergulhamos na essência da sua marca para definir a visão e traçar um mapa estratégico que guia todo o projeto."
            },
            {
              step: "2",
              title: "A Execução",
              desc: "Cada imagem, palavra e detalhe é criado com uma intenção precisa: reforçar o seu posicionamento e despertar desejo."
            },
            {
              step: "3",
              title: "O Impacto",
              desc: "Analisamos os resultados para garantir que a nova perceção da sua marca gera valor real e duradouro."
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-start relative group">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-stone-900 border border-gold-600 text-gold-400 flex items-center justify-center font-serif text-2xl z-10 group-hover:bg-gold-600 group-hover:text-stone-900 transition-colors duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                {item.step}
              </div>
              <div className="pt-2">
                <h3 className="font-serif text-2xl text-gold-100 mb-3">{item.title}</h3>
                <p className="text-stone-400 font-light text-lg leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SECÇÃO 4: A ORIGEM DA NOSSA LINGUAGEM */}
      <Section className="bg-white">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative order-2 lg:order-1">
             <div className="absolute -inset-4 bg-stone-100 -z-10 transform -rotate-2"></div>
             <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Storytelling and connection" 
              className="w-full h-[500px] object-cover shadow-2xl grayscale-[20%]"
            />
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4 block">A Nossa Vantagem Única</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8">Emoção Comprovada,<br/>Estratégia Aplicada.</h2>
            
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                O <span className="font-semibold text-stone-900">Viaje com a Jeni</span> é a nossa prova pública do poder do storytelling. É o laboratório que demonstra como a emoção autêntica cria desejo e constrói uma audiência fiel.
              </p>
              <p>
                A <span className="font-semibold text-stone-900">Martinali Creative</span> aplica essa mesma linguagem como uma ferramenta estratégica para marcas. Não fazemos apenas 'bonito'; construímos narrativas que convertem atenção em autoridade.
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-gold-600 text-sm font-medium uppercase tracking-wider cursor-pointer group">
              <span>Conhecer a nossa história</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </Section>

      {/* SECÇÃO 5: O FILTRO (Formulário) */}
      <Section id="contact" className="bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Verifica se a tua marca está pronta para esta conversa.</h2>
            <p className="text-stone-500 font-light">Algumas perguntas rápidas para percebermos se conseguimos realmente acrescentar valor neste momento.</p>
          </div>

          <ApplicationForm />
        </div>
      </Section>

      {/* SECÇÃO 6: A ASSINATURA (Footer) */}
      <footer className="bg-stone-950 text-stone-400 py-24 border-t border-stone-900">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center mb-8 text-stone-950">
            <Sparkles className="w-6 h-6" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 tracking-wide">
            Martinali Creative
          </h2>
          
          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-gold-400 mb-12 opacity-90">
            A transformação da autenticidade em autoridade.
          </p>
          
          <div className="w-24 h-px bg-stone-800 mb-12"></div>
          
          <div className="flex flex-col md:flex-row gap-8 text-xs text-stone-600 uppercase tracking-wider">
            <span>© 2025 Martinali Creative</span>
            <a href="#" className="hover:text-stone-400 transition-colors">Política de Privacidade</a>
            <a href="mailto:contato@martinali.com" className="hover:text-stone-400 transition-colors">Contactar</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;