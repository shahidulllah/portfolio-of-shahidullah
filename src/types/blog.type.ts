
export interface IBlog {
  _id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  createdAt: string;
  author?: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  tags?: string[];
  summary?: string;
}
