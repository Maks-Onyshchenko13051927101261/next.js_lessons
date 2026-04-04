import { ICommentModel } from "@/models/ICommentModel"
import { FC } from "react"

type CommentPropsType = {
    comment: ICommentModel,
};
export const CommentComponent:FC<CommentPropsType> = ({comment:{id, body}}) => {
    return (
        <div>{id} - {body}</div>
    );
};