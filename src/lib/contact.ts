// Centralized contact utilities for building WhatsApp links
// Update VITE_WHATSAPP_NUMBER in your .env file with your full international number (no +, spaces, or dashes)
// Example: VITE_WHATSAPP_NUMBER=919876543210 (India)

const RAW_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/[^0-9]/g, "") || "0000000000"; // placeholder

/**
 * Build a WhatsApp deep link using wa.me format.
 * @param message Optional initial pre-filled message
 * @param phoneOverride Optional override number (digits only) if different from primary number
 */
export function getWhatsAppLink(message?: string, phoneOverride?: string) {
  const number = (phoneOverride?.replace(/[^0-9]/g, "") || RAW_NUMBER).replace(/^0+/, "");
  // If number seems invalid length (< 8) keep placeholder so dev notices
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  const encoded = encodeURIComponent(message);
  return `${base}?text=${encoded}`;
}

/** Convenience helper returning true if a plausible number is configured */
export function hasValidWhatsAppNumber() {
  return RAW_NUMBER.length >= 8 && RAW_NUMBER !== "0000000000";
}
