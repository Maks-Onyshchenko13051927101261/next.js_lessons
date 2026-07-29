import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cars",
    description: "List of all available cars"
};

type Props = { children: React.ReactNode };
const CarsLayout = ({ children }: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default CarsLayout;