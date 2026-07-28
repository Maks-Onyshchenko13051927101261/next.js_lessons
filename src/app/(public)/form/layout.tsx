import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Car",
    description: "Create a new car listing"
};

type Props = {
    children: React.ReactNode;
};
const FormLayout = ({ children }: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default FormLayout;