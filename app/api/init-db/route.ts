import { initializeDatabase } from '@/lib/database';

export async function GET() {
  try {
    await initializeDatabase();
    return new Response('Database initialized successfully');
  } catch (err) {
    console.error('Init error:', err);
    return new Response('Database init failed', { status: 500 });
  }
}
