export interface MultiSliderProps {
  data?: ISliderData[] | [];
  link?: string;
}
export interface ButtonProps {
  active: boolean;
}

export interface ISliderData {
  id: number;
  name: string;
  info: string;
  image: string;
  slug: string;
  link: string;
}
