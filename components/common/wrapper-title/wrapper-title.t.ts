export interface WrapperTitleProps {
  title: string;
  onClass?: string;
  data?: IWrapData[] | [];
  sortData?: any;
}
export interface IWrapData {
  id: number;
  isSubMenu: boolean;
  lang: string;
  link: string;
  name: string;
}
