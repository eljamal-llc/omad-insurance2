import { FC } from "react";
import NextLink from "next/link";
import {PersonalBuyProps} from './personal-buy.t';
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
        
        } from './pesonal-buy.e'
import { CardButton } from "../../yur-face-page/CardBlock/CardBlock.e";
import { useTranslation } from "react-i18next";
const BuyPolis: FC<PersonalBuyProps> = () => {
    const {t} = useTranslation()
    return (
        <>
        <BodyForm>
            <FormBody>
                <FormHeading>{t('common:contact_us')}</FormHeading>
                <PageForm>
                    <UserInfoInput type={'text'}  placeholder={t('common:name_data')}/>
                    <UserNumber placeholder={t('common:Phone_number')}/ >
                    <UserEmail placeholder={t('common:Email')}/>
                    <ButtonAdd>+ {t('common:Add')}</ButtonAdd>
                    <FormMessage placeholder={t('common:Message')}/>
                    <ButtonBlock>
                        <CardButton>{t('common:send')}</CardButton>
                    </ButtonBlock>
                </PageForm>
            </FormBody>
        </BodyForm>
     


        </>

    )

}

export default BuyPolis;
