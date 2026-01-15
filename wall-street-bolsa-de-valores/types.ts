
// Fix: Import React to resolve 'Cannot find namespace React' error when using React.ReactNode
import React from 'react';

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
