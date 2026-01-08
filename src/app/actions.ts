// @ts-nocheck
'use server';

import { estimatePrice, type PriceEstimationInput, type PriceEstimationOutput } from '@/ai/flows/instant-price-estimation';

export async function getInstantPriceEstimation(
  data: PriceEstimationInput
): Promise<{ data: PriceEstimationOutput | null; error: string | null }> {
  try {
    const result = await estimatePrice(data);
    return { data: result, error: null };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { data: null, error: `Failed to get price estimation: ${errorMessage}` };
  }
}
