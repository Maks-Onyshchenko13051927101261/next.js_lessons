import { ICarModel } from "@/models/CarModel";
import { FC } from "react";

type CarsPropsType = {
    car: ICarModel;
};

export const CarComponent:FC<CarsPropsType> = ({car:{brand, price, year}}) => {
    return (
        <div>
            <h2>Brand: {brand}</h2>
            <p>Price: ${price}</p>
            <p>Year: {year}</p>
        </div>
    )
};