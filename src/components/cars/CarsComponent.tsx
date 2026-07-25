"use client";

import { ICarModel } from "@/models/CarModel";
import carServices from "@/services/api.config";
import { useEffect, useState } from "react";
import { CarComponent } from "./CarCmponent";

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICarModel[]>([]);
    useEffect(() => {
        carServices.getAllCars().then((cars) => setCars(cars));
    }, []);

    return (
        <div>
            <h1>Cars</h1>
            {cars.map((car) => (
                <CarComponent key={car.id} car={car} />
            ))}
        </div>
    );
};