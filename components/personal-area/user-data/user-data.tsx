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
    const [add , isAdd] = useState('')
    const [addButt , setAddBut] = useState('yes')
     const AddHand = () =>{
        isAdd('addet')
        setAddBut('')
    }
    const RemoveBtn = () =>{
        isAdd('')
        setAddBut('yes')
    }
    return (
        <>
        <BodyForm>
            <FormBody>
                <FormHeading>{t('common:Personal_ata')}</FormHeading>
                <PageForm>
                
                    <p>
                    <UserInfoInput
                        // id="demo-helper-text-misaligned"
                        placeholder="Иванов Иван Иванович"
                        label={t('common:name_data')}
                        />
                    </p>
                    <p>
                    <UserNumber
                        className='myInput'
                        placeholder="03/03/1999"
                        // id="demo-helper-text-misaligned"
                        label={t('common:birth_data')}
                        
                        />
                    </p>
                    {/* <p>
                        <UserNumber placeholder=" Номер теефона" type={'tel '}/>
                        <UserEmail placeholder="Электронная почта"/>
                    </p> */}
                <FormHeading>{t('common:Personal_ata')}</FormHeading>
                <UptadeSelect onChange={(e) => {setValue(e.target.value)}}>
                        <option selected value="Паспорт гражданина">{t('common:Citizens_passport')}</option>
                        <option  value="Россия">Паспорт</option>
                        <option value="Узбекистан">ID карта</option>
                        {/* <option value="США">США</option> */}
                </UptadeSelect>
                <SNumber
                 className='myInput'
                //  id="demo-helper-text-misaligned"
                 label={t('common:Series_number_pas')}
                placeholder=' Например: 470347034703477'/>
                <p>
                    <UserInfoInput 
                    // id="demo-helper-text-misaligned"
                    // placeholder="Иванов Иван Иванович"
                    label={t('common:Issued_by')}
                    placeholder={t('Например: IIV 3411')}/>
                    
                </p>
                <p>
                    <UserNumber 
                     className='myInput'
                    //  id="demo-helper-text-misaligned"
                     label={t('common:Date_issue')}
                    // placeholder=' Например: 470347034703477'
                    placeholder={t('03/03/1999')}/>
                </p>
                <FormHeading>{t('common:Contact_details')}</FormHeading>
                <p>
                <UserNumber
                            className='myInput'
                            placeholder="998 90 989-89-89"
                            // id="demo-helper-text-misaligned"
                            label={t('common:Phone_number')}
                        />
                     <UserEmail 
                              placeholder="status585@mail.ru"
                            //   id="demo-helper-text-misaligned"
                              label="Email"
                        />
                      {add == 'addet' ? (
                            <>
                             <UserNumber
                            className='myInput'
                            // id="demo-helper-text-misaligned"
                            label={t('common:Phone_number')}
                            
                            />
                        <UserEmail
                            className='myInput'
                            // helperText="Please enter your email"
                            // id="demo-helper-text-misaligned"
                            label="Email"
                            
                            
                            />
                            </>
                           
                        ): ('')}
                    <div>
                         { addButt == 'yes' ? (
                             
                            <ButtonAdd onClick={AddHand}> + {t('common:Add')}</ButtonAdd>

                         ): <ButtonAdd onClick={RemoveBtn}>Убрать</ButtonAdd>} 
                    </div>
                </p>
                <FormHeading>{t('common:Residence_address')}</FormHeading>
                    <UserInfoInput
                    //  id="demo-helper-text-misaligned"
                     // placeholder="Иванов Иван Иванович"
                     label={t('common:index')}
                     placeholder={t('Например : 100012')}/>
                        <UptadeSelect placeholder="Область" onChange={(e) => {setValue(e.target.value)}}>
                            <option selected value="Область">{t('common:Region')}</option>
                            <option  value="Андижанская область">{t('Андижанская область')}</option>
                            <option value="Бухарская область">{t('Бухарская область')}</option>
                            <option value="Джизакская область">{t('Джизакская область')}</option>
                            <option value="Кашкадарьинская область">{t('Кашкадарьинская область')}</option>
                            <option value="Наманганская область">{t('Наманганская область')}</option>
                            <option value="Самаркандская область">{t('Самаркандская область')}</option>
                            <option value="Сурхандарьинская область">{t('Сурхандарьинская область')}</option>
                            <option value="Сырдарьинская область">{t('Сырдарьинская область')}</option>
                            <option value="Ташкентская область">{t('Ташкентская область')}</option>
                            <option value="Хорезмская область">{t('Хорезмская область')}</option>
                            <option value="Республика Каракалпакстан">{t('Республика Каракалпакстан')}</option>
                            <option value="Город Ташкент">{t('Город Ташкент')}</option>





                        </UptadeSelect>
                        <UptadeSelectRayon className="rayon" placeholder="Область" onChange={(e) => {setValue(e.target.value)}}>
                            <option selected value="Область">{t('common:District_city')}</option>
                            <option  value=" Алмазарский район">{t('common:Almazar_region')}</option>
                            <option value=" Алмазарский район"> {t('common:Almazar_region')}</option>
                            <option value=" Алмазарский район"> {t('common:Almazar_region')}</option>
                        </UptadeSelectRayon>
                        <UserInfoInput 
                            // id="demo-helper-text-misaligned"
                            // placeholder="Иванов Иван Иванович"
                            label={t('common:Street_Quarter')}
                            placeholder={t('Например :MirzoUlugbek 23')}/>
                        <UserHome 
                        label={t('common:House')}
                        placeholder={t('47')}/>
                        <UserApartment
                        label={t('common:Apartment')}
                        
                        placeholder={t('9')}/>
                        
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
