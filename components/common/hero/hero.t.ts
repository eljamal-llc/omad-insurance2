export interface HeroProps {
  data?: IData[] | [];
}
export interface IData {
  slug: string;
  id: number;
  title: string;
  anons: string;
  text: string;
  image: string;
  url : string
}
