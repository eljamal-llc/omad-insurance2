export interface SaleProps {
  data?: ISaleData[] | [];
}

export interface ISaleData {
  id: number;
  title: string;
  text: string;
  image: string;
  slug: string;
}
