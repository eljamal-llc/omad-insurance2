export interface NewsProps {
  data?: INewsData[] | [];
}

export interface INewsData {
  slug: string;
  title: string | any ;
  anons: string;
  text: string;
  image: string;
  meta_title: string;
  meta_description: string;
  forms?: any;
  created_at: any;

}
