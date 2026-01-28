
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  // Obtenemos la clave de API desde el entorno configurado en Vite
  const apiKey = process.env.API_KEY;
  
  // Verificación de seguridad de la API Key
  if (!apiKey || apiKey.trim() === "" || apiKey === "undefined") {
    console.warn("Leonardo Chatbot: Operando en modo offline por falta de API_KEY.");
    return "¡Hola! Soy Leonardo. Mi módulo de inteligencia avanzada está en mantenimiento (falta configurar la API_KEY), pero puedo decirte que este curso es la clave para dominar Wall Street. ¿Quieres revisar los módulos conmigo?";
  }

  try {
    // Inicialización siguiendo las reglas de la SDK de Google
    const ai = new GoogleGenAI({ apiKey });
    
    const systemInstruction = `
      Eres 'Leonardo', el Asesor Académico de IA experto del curso 'Invertir en Bolsa de Valores USA'. 
      Tu misión es resolver dudas sobre el curso y motivar a los estudiantes a inscribirse.
      Tono: Sofisticado, profesional, Wall Street Style.
      Información clave: El curso cuesta $499 o $999. Incluye Opciones, SMC, y gestión de riesgo.
      IMPORTANTE: Responde siempre en ESPAÑOL. Sé conciso.
    `;

    // Llamada directa a generateContent como recomienda la documentación
    const result = await ai.models.generateContent({
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
        temperature: 0.8,
        topP: 0.9,
      }
    });

    // Uso de la propiedad .text directamente según el SDK
    const text = result.text;
    return text || "Interesante pregunta. El mercado tiene sus secretos, pero juntos podemos descifrarlos. ¿Qué más quieres saber?";
    
  } catch (error) {
    console.error("Error en Leonardo AI:", error);
    return "Disculpa, hubo una pequeña volatilidad en mi conexión. ¿Podrías repetirme tu duda sobre el curso?";
  }
};
