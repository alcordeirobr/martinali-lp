import React from 'react';
import { Play, Eye, Camera, TrendingUp, Sparkles, MessageSquare, Shield, Clock, MousePointer2 } from 'lucide-react';
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

      {/* HERO SECTION */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop" 
            alt="Wine tasting luxury" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-4xl pt-20">
          <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-6 font-medium animate-fade-in-up">Martinali Creative</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8 animate-fade-in-up delay-100">
            A tua marca pode crescer mais <br />
            <span className="italic font-light opacity-90">— sem precisar de correr atrás do mercado.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
            Na Martinali, unimos estratégia, emoção e direção criativa para que a tua comunicação trabalhe por ti todos os dias.
            <br/><span className="text-xs opacity-70 mt-2 block">Conteúdos audiovisuais de luxo que elevam a perceção, a consistência e o desejo à volta da tua marca.</span>
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
            <Button onClick={scrollToForm} variant="primary">Solicitar proposta exclusiva</Button>
            <Button variant="outline">Agendar conversa estratégica</Button>
          </div>
          <p className="mt-8 text-xs text-stone-400 uppercase tracking-wider opacity-60">Servimos marcas de hotelaria, vinhos, restauração e experiências premium.</p>
        </div>
      </header>

      {/* PROBLEM SECTION */}
      <Section id="problem">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-stone-100 -z-10 rounded-sm transform -rotate-2"></div>
             <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
              alt="Wine being poured" 
              className="w-full h-[600px] object-cover shadow-xl rounded-sm grayscale-[20%]"
            />
          </div>
          <div className="lg:w-1/2">
            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4 block">O problema invisível</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 text-stone-900">O luxo invisível é um luxo desperdiçado.</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Produtos, hotéis e vinhos excecionais podem passar despercebidos se a narrativa não acompanha a experiência. Quando a comunicação não traduz o nível do serviço, a marca fica invisível num mercado saturado — e quem decide compra pela emoção que sente, não apenas pela ficha técnica.
            </p>
            <ul className="space-y-4 mt-8">
              {[
                "Imagens soltas, sem direção.",
                "Mensagens que não traduzem a verdadeira experiência.",
                "Conteúdos inconsistentes em cada ponto de contacto."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* TRANSFORMATION SECTION */}
      <Section className="bg-stone-100">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4 block">A Transformação</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 text-stone-900">Imagina transformar cada detalhe em desejo.</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Na Martinali, cada fotografia, cada plano de vídeo e cada legenda é pensada para contar a mesma história: a da tua marca como sinónimo de prazer, cuidado e exclusividade. Quando a narrativa é coerente, a tua marca deixa de ser apenas 'mais uma opção' e passa a ocupar um lugar aspiracional na cabeça — e no coração — do teu público.
            </p>
            <ul className="space-y-4 mt-8 text-sm md:text-base">
              {[
                "Aumento da perceção de valor sem depender de descontos.",
                "Posicionamento consistente em todos os canais.",
                "Clientes que voltam porque se identificam com a narrativa."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gold-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-white -z-10 rounded-sm transform rotate-2"></div>
             <img 
              src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop" 
              alt="Grapes and red wine glass artistic" 
              className="w-full h-[600px] object-cover shadow-xl rounded-sm"
            />
          </div>
        </div>
      </Section>

      {/* BENEFITS GRID */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-stone-900">O que muda quando a Martinali passa a trabalhar contigo.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Clock,
              title: "Tempo",
              desc: "Deixas de improvisar conteúdos todas as semanas e passas a ter um plano criativo alinhado com a estratégia do teu negócio."
            },
            {
              icon: Eye,
              title: "Consistência Visual",
              desc: "Linha estética coerente, com imagens, cores e enquadramentos que reforçam a mesma sensação de marca em todos os pontos de contacto."
            },
            {
              icon: Camera,
              title: "Direção Artística",
              desc: "Sessões fotográficas e de vídeo conduzidas com direção clara, para que cada detalhe sirva a narrativa — e não apenas 'fique bonito'."
            },
            {
              icon: TrendingUp,
              title: "Visão de Mercado",
              desc: "Acompanhamento próximo para adaptar a comunicação às épocas altas, lançamentos e mudanças do mercado."
            }
          ].map((card, i) => (
            <div key={i} className="bg-white p-8 border border-stone-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <card.icon className="w-8 h-8 text-gold-500 mb-6 stroke-1" />
              <h3 className="font-serif text-xl mb-4">{card.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES - DARK */}
      <Section id="services" dark>
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-white mb-4">Do teu lado, ao detalhe.</h2>
          <p className="text-stone-400">Serviços pensados para marcas que vivem da experiência que oferecem.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Sparkles,
              title: "Direção criativa estratégica",
              desc: "Definição de narrativa, linha visual, calendário criativo e temas-chave para a tua comunicação de marca."
            },
            {
              icon: Camera,
              title: "Fotografia e vídeo premium",
              desc: "Produção focada em lifestyle, arquitetura, gastronomia e enoturismo, com estética cinematográfica."
            },
            {
              icon: Eye,
              title: "StoryMaker – séries de conteúdos",
              desc: "Coleções de stories, reels e sequências visuais pensadas para campanhas específicas e momentos-chave do ano."
            },
            {
              icon: MessageSquare,
              title: "Conteúdo editorial refinado",
              desc: "Textos, headlines e micro-copy que traduzem sofisticação sem soar forçado — sempre em português de Portugal."
            }
          ].map((service, i) => (
            <div key={i} className="bg-stone-900/50 p-10 border border-stone-800 hover:border-gold-600/30 transition-colors group">
              <service.icon className="w-8 h-8 text-gold-400 mb-6 stroke-1 group-hover:text-gold-300 transition-colors" />
              <h3 className="font-serif text-2xl text-stone-100 mb-4">{service.title}</h3>
              <p className="text-stone-400 font-light leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section id="process">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Como trabalhamos — em 3 passos simples.</h2>
        </div>
        <div className="space-y-12 relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-stone-200"></div>

          {[
            {
              step: "1",
              title: "Conversa inicial",
              desc: "Entendemos a tua marca, contexto, objetivos e o que te diferencia no mercado."
            },
            {
              step: "2",
              title: "Direção & planeamento",
              desc: "Desenhamos a narrativa, o plano de conteúdos e a linha visual que vão guiar as próximas produções."
            },
            {
              step: "3",
              title: "Criação & acompanhamento",
              desc: "Produzimos, editamos e acompanhamos a performance, ajustando a comunicação para manter consistência e resultado."
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-start relative">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold-200 text-gold-600 flex items-center justify-center font-serif text-2xl font-bold z-10 border-4 border-stone-50">
                {item.step}
              </div>
              <div className="pt-2">
                <h3 className="font-serif text-2xl text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-stone-900 text-white px-8 py-3 text-xs uppercase tracking-widest cursor-pointer hover:bg-stone-800 transition-colors">
            Descobrir como seria este processo para a tua marca
          </div>
        </div>
      </Section>

      {/* WHY DIFFERENT */}
      <Section className="bg-stone-100 text-center">
        <div className="mx-auto w-16 h-16 bg-gold-200 rounded-full flex items-center justify-center mb-8 text-gold-600">
           <Sparkles className="w-8 h-8 fill-current stroke-none" />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8">Porque a Martinali é diferente.</h2>
        <p className="max-w-3xl mx-auto text-stone-600 leading-relaxed mb-12">
          Trabalhamos com estratégia e direção criativa — não apenas com câmaras.
          Antes de fotografar, entendemos o lugar que queres ocupar no desejo do teu público.
          Cada sessão, cada peça de conteúdo e cada detalhe visual serve essa intenção: posicionar a tua marca como referência no seu segmento.
        </p>
        <Button variant="dark">Conhecer a nossa abordagem</Button>
      </Section>

      {/* URGENCY - DARK RED */}
      <section className="py-24 bg-wine-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-4">Exclusividade e Excelência</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-white">A exclusividade não pode esperar.</h2>
          <p className="max-w-3xl mx-auto text-stone-300 leading-relaxed mb-12">
            As experiências que a tua marca oferece não são replicáveis — e a tua comunicação também não deve ser.
            Para garantir qualidade, aceitamos apenas um número limitado de novos projetos premium por trimestre.
            Se sentes que é o momento de elevar a tua marca, este é o convite para dar o próximo passo.
          </p>
          <div className="flex justify-center gap-8 text-xs uppercase tracking-widest text-gold-200 mb-10">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4"/> Agenda limitada</span>
            <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4"/> Novos projetos iniciam em 4 a 6 semanas</span>
          </div>
          <Button variant="secondary" onClick={scrollToForm}>Agendar conversa</Button>
        </div>
      </section>

      {/* GUARANTEE */}
      <Section>
        <div className="bg-white p-12 md:p-20 shadow-xl text-center max-w-4xl mx-auto border-t-8 border-gold-400">
          <Shield className="w-16 h-16 text-gold-500 mx-auto mb-8 stroke-1 fill-gold-100" />
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Garantia Martinali Creative</h2>
          <p className="text-stone-600 leading-relaxed">
            Se, após a implementação do plano criativo, sentires que o conteúdo não elevou a perceção da tua marca ao nível prometido,
            continuamos a ajustar a direção criativa e as peças de comunicação até lá chegar — sem custos adicionais no fee acordado.
            O nosso compromisso é com o impacto real na forma como o teu público vê e deseja a tua marca.
          </p>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="bg-stone-100">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-stone-900">Marcas que já confiam na Martinali.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "Conseguimos finalmente ter uma comunicação à altura da experiência que oferecemos. Hoje, os clientes chegam já com a sensação de que nos conhecem.",
              author: "Nome",
              role: "Direção de Marketing (Hotel 5*)"
            },
            {
              quote: "As imagens e narrativas criadas pela Martinali ajudaram-nos a reposicionar o nosso wine bar como referência para eventos privados.",
              author: "Nome",
              role: "Proprietário de Wine Bar"
            },
            {
              quote: "Deixámos de correr atrás do mercado. A nossa comunicação está alinhada e trabalha por nós.",
              author: "Nome",
              role: "CEO grupo de restauração"
            }
          ].map((t, i) => (
            <div key={i} className="bg-white p-10 shadow-sm border border-stone-100 flex flex-col justify-between">
              <p className="text-stone-600 italic mb-8 leading-relaxed font-serif">"{t.quote}"</p>
              <div>
                <p className="font-bold text-stone-900 text-sm">{t.author}</p>
                <p className="text-xs text-stone-500 uppercase tracking-wide mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FORM SECTION */}
      <Section id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Verifica se a tua marca está pronta para esta conversa.</h2>
            <p className="text-stone-500">Algumas perguntas rápidas para percebermos se conseguimos realmente acrescentar valor neste momento.</p>
          </div>

          <ApplicationForm />
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-400 py-20 border-t border-stone-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h3 className="font-serif text-2xl text-white mb-4 italic">"O tempo é o ativo mais caro. A consistência é o que o multiplica."</h3>
            <p className="text-xs uppercase tracking-widest opacity-60">— Martinali Creative</p>
          </div>
          
          <p className="mb-8 font-light">Martinali Creative — Narrativas visuais que transformam experiências em desejo.</p>
          
          <div className="mb-12">
            <Button variant="outline" onClick={scrollToForm} className="text-xs">Solicitar proposta agora</Button>
          </div>

          <div className="flex justify-center space-x-6 text-xs uppercase tracking-widest mb-8">
            <a href="#" className="hover:text-gold-400 transition-colors">Sobre</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Serviços</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Processo</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gold-400 transition-colors">contato@martinali.com</a>
          </div>
          
          <p className="text-xs text-stone-700">© 2025 Martinali Creative. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;