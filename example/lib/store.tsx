import { createContext, useContext, useState, ReactNode } from 'react';

export interface FontTemplate {
  id: string;
  name: string;
  component: string;
}

interface FontState {
  templates: FontTemplate[];
  selectedTemplate: FontTemplate | null;
  setSelectedTemplate: (template: FontTemplate) => void;
}

const FontContext = createContext<FontState | undefined>(undefined);

export const useFontStore = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error('useFontStore must be used within FontProvider');
  }
  return context;
};

interface FontProviderProps {
  children: ReactNode;
}

export const FontProvider = ({ children }: FontProviderProps) => {
  const [templates] = useState<FontTemplate[]>([
    { id: 'neon-1', name: 'Neon', component: 'NeonText' },
    { id: 'showgirl-1', name: 'ShowGirl', component: 'ShowGirlText' },
    { id: 'glow-1', name: 'Glowing', component: 'GlowingText' },
    { id: 'spotlight-1', name: 'Spotlight', component: 'SpotlightText' },
    { id: 'gradient-1', name: 'Gradient', component: 'GradientText' },
    { id: 'curvedloop-1', name: 'CurvedLoop', component: 'CurvedLoopText' },
    { id: 'fire-1', name: 'Fire', component: 'FireText' },
    { id: 'retro-1', name: 'Retro 80s', component: 'RetroText' },
    { id: 'gold-1', name: '3D Gold', component: 'GoldText' },
    { id: 'luxury-1', name: 'Luxury', component: 'LuxuryText' },
    { id: 'birthday-1', name: 'Birthday', component: 'BirthdayText' },
    { id: 'womanday-1', name: 'Woman Day', component: 'WomanDayText' },
    { id: 'teacherday-1', name: 'Teacher Day', component: 'TeacherDayText' },
    { id: 'party-1', name: 'Party', component: 'PartyText' },
  ]);

  const [selectedTemplate, setSelectedTemplate] = useState<FontTemplate | null>(null);

  return (
    <FontContext.Provider value={{ templates, selectedTemplate, setSelectedTemplate }}>
      {children}
    </FontContext.Provider>
  );
};
