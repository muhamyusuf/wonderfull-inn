import { API_BASE_URL } from "./constants";

/**
 * Get the full image URL from a relative path
 */
export function getImageUrl(imagePath) {
  if (!imagePath) {
    return "/placeholder-image.jpg";
  }

  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  if (imagePath.startsWith("/")) {
    return `${API_BASE_URL}${imagePath}`;
  }

  return `${API_BASE_URL}/${imagePath}`;
}
