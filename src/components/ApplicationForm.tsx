
import React, { useState } from 'react';
import Button from './Button';
import { FormData } from '../types';

const ApplicationForm: React.FC = () => {
  const [formState, setFormState] = useState<FormData>({
    fullName: '',
    company: '',
    role: '',
    email: '',
    instagram: '',
    currentMoment: '',
    budget: '',
    goals: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // ---------------------------------------------------------------------------
  // CONFIGURATION
  // This looks for VITE_FORMSPREE_ENDPOINT in your .env file or Vercel Settings.
  // If not found, it falls back to simulation mode.
  // Casting import.meta to any to avoid TS errors if types aren't fully configured
  const FORMSPREE_ENDPOINT = (import.meta as any).env?.VITE_FORMSPREE_ENDPOINT || ""; 
  // ---------------------------------------------------------------------------

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // SIMULATION MODE (If no endpoint is configured)
    if (!FORMSPREE_ENDPOINT) {
      setTimeout(() => {
        console.log("------------------------------------------------");
        console.log("⚠️ SIMULATION MODE");
        console.log("To make this live, set VITE_FORMSPREE_ENDPOINT in your .env or Vercel settings.");
        console.log("DATA SENT:", formState);
        console.log("------------------------------------------------");
        setStatus('success');
      }, 1500);
      return;
    }

    // LIVE MODE (Send to Formspree)
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formState,
          _subject: `Nova Candidatura Martinali: ${formState.company}`, // Custom subject line for email
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ // Reset form
          fullName: '', company: '', role: '', email: '', 
          instagram: '', currentMoment: '', budget: '', goals: ''
        });
      } else {
        const data = await response.json();
        // Handle Formspree specific errors or generic errors
        // Replacing Object.hasOwn for compatibility
        if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
            throw new Error(data.errors.map((err: any) => err.message).join(", "));
        }
        throw new Error("Ocorreu um erro ao enviar.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
      setErrorMessage("Não foi possível enviar a candidatura. Por favor, verifique a sua conexão ou envie-nos um email diretamente.");
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-12 shadow-2xl text-center border-t-4 border-gold-400 animate-fade-in">
        <h3 className="font-serif text-3xl text-stone-900 mb-4">Candidatura Recebida</h3>
        <p className="text-stone-600 mb-8 max-w-md mx-auto">
          Obrigado pelo interesse na Martinali. A nossa equipa irá analisar o teu perfil e a tua marca. Entraremos em contacto em breve se houver alinhamento estratégico.
        </p>
        <Button onClick={() => setStatus('idle')} variant="secondary">Voltar ao site</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-2xl border border-stone-100 relative">
      {status === 'error' && (
        <div className="bg-red-50 text-red-800 p-4 mb-6 text-sm border-l-4 border-red-500 rounded-sm">
          <p className="font-bold mb-1">Erro no envio</p>
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Hidden HoneyPot Field for Spam Protection (Formspree) */}
      <input type="text" name="_gotcha" style={{display: 'none'}} />

      <div className="space-y-6">
        
        {/* Name */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-semibold">Nome completo *</label>
          <input 
            type="text" 
            name="fullName"
            required
            value={formState.fullName}
            onChange={handleChange}
            className="w-full bg-stone-50 border border-stone-200 p-4 focus:outline-none focus:border-gold-400 transition-colors placeholder:text-stone-300"
            placeholder="Ana Silva"
          />
        </div>

        {/* Company & Role Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-semibold">Empresa *</label>
            <input 
              type="text" 
              name="company"
              required
              value={formState.company}
              onChange={handleChange}
              className="w-full bg-stone-50 border border-stone-200 p-4 focus:outline-none focus:border-gold-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-semibold">Cargo *</label>
            <input 
              type="text" 
              name="role"
              required
              value={formState.role}
              onChange={handleChange}
              className="w-full bg-stone-50 border border-stone-200 p-4 focus:outline-none focus:border-gold-400 transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-semibold">Email Profissional *</label>
          <input 
            type="email" 
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="w-full bg-stone-50 border border-stone-200 p-4 focus:outline-none focus:border-gold-400 transition-colors"
            placeholder="ana@suaempresa.com"
          />
        </div>

        {/* Instagram */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-semibold">Website / Instagram da marca *</label>
          <input 
            type="text" 
            name="instagram"
            required
            value={formState.instagram}
            onChange={handleChange}
            className="w-full bg-stone-50 border border-stone-200 p-4 focus:outline-none focus:border-gold-400 transition-colors"
            placeholder="@suamarca"
          />
        </div>

        {/* Dropdown - Moment */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-semibold">Momento atual da marca *</label>
          <div className="relative">
            <select 
              name="currentMoment"
              required
              value={formState.currentMoment}
              onChange={handleChange}
              className="w-full bg-stone-50 border border-stone-200 p-4 focus:outline-none focus:border-gold-400 transition-colors appearance-none"
            >
              <option value="" disabled>Selecionar opção...</option>
              <option value="launch">Fase de Lançamento / Ideia</option>
              <option value="rebranding">Necessidade de Rebranding / Mudança</option>
              <option value="growth">Fase de Expansão / Escala</option>
              <option value="maintenance">Manutenção de Posicionamento Premium</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-stone-400">
              ▼
            </div>
          </div>
        </div>

        {/* Budget Radio */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-4 font-semibold">Investimento mensal disponível</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Até 1.000 €",
              "1.000 € a 3.000 €",
              "3.000 € a 5.000 €",
              "Mais de 5.000 €"
            ].map((option) => (
              <label key={option} className={`
                flex items-center space-x-3 cursor-pointer p-3 border transition-all duration-300
                ${formState.budget === option ? 'border-gold-400 bg-gold-50' : 'border-stone-200 hover:border-stone-300'}
              `}>
                <input 
                  type="radio" 
                  name="budget" 
                  value={option}
                  checked={formState.budget === option}
                  onChange={handleChange}
                  className="appearance-none h-4 w-4 border border-stone-300 rounded-full checked:bg-gold-500 checked:border-transparent focus:outline-none"
                />
                <span className={`text-sm ${formState.budget === option ? 'text-stone-900 font-medium' : 'text-stone-600'}`}>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Goals Textarea */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-semibold">O que gostarias de mudar na tua comunicação? *</label>
          <textarea 
            name="goals"
            required
            rows={4}
            value={formState.goals}
            onChange={handleChange}
            className="w-full bg-stone-50 border border-stone-200 p-4 focus:outline-none focus:border-gold-400 transition-colors resize-none"
            placeholder="Conta-nos brevemente os teus desafios..."
          ></textarea>
        </div>

        <div className="pt-4">
          <Button type="submit" fullWidth disabled={status === 'submitting'} variant="dark">
            {status === 'submitting' ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                A enviar...
              </span>
            ) : 'Submeter candidatura'}
          </Button>
          <p className="text-center text-[10px] text-stone-400 mt-4 uppercase tracking-widest">
            Ao enviar, concordas com a nossa política de privacidade.
          </p>
        </div>

      </div>
    </form>
  );
};

export default ApplicationForm;
