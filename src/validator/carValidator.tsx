import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi
    .string()
    .pattern(new RegExp("^[a-zA-Za-яА-яёЁіІїЇєЄҐґ]{1,20}$"))
    .messages({ "string.pattern.base": "Invalid brand name" }),
    price: Joi
    .number()
    .min(0)
    .max(1000000)
    .messages({ 
        "number.min": "Price must be a positive number",
        "number.max": "Price limit is 1000000" }),
    year: Joi
    .number()
    .min(1886)
    .max(2026)
    .messages({ 
        "number.min": "Year must be 1986 or later",
        "number.max": "Year must be 2026 or earlier" }),
});