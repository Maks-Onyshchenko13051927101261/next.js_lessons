import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CarIdLayout metadata"
};

type Props = {children: React.ReactNode};
const CarIdLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default CarIdLayout;