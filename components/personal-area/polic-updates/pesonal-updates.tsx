import { FC } from "react";
import NextLink from "next/link";
import {PersonalUdatesProps} from './personal-updates.t';
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
import {UptadeSelect} from './pesonal-.updates.e'
import { CardButton } from "../../yur-face-page/CardBlock/CardBlock.e";
const PersonalUdates: FC<PersonalUdatesProps> = () => {
    const [value, setValue] = useState('')
    return (
        <>
        <BodyForm>
            <FormBody>
                <FormHeading>Запрос на продение страхового полиса</FormHeading>
                <PageForm>
                <UptadeSelect onChange={(e) => {setValue(e.target.value)}}>
                        <option value="КАСКО">КАСКО</option>
                        <option selected value="b">КАСКО</option>
                        <option value="КАСКО">КАСКО</option>
                        <option value="КАСКО">КАСКО</option>
                </UptadeSelect>
                <p>
                    <UserInfoInput placeholder="Фамилия, имя и отчество*"/>
                </p>
                    <UserNumber type={'number'} placeholder="Серия и номер страхового полиса"/>
                    {/* <FormMessage placeholder="Сообщение"/> */}
                    <p>
                        <UserNumber placeholder=" Номер теефона" type={'tel '}/>
                        <UserEmail placeholder="Электронная почта"/>
                    </p>
                    <FormMessage placeholder="Сообщение"/>
                    <ButtonBlock>
                        <CardButton>Отправить</CardButton>
                    </ButtonBlock>
                </PageForm>
            </FormBody>
        </BodyForm>
     


        </>

    )

}



export default PersonalUdates;
