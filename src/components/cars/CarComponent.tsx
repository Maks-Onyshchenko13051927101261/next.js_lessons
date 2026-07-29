import { ICarModel } from "@/models/CarModel";
import { FC } from "react";
import "./carsStyle.css";

type CarsPropsType = {
    car: ICarModel;
};

export const CarComponent:FC<CarsPropsType> = ({car:{brand, price, year}}) => {
    return (
        <div className="carsCard">
            <h2>Brand: {brand}</h2>
            <p>Price: ${price}</p>
            <p>Year: {year}</p>
        </div>
    )
};