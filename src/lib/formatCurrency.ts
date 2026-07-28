/**
 * Formats a COP amount as a Colombian-peso string, e.g. 33900 → "$33.900".
 * Single source of price formatting for the whole app.
 */
export function formatCOP(amount: number): string {
  return `$${amount.toLocaleString('es-CO')}`;
}
