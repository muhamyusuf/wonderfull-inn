import { z } from "zod";

// Package Schema - used by create/edit package pages
export const packageSchema = z.object({
  name: z
    .string()
    .min(1, "Package name is required")
    .min(5, "Package name must be at least 5 characters")
    .max(100, "Package name must not exceed 100 characters"),
  destinationId: z.string().min(1, "Please select a destination"),
  duration: z
    .number()
    .min(1, "Duration must be at least 1 day")
    .max(30, "Duration cannot exceed 30 days"),
  price: z.number().min(1, "Price must be greater than 0").max(1000000, "Price seems too high"),
  itinerary: z
    .string()
    .min(1, "Itinerary is required")
    .min(20, "Please provide a detailed itinerary (at least 20 characters)"),
  maxTravelers: z
    .number()
    .min(1, "At least 1 traveler must be allowed")
    .max(50, "Maximum 50 travelers allowed"),
  contactPhone: z
    .string()
    .min(1, "Contact phone number is required")
    .regex(
      /^(\+?62|0)\d{8,13}$/,
      "Please enter a valid Indonesian phone number (e.g., +628123456789 or 08123456789)"
    ),
  images: z
    .array(z.string())
    .min(1, "At least one image is required")
    .max(10, "Maximum 10 images allowed"),
});

// Review Schema - used by review form component
export const reviewSchema = z.object({
  rating: z
    .number()
    .min(1, "Rating must be at least 1 star")
    .max(5, "Rating cannot exceed 5 stars"),
  comment: z
    .string()
    .min(1, "Review comment is required")
    .min(10, "Please provide a more detailed review (at least 10 characters)")
    .max(500, "Review must not exceed 500 characters"),
});
