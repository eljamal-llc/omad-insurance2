export interface WantKnowProps {
  data: IDataWantKnow[] | [];
}

export interface IStyledProps {
  top: number;
}

export interface IDataWantKnow {
  id: number;
  title: string;
  text: string;
  image: string;
  slug: string;
}
