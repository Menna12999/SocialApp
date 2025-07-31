declare type PostType ={
    id:string;
    createdAt:string;
    image:string;
    body:string;
    comments:CommentType[];
    user:User;
}

declare type userType ={
    _id:string,
    name:string,
    photo:string
}

declare type CommentType ={
    _id:string,
    content:string,
    commentCreator:User,
    post:string,
    createAt:string
}

declare type postProps ={
    postDetails:PostType,
    moreComments?:boolean,
}
