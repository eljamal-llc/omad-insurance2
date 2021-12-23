import { FC } from "react";
import NextLink from "next/link";
import {SettingsProps} from './pesronal-settings.t';
import { useState } from "react";
import {
        BodyForm,
        FormBody,
        FormHeading,
        UserInfoInput,
        ButtonAdd,
        ButtonBlock,
        PageForm
        
        
        } from '../personal-buy/pesonal-buy.e'
import { CardButton } from "../../yur-face-page/CardBlock/CardBlock.e";
const Settings: FC<SettingsProps> = () => {
    return (
        <>
        <BodyForm>
            <FormBody>
                <PageForm>
                    <FormHeading>Изменить пароль</FormHeading>
                    <UserInfoInput type={'password'} placeholder="Введите новый пароль"/>
                    <br/><br/>
                    <UserInfoInput type={'password'} placeholder="Подтвердить новый пароль"/>
                </PageForm>
                <ButtonBlock>
                        <CardButton>Отправить</CardButton>
                    </ButtonBlock>
            </FormBody>
        </BodyForm>
     


        </>

    )

}



export default Settings ;
