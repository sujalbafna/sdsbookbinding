'use server';

/**
 * @fileOverview An AI agent to provide instant price estimations for book binding services.
 *
 * - estimatePrice - A function that estimates the price based on binding options.
 * - PriceEstimationInput - The input type for the estimatePrice function.
 * - PriceEstimationOutput - The return type for the estimatePrice function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PriceEstimationInputSchema = z.object({
  documentType: z.string().describe('The type of document to be bound (e.g., thesis, report, manual).'),
  pageCount: z.number().describe('The number of pages in the document.'),
  paperType: z.string().describe('The type of paper (e.g., standard, glossy, archival).'),
  coverMaterial: z.string().describe('The material for the cover (e.g., softcover, hardcover, leather).'),
  bindingStyle: z.string().describe('The style of binding (e.g., perfect bind, spiral bind, case bind).'),
  quantity: z.number().describe('The number of copies to be bound.'),
  estimatedAvailability: z.string().describe('The estimated availability of the selected options (e.g., high, medium, low)'),
});
export type PriceEstimationInput = z.infer<typeof PriceEstimationInputSchema>;

const PriceEstimationOutputSchema = z.object({
  estimatedPrice: z.number().describe('The estimated price for the binding job.'),
  currency: z.string().describe('The currency of the estimated price (e.g., USD).'),
  breakdown: z.string().describe('A breakdown of the costs involved (e.g., printing, binding, materials).'),
});
export type PriceEstimationOutput = z.infer<typeof PriceEstimationOutputSchema>;

export async function estimatePrice(input: PriceEstimationInput): Promise<PriceEstimationOutput> {
  return estimatePriceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'priceEstimationPrompt',
  input: {schema: PriceEstimationInputSchema},
  output: {schema: PriceEstimationOutputSchema},
  prompt: `You are a pricing expert for a book binding service. Estimate the price for the following binding job, taking into account real-time availability. Return the price, currency, and a breakdown of the costs.

Document Type: {{{documentType}}}
Page Count: {{{pageCount}}}
Paper Type: {{{paperType}}}
Cover Material: {{{coverMaterial}}}
Binding Style: {{{bindingStyle}}}
Quantity: {{{quantity}}}
Estimated Availability: {{{estimatedAvailability}}}

Consider the estimatedAvailability when determining a final price. If availability is low for certain resources, increase the final price to reflect increased costs.

Output the estimated price as a number.`,
});

const estimatePriceFlow = ai.defineFlow(
  {
    name: 'estimatePriceFlow',
    inputSchema: PriceEstimationInputSchema,
    outputSchema: PriceEstimationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
