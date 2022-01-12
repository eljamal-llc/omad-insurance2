export interface CardsProps {
  data?: IACardDAta[] | [];
}
export interface IACardDAta {
  id: number;
  title: string;
  icon: string;
  subCategories: ISubCard[] | [];
}

export interface ISubCard {
  id: number;
  title: string;
  slug: string;
}
