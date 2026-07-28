import { z } from "zod";

export const addCarSchema = z.object({
    brand: z
      .string()
      .regex(
        /^[a-zA-Za-яА-яёЁіІїЇєЄҐґ]{1,20}$/,
        "Your car brand did not match pattern"
    ),
    price: z
      .number({ invalid_type_error: "Price is required" })
      .min(0, "min price is 0")
      .max(1000000, "max price is 1000000"),
    year: z
      .number({ invalid_type_error: "Year is required" })
      .min(1990, "min year is 1990")
      .max(2026, "max year is 2026"),
});

export type AddCarFormData = z.infer<typeof addCarSchema>;