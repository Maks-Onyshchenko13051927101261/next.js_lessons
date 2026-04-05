import { ICommentModel } from "@/models/ICommentModel";
import { IPostModel } from "@/models/IPostModel";
import { IUserModel } from "@/models/IUserModel";
import createEndpoint from "./api.config";

const allEndpoint = {
    users: createEndpoint<IUserModel>("/users"),
    posts: createEndpoint<IPostModel>("/posts"),
    comments: createEndpoint<ICommentModel>("/comments"),
}

export default allEndpoint;