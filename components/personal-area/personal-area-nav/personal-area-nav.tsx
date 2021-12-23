import { FC } from "react";
import NextLink from "next/link";
import {PersonalAreaNavProps} from './personal-area-nav.t';
import {HeaderNavBody,
        PersonalAreaUserNav,
        PersonalAreaNavbar,
        PersonalAreaUserNavLi,
        PersonalAreaSettings,
        NavBurger
        
        } from './pesonal-area-nav.e'
import { slide as Menu } from 'react-burger-menu'
import PersonalNavBurger from '../../common/personal-nav-burger/pesonal-nav-burger'
const PersonalAreaNav: FC<PersonalAreaNavProps> = () => {
    
    return (
        <>
        <HeaderNavBody/>
        <PersonalAreaNavbar>
            <NavBurger>
              <PersonalNavBurger/>
            </NavBurger>
            
            <PersonalAreaUserNav>
                <PersonalAreaUserNavLi>
                    <NextLink href='/personal-area/info'>Информация</NextLink>
                </PersonalAreaUserNavLi>
                <PersonalAreaUserNavLi>
                    <NextLink href='/personal-area/user-data'>Мои данные</NextLink>
                </PersonalAreaUserNavLi>
                <PersonalAreaUserNavLi>
                    <NextLink href='/personal-area/my-polic'>Мои страховые полиса</NextLink>
                </PersonalAreaUserNavLi>
                <PersonalAreaUserNavLi>
                    <NextLink href='/personal-area/buy'>Купить полис онлайн</NextLink>
                </PersonalAreaUserNavLi>
                <PersonalAreaUserNavLi>
                    <NextLink href='/personal-area/polic-updates'>Продлить полис онлайн</NextLink>
                </PersonalAreaUserNavLi>
            </PersonalAreaUserNav>
            <PersonalAreaSettings> <NextLink href='/personal-area/settings'>настройки</NextLink></PersonalAreaSettings>
        </PersonalAreaNavbar>


        </>

    )

}

export default PersonalAreaNav;
