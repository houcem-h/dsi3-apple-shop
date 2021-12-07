export interface Course {
  _id: string;
  id: string;
  title: string;
  description: string;
  image: string;
  last_update: string;
  instructor: string;
  language: string;
  price: number;
  goals: string[];
  requirements: string[];
}
