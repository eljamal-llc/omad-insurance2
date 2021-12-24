import { FC } from "react";
import NextLink from "next/link";
import {UserDataProps} from './user-data.t';
import { useState } from "react";
import {
        BodyForm,
        FormBody,
        FormHeading,
        PageForm,
        UserInfoInput,
        UserNumber,
        UserEmail,
        ButtonAdd,
        FormMessage,
        ButtonBlock
        
        } from '../personal-buy/pesonal-buy.e'
import {SNumber,UserHome,UserApartment} from './user-data.e'
import {UptadeSelect,UptadeSelectRayon} from '../polic-updates/pesonal-.updates.e'
import { CardButton } from "../../yur-face-page/CardBlock/CardBlock.e";
const UserData: FC<UserDataProps> = () => {
    const [value, setValue] = useState('')
    return (
        <>
        <BodyForm>
            <FormBody>
                <FormHeading>Персональные данные</FormHeading>
                <PageForm>
                
                    <p>
                        <UserInfoInput placeholder="Фамилия, имя и отчество*"/>
                    </p>
                    <p>
                        <UserNumber type={'number'} placeholder="Дата рождения"/>
                    </p>
                    {/* <p>
                        <UserNumber placeholder=" Номер теефона" type={'tel '}/>
                        <UserEmail placeholder="Электронная почта"/>
                    </p> */}
                <FormHeading>Персональные данные</FormHeading>
                <UptadeSelect onChange={(e) => {setValue(e.target.value)}}>
                        <option selected value="Паспорт гражданина">Паспорт гражданина</option>
                        <option  value="Россия">Россия</option>
                        <option value="Узбекистан">Узбекистан</option>
                        <option value="США">США</option>
                </UptadeSelect>
                <SNumber placeholder="Серия и номер*"/>
                <p>
                    <UserInfoInput placeholder="Кем выдан"/>
                    
                </p>
                <p>
                    <UserNumber placeholder="Дата Выдачи*"/>
                </p>
                <FormHeading>Контактные данные</FormHeading>
                <p>
                    <UserNumber placeholder="Номер теефона"/>
                    <UserEmail placeholder="Электронная почта"/>
                    <ButtonAdd> + Добавить</ButtonAdd>
                </p>
                <FormHeading>Адрес проживания</FormHeading>
                    <UserInfoInput placeholder="Индекс"/>
                        <UptadeSelect placeholder="Область" onChange={(e) => {setValue(e.target.value)}}>
                            <option selected value="Область">Область</option>
                            <option  value="город Ташкент">город Ташкент</option>
                            <option value="город Ташкент">город Ташкент</option>
                            <option value="город Ташкент">город Ташкент</option>
                        </UptadeSelect>
                        <UptadeSelectRayon className="rayon" placeholder="Область" onChange={(e) => {setValue(e.target.value)}}>
                            <option selected value="Область">Район/город</option>
                            <option  value=" Алмазарский район">Алмазарский район</option>
                            <option value=" Алмазарский район"> Алмазарский район</option>
                            <option value=" Алмазарский район"> Алмазарский район</option>
                        </UptadeSelectRayon>
                        <UserInfoInput placeholder="Улица/Квартал"/>
                        <UserHome placeholder="Дом"/>
                        <UserApartment placeholder="Квартира"/>
                        
                        <ButtonBlock>
                            <CardButton>Сохранить</CardButton>
                        </ButtonBlock>
                </PageForm>
            </FormBody>
        </BodyForm>
     


        </>

    )

}



export default UserData ;
