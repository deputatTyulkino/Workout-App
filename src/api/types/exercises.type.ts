type TCategory = {
  id: number;
  name: string;
  description: string;
  icon_name: string;
};

export type TExercise = {
  id: number;
  name: string;
  repeat: number;
  category: TCategory;
};
