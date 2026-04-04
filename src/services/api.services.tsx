import response from "./api.config";
import { IPostModel } from "@/models/IPostModel";
import { IUserModel } from "@/models/IUserModel";
import { ICommentModel } from "@/models/ICommentModel";

const allEndpoint = {
    users: response<IUserModel>("/users"),
    posts: response<IPostModel>("/posts"),
    comments: response<ICommentModel>("/comments"),
}

export default allEndpoint;