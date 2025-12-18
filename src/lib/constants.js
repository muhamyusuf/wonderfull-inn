/**
 * Route constants for navigation
 */
export const ROUTES = {
  HOME: "/",
  PACKAGES: "/packages",
  ABOUT: "/about",
  CONTACT: "/contact",
  HELP: "/help",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  PROFILE: "/profile",
  TOURIST_DASHBOARD: "/dashboard/tourist",
  AGENT_DASHBOARD: "/dashboard/agent",
  BOOKING: (id) => `/book/${id}`,
  PACKAGE_DETAIL: (id) => `/package/${id}`,
  ALL_BOOKINGS: "/bookings",
  MANAGE_PACKAGES: "/manage-packages",
  CREATE_PACKAGE: "/create-package",
  EDIT_PACKAGE: (id) => `/edit-package/${id}`,
  BOOKING_SUCCESS: "/booking-success",
};

/**
 * API Configuration
 */
export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:6543";
export const API_TIMEOUT = 10000; // 10 seconds
