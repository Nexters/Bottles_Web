'use server';

export async function logAction(message: string): Promise<void> {
  console.log('[LOG]:', message);
}
