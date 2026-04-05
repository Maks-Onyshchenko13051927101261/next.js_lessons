import { ICommentModel } from "@/models/ICommentModel";
import Link from "next/link";
import { FC } from "react";

type CommentPropsType = {
    comment: ICommentModel,
};
export const CommentComponent:FC<CommentPropsType> = ({comment:{id, body}}) => {
    return (
        <div>
            <Link href={`/comments/${id}`}>Id:№{id} - {body}</Link>
        </div>
    );
};