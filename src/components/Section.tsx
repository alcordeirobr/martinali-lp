import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 ${dark ? 'bg-stone-950 text-stone-300' : 'bg-stone-50 text-stone-600'} ${className}`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default Section;