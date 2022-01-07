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
import { useTranslation } from "react-i18next";

const UserData: FC<UserDataProps> = () => {
    const {t} = useTranslation()
    const [value, setValue] = useState('')
    return (
        <>
        <BodyForm>
            <FormBody>
                <FormHeading>{t('common:Personal_ata')}</FormHeading>
                <PageForm>
                
                    <p>
                        <UserInfoInput placeholder={t('common:name_data')}/>
                    </p>
                    <p>
                        <UserNumber type={'number'} placeholder={t('common:birth_data')}/>
                    </p>
                    {/* <p>
                        <UserNumber placeholder=" Номер теефона" type={'tel '}/>
                        <UserEmail placeholder="Электронная почта"/>
                    </p> */}
                <FormHeading>{t('common:Personal_ata')}</FormHeading>
                <UptadeSelect onChange={(e) => {setValue(e.target.value)}}>
                        <option selected value="Паспорт гражданина">{t('common:Citizens_passport')}</option>
                        <option  value="Россия">Россия</option>
                        <option value="Узбекистан">Узбекистан</option>
                        <option value="США">США</option>
                </UptadeSelect>
                <SNumber placeholder={t('common:Series_number_pas')}/>
                <p>
                    <UserInfoInput placeholder={t('common:Issued_by')}/>
                    
                </p>
                <p>
                    <UserNumber placeholder={t('common:Date_issue')}/>
                </p>
                <FormHeading>{t('common:Contact_details')}</FormHeading>
                <p>
                    <UserNumber placeholder={t('common:Phone_number')}/>
                    <UserEmail placeholder={t('common:Email')}/>
                    <ButtonAdd> +{t('common:Add')} </ButtonAdd>
                </p>
                <FormHeading>{t('common:Residence_address')}</FormHeading>
                    <UserInfoInput placeholder={t('common:index')}/>
                        <UptadeSelect placeholder="Область" onChange={(e) => {setValue(e.target.value)}}>
                            <option selected value="Область">{t('common:Region')}</option>
                            <option  value="город Ташкент">{t('common:Tashkent_city')}</option>
                            <option value="город Ташкент">{t('common:Tashkent_city')}</option>
                            <option value="город Ташкент">{t('common:Tashkent_city')}</option>
                        </UptadeSelect>
                        <UptadeSelectRayon className="rayon" placeholder="Область" onChange={(e) => {setValue(e.target.value)}}>
                            <option selected value="Область">{t('common:District_city')}</option>
                            <option  value=" Алмазарский район">{t('common:Almazar region')}</option>
                            <option value=" Алмазарский район"> {t('common:Almazar region')}</option>
                            <option value=" Алмазарский район"> {t('common:Almazar region')}</option>
                        </UptadeSelectRayon>
                        <UserInfoInput placeholder={t('common:Street_Quarter')}/>
                        <UserHome placeholder={t('common:House')}/>
                        <UserApartment placeholder={t('common:Apartment')}/>
                        
                        <ButtonBlock>
                            <CardButton>{t('common:Save')}</CardButton>
                        </ButtonBlock>
                </PageForm>
            </FormBody>
        </BodyForm>
     


        </>

    )

}



export default UserData ;
