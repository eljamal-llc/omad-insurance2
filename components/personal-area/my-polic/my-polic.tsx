import { FC, useState } from "react";
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
import { useTranslation } from "react-i18next";
const MyPolic: FC<MyPolicProps> = () => {
    const {t} = useTranslation()
    const [polis , setPolis ] = useState(false)
    return (
        <PersonalAreaBodyBg>
            <GWrapper>
                <PersonalAreaBodyHeading>{t('common:My_insurance_policies')}</PersonalAreaBodyHeading>

                <PersonalAreaBodyCardBody>
                    {polis == false ? (
                    <PersonalAreaBodyCardText> У вас пока  нет  действующих полисов</PersonalAreaBodyCardText>
                        
                    ): (
                    <>
                        <PersonalAreaBodyCard>
                            <PersonalAreaBodyCardHeading>{t('common:My_details')}</PersonalAreaBodyCardHeading>
                            <PersonalAreaBodyCardText>{t('common:info_details_personal_area')}</PersonalAreaBodyCardText>
                            <ButtonCard><CardButton><Link href={'/personal-area'}><a>{t('common:dow')}</a></Link></CardButton></ButtonCard>
                        </PersonalAreaBodyCard>
                        <PersonalAreaBodyCard>
                            <PersonalAreaBodyCardHeading>{t('common:My_insurance_policies')}</PersonalAreaBodyCardHeading>
                            <PersonalAreaBodyCardText>{t('common:infp_ins_polic_List')}</PersonalAreaBodyCardText>
                            <ButtonCard><CardButton><Link href={'/personal-area'}><a>{t('common:dow')}</a></Link></CardButton></ButtonCard>
                        </PersonalAreaBodyCard>
                        <PersonalAreaBodyCard>
                            <PersonalAreaBodyCardHeading>{t('common:buy_online')}</PersonalAreaBodyCardHeading>
                            <PersonalAreaBodyCardText>{t('common:buy_online_info')}</PersonalAreaBodyCardText>
                            <ButtonCard><CardButton><Link href={'/personal-area/buy'}><a>{t('common:dow')}</a></Link></CardButton></ButtonCard>
                        </PersonalAreaBodyCard>
                        <PersonalAreaBodyCard>
                            <PersonalAreaBodyCardHeading>{t('common:renew_policy')}</PersonalAreaBodyCardHeading>
                            <PersonalAreaBodyCardText>{t('common:renew_policy_INFO')}</PersonalAreaBodyCardText>
                            <PersonalAreaBodyCardText>{t('common:renew_policy_INFO22')}</PersonalAreaBodyCardText>
                            <ButtonCard><CardButton><Link href={'/personal-area'}><a>{t('common:dow')}</a></Link></CardButton></ButtonCard>
                        </PersonalAreaBodyCard>
                        <PersonalAreaBodyCard>
                            <PersonalAreaBodyCardHeading>{t('common:settings')}</PersonalAreaBodyCardHeading>
                            <PersonalAreaBodyCardText>{t('common:settings_info  ')}</PersonalAreaBodyCardText>
                            <ButtonCard><CardButton><Link href={'/personal-area'}><a>{t('common:dow')}</a></Link></CardButton></ButtonCard>
                        </PersonalAreaBodyCard>
                    </>
                )}
                        
                </PersonalAreaBodyCardBody>
            </GWrapper>
        </PersonalAreaBodyBg>
    )

}

export default MyPolic  ;


// ved eta moya vecheriinkaaaaa 
// odna i taje plostinkaaaaa
// ved eta moya vecherinkaaa
// 33 suki oni ne ulibayutsa
// ni 1 iz nih mne ne nyjna rezinkaaa
//oooooo eta moyaa vecherinka!!!!!!