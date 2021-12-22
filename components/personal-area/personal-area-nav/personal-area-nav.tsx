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
import Link from "next/link";
import { slide as Menu } from 'react-burger-menu'
import PersonalNavBurger from '../../common/personal-nav-burger/pesonal-nav-burger'
const PersonalAreaNav: FC<PersonalAreaNavProps> = () => {
    
    return (
        <>
        <HeaderNavBody/>
        <PersonalAreaNavbar>
            <NavBurger>
              <PersonalNavBurger>
                  
              </PersonalNavBurger>
            </NavBurger>
            
            <PersonalAreaUserNav>
                <PersonalAreaUserNavLi>
                    <Link href='/personal-area'>Информация</Link>
                </PersonalAreaUserNavLi>
                <PersonalAreaUserNavLi>
                    <Link href='/personal-area'>Мои данные</Link>
                </PersonalAreaUserNavLi>
                <PersonalAreaUserNavLi>
                    <Link href='/personal-area'>Мои страховые полиса</Link>
                </PersonalAreaUserNavLi>
                <PersonalAreaUserNavLi>
                    <Link href='/personal-area/buy'>Купить полис онлайн</Link>
                </PersonalAreaUserNavLi>
                <PersonalAreaUserNavLi>
                    <Link href='/personal-area'>Продлить полис онлайн</Link>
                </PersonalAreaUserNavLi>
            </PersonalAreaUserNav>
            <PersonalAreaSettings> <Link href='/personal-area'>настройки</Link></PersonalAreaSettings>
        </PersonalAreaNavbar>


        </>

    )

}

export default PersonalAreaNav;
