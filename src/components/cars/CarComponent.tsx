import { ICarModel } from "@/models/CarModel";
import Link from "next/link";
import { FC } from "react";
import "./carsStyle.css";

type CarsPropsType = {
    car: ICarModel;
};

export const CarComponent:FC<CarsPropsType> = ({car:{id, brand, price, year}}) => {
    return (
        <div className="carsCard">
            <h2>
                <Link href={`/cars/${id}`}> Brand: {brand} </Link>
            </h2>
            <p>Price: ${price}</p>
            <p>Year: {year}</p>
        </div>
    )
};