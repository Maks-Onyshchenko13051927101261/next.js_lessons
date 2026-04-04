import { IPostModel } from "@/models/IPostModel";
import { FC } from "react";

type PostPropsType = {
    post: IPostModel,
}
export const PostComponent:FC<PostPropsType> = ({post:{id, title}}) => {
    return (
        <div>{id} - {title}</div>
    );
}