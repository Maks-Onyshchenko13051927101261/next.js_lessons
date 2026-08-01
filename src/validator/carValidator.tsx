import { ICarModel } from "@/models/CarModel";
import Joi from "joi";

export const carValidator = Joi.object<ICarModel>({
    brand: Joi.string()
        .required()
        .pattern(new RegExp("^[a-zA-Za-яА-яёЁіІїЇєЄҐґ]{1,20}$"))
        .messages({
            "string.empty": "Brand is required",
            "any.required": "Brand is required",
            "string.pattern.base": "Invalid brand name (1-20 letters only)",
        }),

    price: Joi.number()
        .required()
        .min(0)
        .max(1000000)
        .messages({
            "number.base": "Price must be a valid number",
            "number.min": "Price must be a positive number",
            "number.max": "Price limit is 1,000,000",
            "any.required": "Price is required",
        }),

    year: Joi.number()
        .required()
        .min(1886)
        .max(new Date().getFullYear())
        .messages({
            "number.base": "Year must be a valid number",
            "number.min": "Year must be 1886 or later",
            "number.max": `Year cannot be in the future`,
            "any.required": "Year is required",
        }),
});