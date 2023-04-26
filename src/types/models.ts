export interface IPost {
  id: string;
  // If you want to give a var 2 types then you can do this
  // createdAt: string | number
  createdAt: string;
  // Here question mark states that image is optional 
  image?: string;
  images?: string[];
  video?: string;
  description: string;
  user: IUser;
  nofComments: number;
  nofLikes: number;
  comments: IComment[];
}

export interface IUser {
  id: string;
  username: string;
  image?: string;
  name?: string;
  bio?: string;
  posts?: IPost[];
  website?: string;
}

export interface IComment {
  id: string;
  comment: string;
  user: IUser;
}