import { FC } from "react";
import NextLink from "next/link";
import {
    PersonalAreaBodyBg,
    PersonalAreaBodyHeading,
    PersonalAreaBodyCardBody,
    PersonalAreaBodyCard,
    PersonalAreaBodyCardHeading,
    PersonalAreaBodyCardText,
    ButtonCard,
    
}   from '../personal-area-info/personal-area-info.e'
import{ MyPolicProps} from './my-polic.t'
import {CardButton} from '../../yur-face-page/CardBlock/CardBlock.e'
import { GWrapper } from "../../../styles/global-styles.e";
import Link from "next/link";
const MyPolic: FC<MyPolicProps> = () => {
    
    return (
        <PersonalAreaBodyBg>
            <GWrapper>
                <PersonalAreaBodyHeading>Мои страховые полиса</PersonalAreaBodyHeading>

                <PersonalAreaBodyCardBody>
                        <PersonalAreaBodyCard>
                            <PersonalAreaBodyCardHeading>Мои данные</PersonalAreaBodyCardHeading>
                            <PersonalAreaBodyCardText>В данном разделе вам нужно указать личные данные, которые будут использоваться в дальнейшем для  процесса покупки страхового полиса</PersonalAreaBodyCardText>
                            <ButtonCard><CardButton><Link href={'/personal-area'}><a>Подробнее</a></Link></CardButton></ButtonCard>
                        </PersonalAreaBodyCard>
                        <PersonalAreaBodyCard>
                            <PersonalAreaBodyCardHeading>Мои страховые полиса</PersonalAreaBodyCardHeading>
                            <PersonalAreaBodyCardText>Список приобретенных электронных страховых полисов</PersonalAreaBodyCardText>
                            <ButtonCard><CardButton><Link href={'/personal-area'}><a>Подробнее</a></Link></CardButton></ButtonCard>
                        </PersonalAreaBodyCard>
                        <PersonalAreaBodyCard>
                            <PersonalAreaBodyCardHeading>Купить полис онлайн</PersonalAreaBodyCardHeading>
                            <PersonalAreaBodyCardText>в данном разделе вы можете приобрести полиса онлайн. Просто заполните форму и наш сотрудник мгновенно свяжется с вами</PersonalAreaBodyCardText>
                            <ButtonCard><CardButton><Link href={'/personal-area/buy'}><a>Подробнее</a></Link></CardButton></ButtonCard>
                        </PersonalAreaBodyCard>
                        <PersonalAreaBodyCard>
                            <PersonalAreaBodyCardHeading>Продлить полис онлайн</PersonalAreaBodyCardHeading>
                            <PersonalAreaBodyCardText>Срок действия страхового полиса истёк? Не беда! Отправьте нам заявку на продление действия страхового полиса онлайн.</PersonalAreaBodyCardText>
                            <PersonalAreaBodyCardText>Отправка заявки на продление страхового полиса. Обратная связь c “OMAD SUG’URTA”</PersonalAreaBodyCardText>
                            <ButtonCard><CardButton><Link href={'/personal-area'}><a>Подробнее</a></Link></CardButton></ButtonCard>
                        </PersonalAreaBodyCard>
                        <PersonalAreaBodyCard>
                            <PersonalAreaBodyCardHeading>Настройки</PersonalAreaBodyCardHeading>
                            <PersonalAreaBodyCardText>в данном разделе есть возможность поменть пароль на личный кабинет</PersonalAreaBodyCardText>
                            <ButtonCard><CardButton><Link href={'/personal-area'}><a>Подробнее</a></Link></CardButton></ButtonCard>
                        </PersonalAreaBodyCard>
                </PersonalAreaBodyCardBody>
            </GWrapper>
        </PersonalAreaBodyBg>
    )

}

export default MyPolic  ;
