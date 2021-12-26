export interface MultiSliderProps {
  data?: ISliderData[] | [];
}
export interface ButtonProps {
  active: boolean;
}

export interface ISliderData {
  id: number;
  title: string;
  info: [];
  main_image: string;
  slug: string;
}
