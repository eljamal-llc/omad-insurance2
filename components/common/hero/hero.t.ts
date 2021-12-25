export interface HeroProps {
  data: IData[] | [];
}
export interface IData {
  id: number;
  title: string;
  anons: string;
  text: string;
  image: string;
}
