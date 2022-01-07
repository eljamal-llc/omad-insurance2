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
import { useTranslation } from "react-i18next";
const Settings: FC<SettingsProps> = () => {
    const {t} = useTranslation()
    return (
        <>
        <BodyForm>
            <FormBody>
                <PageForm>
                    <FormHeading>{t('common:Change_Password')}</FormHeading>
                    <UserInfoInput type={'password'} placeholder={t('common:Enter_new_password')}/>
                    <br/><br/>
                    <UserInfoInput type={'password'} placeholder={t('common:Confirm_new_password')}/>
                </PageForm>
                <ButtonBlock>
                        <CardButton>{t('common:send')}</CardButton>
                    </ButtonBlock>
            </FormBody>
        </BodyForm>
     


        </>

    )

}



export default Settings ;
