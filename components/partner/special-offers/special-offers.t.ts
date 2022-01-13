export interface SpecialOffersProps {
  data?: ISpecialData[] | [];
}
export interface ISpecialData {
  id: number;
  image: string;
  pos: number;
  slug: string;
  text: string;
  title: string;
}
