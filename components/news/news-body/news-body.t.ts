export interface NewsBodyProps {
  data?: INewsSingleData | [];
  news?: INewsSingleData;
}
export interface INewsSingleData {
  id: number;
  title: string | any ;
  anons: string;
  text: string;
  image: string;
  meta_title: string;
  meta_description: string;
}
