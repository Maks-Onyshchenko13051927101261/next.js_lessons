import Link from "next/link";

const MenuComponent = () => {
    return (
        <ul>
            <li>
                <Link href={"/cars"}>Cars list</Link>
            </li>
            <li>
                <Link href={"/form"}>Create Car</Link>
            </li>
        </ul>
    );
};

export default MenuComponent;