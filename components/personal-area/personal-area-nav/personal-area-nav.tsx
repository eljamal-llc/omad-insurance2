import { FC } from "react";
import NextLink from "next/link";
import {PersonalAreaNavProps} from './personal-area-nav.t';
import {HeaderNavBody,
        PersonalAreaUserNav,
        PersonalAreaNavbar,
        PersonalAreaUserNavLi,
        PersonalAreaSettings
        
        } from './pesonal-area-nav.e'
import Link from "next/link";
const PersonalAreaNav: FC<PersonalAreaNavProps> = () => {
    
    return (
        <>
        <HeaderNavBody/>
        <PersonalAreaNavbar>
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
                    <Link href='/personal-area'>Купить полис онлайн</Link>
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
