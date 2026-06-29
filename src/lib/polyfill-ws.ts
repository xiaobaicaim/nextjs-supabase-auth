// Polyfill global WebSocket for Node.js < 22 environments (EdgeOne, etc.)
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ws = require("ws");
  (globalThis as Record<string, unknown>).WebSocket = ws;
} catch {
  // WebSocket not available, supabase auth will fall back
}
