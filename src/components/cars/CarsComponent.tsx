"use client";

import { ICarModel } from "@/models/CarModel";
import carServices from "@/services/api.config";
import { useEffect, useState } from "react";
import { CarComponent } from "./CarComponent";
import "./carsStyle.css";

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICarModel[]>([]);
    useEffect(() => {
        carServices.getAllCars().then((cars) => setCars(cars)).catch((error) => console.error(error));
    }, []);

    return (
        <div className="carsVisual">
            {cars.map((car) => (
                <CarComponent key={car.id} car={car} />
            ))}
        </div>
    );
};