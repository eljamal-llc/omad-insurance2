export interface NewsProps {
  data?: INewsData[] | [];
}

export interface INewsData {
  id: number;
  title: string;
  anons: string;
  text: string;
  image: string;
  meta_title: string;
  meta_description: string;
}
