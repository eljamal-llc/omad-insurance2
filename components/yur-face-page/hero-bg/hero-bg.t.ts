export interface HeroBgProps {
  data: IProps[];
}
export interface IProps {
  id: number;
  title: string;
  short_information: string;
  main_image: string;
  bg_image: string;
  type: string;
  description: string;
  cat_id: string;
}
export interface TStyle {
  imgUrl: string;
}
