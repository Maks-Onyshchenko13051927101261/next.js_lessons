"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AddCarFormData, addCarSchema } from "../../../lib/schema";

export const CreateCarForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<AddCarFormData>({
        resolver: zodResolver(addCarSchema),
    });

    const onSubmit = (data: AddCarFormData) => {
        console.log(data);
    }

    return (<form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("brand")} placeholder="Brand" />
        {errors.brand && <p>{errors.brand.message}</p>}
        <input type="number" {...register("price", { valueAsNumber: true })} placeholder="Price" />
        {errors.price && <p>{errors.price.message}</p>}
        <input type="number" {...register("year", { valueAsNumber: true })} placeholder="Year" />
        {errors.year && <p>{errors.year.message}</p>}
        <button type="submit">Add Car</button>
    </form>)
};