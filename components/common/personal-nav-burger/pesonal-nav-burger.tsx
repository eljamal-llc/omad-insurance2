import { FC } from "react";
import NextLink from "next/link";
import {CardButton} from '../../yur-face-page/CardBlock/CardBlock.e'
import { GWrapper } from "../../../styles/global-styles.e";
import Link from "next/link";
// import './styles.css'
const PersonalNavBurger: FC = () => {
    
    return (
        <>

<div className="a-header">
		<input type="checkbox" name="main-nav" id="main-nav" className="burger-check"/>
		<label htmlFor="main-nav" className="burger menu"><span></span></label>
		<ul>
			<li>
				<Link href={'/personal-area'}>
					<a 	 className="active">Информация</a>
				</Link>
			</li>
			<li>
				<Link href={'/personal-area'}>
					<a 	 className="active">Мои данные</a>
				</Link>
			</li>
			<li>
				<Link href={'/personal-area'}>
					<a 	 className="active">Мои страховые полиса</a>
				</Link>
			</li>
			<li>
				<Link href={'/personal-area/buy'}>
					<a 	 className="active">Купить полис онлайн</a>
				</Link>
			</li>
			<li>
				<Link href={'/personal-area'}>
					<a 	 className="active">Продлить полис онлайн </a>
				</Link>
			</li>
			<li>
				<Link href={'/personal-are'}>
					<a 	 className="active">настройки</a>
				</Link>
			</li>
					
					
	</ul>
</div>
        </>
      
    )

}

export default PersonalNavBurger;
