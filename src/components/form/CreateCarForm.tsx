"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AddCarFormData, addCarSchema } from "../../../lib/schema";
import "../form/formStyle.css";

export const CreateCarForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<AddCarFormData>({
        resolver: zodResolver(addCarSchema),
    });

    const onSubmit = (data: AddCarFormData) => {
        console.log(data);
        // service call to add car && update form
    }

    return (<form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <input type="text" {...register("brand")} placeholder="Brand" />
                {errors.brand && <p>{errors.brand.message}</p>}
        </div>
        <div>
            <input type="number" {...register("price", { valueAsNumber: true })} placeholder="Price" />
                {errors.price && <p>{errors.price.message}</p>}
        </div>
        <div>
            <input type="number" {...register("year", { valueAsNumber: true })} placeholder="Year" />
                {errors.year && <p>{errors.year.message}</p>}
        </div>
        <button type="submit">Add Car</button>
    </form>)
};