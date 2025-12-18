/**
 * Format date to human readable format
 */
export const formatDate = (date) => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(dateObj);
};

/**
 * Get initials from name (for avatars)
 */
export const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

/**
 * Format Indonesian phone number to WhatsApp link format
 */
export const formatWhatsAppNumber = (phoneNumber) => {
  const digitsOnly = phoneNumber.replace(/\D/g, "");

  if (digitsOnly.startsWith("0")) {
    return "62" + digitsOnly.slice(1);
  }

  if (digitsOnly.startsWith("62")) {
    return digitsOnly;
  }

  return "62" + digitsOnly;
};

/**
 * Generate WhatsApp web link from phone number
 */
export const getWhatsAppLink = (phoneNumber, message) => {
  const formattedNumber = formatWhatsAppNumber(phoneNumber);
  const baseUrl = `https://wa.me/${formattedNumber}`;

  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }

  return baseUrl;
};
