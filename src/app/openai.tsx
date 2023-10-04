import OpenAI from 'openai';
import 'dotenv/config';

export const summarize = async (text: string) => {
  const openai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY });

  const response = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt:
      'Summarize the following abstract for an academic paper: ' +
      text +
      '\n\nSummary: ',
    max_tokens: 256,
    temperature: 0.3,
  });
  return response.choices[0].text;
};
