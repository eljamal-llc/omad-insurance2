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
import { useTranslation } from "react-i18next";
const PersonalUdates: FC<PersonalUdatesProps> = () => {
    const {t} = useTranslation()
    const [value, setValue] = useState('')
    return (
        <>
        <BodyForm>
            <FormBody>
                <FormHeading>{t('common:Insurance_renewal_request')}</FormHeading>
                <PageForm>
                <UptadeSelect onChange={(e) => {setValue(e.target.value)}}>
                        <option value="КАСКО">{t('commion:CASCO')}</option>
                        <option selected value="b">{t('commion:CASCO')}</option>
                        <option value="КАСКО">{t('commion:CASCO')}</option>
                        <option value="КАСКО">{t('commion:CASCO')}</option>
                </UptadeSelect>
                <p>
                    <UserInfoInput 
                          id="demo-helper-text-misaligned"
                          placeholder="Иванов Иван Иванович"
                          label={t('common:name_data')}
                    />
                </p>
                    <UserNumber 
                               
                                id="demo-helper-text-misaligned"
                                label={t('common:Insurance_policy_series_and_umber')}
                                />
                    {/* <FormMessage placeholder="Сообщение"/> */}
                    <p>
                        <UserNumber
                            className='myInput'
                            placeholder="998 90 989-89-89"
                            id="demo-helper-text-misaligned"
                            label={t('common:Phone_number')}
                        />
                        <UserEmail 
                              placeholder="status585@mail.ru"
                              id="demo-helper-text-misaligned"
                              label="Email"
                        />
                    </p>
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



export default PersonalUdates;
