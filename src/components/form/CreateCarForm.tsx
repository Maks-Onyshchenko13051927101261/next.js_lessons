"use client";

// import carServices from "@/services/api.config";
import { ICarModel } from "@/models/CarModel";
import { carValidator } from "@/validator/carValidator";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import "../form/formStyle.css";

export const CreateCarForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<ICarModel>({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    const onSubmit = async (data: ICarModel) => {
        try {
            // await carServices.addCar(data);
            console.log(data);
            reset();
            alert("Car added successfully!");
        } catch (error) {
            alert("Failed to add car.");
            console.error("Error adding car:", error);
        };
    };

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