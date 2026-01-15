
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    Eres 'Jordan', el Asesor Académico de IA para 'Wall Street Academy'. 
    Tu tono es profesional, alentador y altamente conocedor del Mercado de Valores de EE. UU. (S&P 500, Nasdaq, análisis técnico, análisis fundamental).
    El curso cuesta $499 (Premium) o $999 (Elite VIP).
    Temas cubiertos: Opciones, Swing Trading, Day Trading, inversión a largo plazo.
    Mantén las respuestas concisas y útiles. Habla siempre en ESPAÑOL. Usa emojis de forma moderada pero efectiva 📈.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({
          role: h.role,
          parts: [{ text: h.text }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text || "Lo siento, tengo problemas para procesar tu solicitud. ¿Podrías repetir eso?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Encontré un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.";
  }
};
