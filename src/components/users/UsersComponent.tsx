import allEndpoint from "@/services/api.services";
import { UserComponent } from "./UserComponent";
import useFetch from "@/services/fetchHooks";
// "use client";

export const UsersComponent = () => {
    const {loading, error, data: users} = useFetch(allEndpoint.users)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Somthing wrong</p>
    return (
        <div>{
            users.map(user => (<UserComponent user={user} key={user.id}/>))
        }</div>
    );
};