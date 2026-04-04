import allEndpoint from "@/services/api.services";
import { useEffect, useState } from "react";
import { UserComponent } from "./UserComponent";
import { IUserModel } from "@/models/IUserModel";

export const UsersComponent = () => {
    const [user, setUser] = useState<IUserModel[]>([]);
    useEffect(() => {
        allEndpoint.users().then(data => setUser(data))
    },[]);
    return (
        <div>{
            user.map(user => (<UserComponent user={user} key={user.id}/>))
        }</div>
    );
};