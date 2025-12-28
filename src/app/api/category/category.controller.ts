import { Category } from "./category.model";

export const getCategories = async (req: Request, res: Response) => {
  const categories = await Category.find();
  res.json(categories);
};
