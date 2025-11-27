import React from 'react';

export interface FormData {
  fullName: string;
  company: string;
  role: string;
  email: string;
  instagram: string;
  currentMoment: string;
  budget: string;
  goals: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}