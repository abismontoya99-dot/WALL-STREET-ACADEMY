
import React from 'react';

declare global {
  interface Window {
    fbq: any;
  }
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}
