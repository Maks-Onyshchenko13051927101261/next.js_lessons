import carServices from "@/services/api.config";
import { Metadata } from "next";
import { FC } from "react";

type CarPropsType = {
    params: Promise<{ id: string }>
}

export const generateMetadata = async ({params}: CarPropsType): Promise<Metadata> => {
    const {id} = await params;
    const car = await carServices.getById(id);
    return {
        title: `${car.brand} ${car.year}`,
        description: `Details about the ${car.year} ${car.brand} car`
    };
};
const CarIdPage:FC<CarPropsType> = async ({params}) => {
    const {id} = await params;
    const car = await carServices.getById(id);
    return (
        <div>
            <h1>{car.brand} {car.year}</h1>
            <p>Price: ${car.price}</p>
        </div>
    );
};

export default CarIdPage;