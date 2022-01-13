export interface FooterProps {
};
export interface IMenus {
    id: number;
    isSubMenu: boolean;
    lang: string;
    link: string;
    name: string;
    sub: ISubMenus[];
  }
  export interface ISubMenus {
    lang: string;
    id: number;
    name: string;
    link: string;
  }
  