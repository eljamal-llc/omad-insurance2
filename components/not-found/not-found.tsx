import { FC } from "react";
import {
    NotFoundBg,
    NotFoundBlock,
    NotFound,
    NotFoundText,
    NotFoundInfo,
    NoTbtn
        } from "./not-found.e";
import {CardButton} from '../yur-face-page/CardBlock/CardBlock.e'
import  Link  from "next/Link";
// import { ContactsHomeProps } from "./contacts-home.t";
// import Image from "next/image";
// import HomeIMg from "../../../assets/images/yur-page/singl-yur-img/home-bg-1.png";
// import { GWrapper } from "../../../styles/global-styles.e";
// import  ContImg  from "../../../assets/images/contacts/contact.png";
// import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
const NotFoundPage: FC = () => {
  return (
  <>
    <NotFoundBg>
        <NotFoundBlock>
            <NotFound>404</NotFound>
            <NotFoundText>Страница не найдена</NotFoundText>
            <NotFoundInfo>Неправильно выбран адрес или такой страницы не существует</NotFoundInfo>
            <NoTbtn>
                <Link href={'/'}>
                    <CardButton>Вернутся на главную</CardButton>
                </Link>
            </NoTbtn>
            
        </NotFoundBlock>
    </NotFoundBg>
  </>
  );
};
export default NotFoundPage;
