import { FC, useState } from "react";
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
import { makeStyles } from '@mui/styles';
import { FormControl, Input, InputLabel, TextField } from '@mui/material';
import { CardButton } from "../../yur-face-page/CardBlock/CardBlock.e";
import { useTranslation } from "react-i18next";
import Button from '@mui/material/Button';
import styled from "styled-components";
// const UserInfoInput = styled(TextField)({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   border: 0,
//   borderRadius: 3,
//   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   color: 'white',
//   height: 48,
//   padding: '0 30px',
// });
const BuyPolis: FC<PersonalBuyProps> = () => {
    const {t} = useTranslation()
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
    //@ts-ignore
    const  [message , setMessage] = useState( t('common:Message'))
    return (
        <>
        <BodyForm>
            <FormBody>
                <FormHeading>{t('common:contact_us')}</FormHeading>
                <FormControl>
                <PageForm>
                <UserInfoInput
                        // id="demo-helper-text-misaligned"
                        placeholder="Иванов Иван Иванович"
                        label={t('common:name_data')}
                        /><br/>
                    <UserNumber
                        className='myInput'
                        placeholder="998 90 989-89-89"
                        // id="demo-helper-text-misaligned"
                        label={t('common:Phone_number')}
                        
                        />
                    <UserEmail
                        className='myInput'
                        placeholder="status585@mail.ru"
                        // id="demo-helper-text-misaligned"
                        label="Email"
                        
                        
                        />
                        {add == 'addet' ? (
                            <>
                             <UserNumber
                            className='myInput'
                            id="demo-helper-text-misaligned"
                            label={t('common:Phone_number')}
                            
                            />
                        <UserEmail
                            className='myInput'
                            // helperText="Please enter your email"
                            id="demo-helper-text-misaligned"
                            label="Email"
                            
                            
                            />
                            </>
                           
                        ): ('')}
                    <div>
                         { addButt == 'yes' ? (
                             
                            <ButtonAdd onClick={AddHand}> + {t('common:Add')}</ButtonAdd>

                         ): <ButtonAdd onClick={RemoveBtn}>Убрать</ButtonAdd>} 
                    </div>
                    {/* @ts-ignore */}
                    <FormMessage onClick={()=>{ setMessage(t(''))}}  placeholder={message}/>
                    <ButtonBlock>
                        <CardButton>{t('common:send')}</CardButton>
                    </ButtonBlock>
                
                </PageForm>
                </FormControl>
            </FormBody>
        </BodyForm>
     


        </>

    )

}

export default BuyPolis;
