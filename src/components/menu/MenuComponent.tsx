import Link from "next/link";
import "../menu/menu.css";

const MenuComponent = () => {
    return (
        <div>
            <ul className="menu-list">
                 <li>
                    <Link href={"/"}>Home</Link>
                 </li>
                 <li>
                    <Link href={"/users"}>Users</Link>
                 </li>
                 <li>
                    <Link href={"/posts"}>Posts</Link>
                 </li>
                 <li>
                    <Link href={"/comments"}>Comments</Link>
                 </li>
            </ul>
        </div>
    );
};

export default MenuComponent;