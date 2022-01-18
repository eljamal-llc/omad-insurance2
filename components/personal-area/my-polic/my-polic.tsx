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
import { useTranslation } from "react-i18next";
const MyPolic: FC<MyPolicProps> = () => {
    const {t} = useTranslation()
    return (
        <PersonalAreaBodyBg>
            <GWrapper>
                <PersonalAreaBodyHeading>{t('common:My_insurance_policies')}</PersonalAreaBodyHeading>

                <PersonalAreaBodyCardBody>
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
                </PersonalAreaBodyCardBody>
            </GWrapper>
        </PersonalAreaBodyBg>
    )

}

export default MyPolic  ;
