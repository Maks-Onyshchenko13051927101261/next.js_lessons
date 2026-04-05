import { IPostModel } from "@/models/IPostModel";
import Link from "next/link";
import { FC } from "react";

type PostPropsType = {
    post: IPostModel,
}
export const PostComponent:FC<PostPropsType> = ({post:{id, title}}) => {
    return (
        <div>
            <Link href={`/posts/${id}`}>Post № {id} - {title}</Link>
        </div>
    );
}