import response from "./api.config";

const allEndpoint = {
    users: response("/users"),
    posts: response("/posts"),
    comments: response("/comments"),
}

export default allEndpoint;