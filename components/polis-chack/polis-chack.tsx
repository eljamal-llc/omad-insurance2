import { FC, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { AuthPage, Layout, Navbar } from "../../components";
import { ChackTitle, CheckBlock, CheckForm, FormTitle, PolisNum, Wrapper } from "./polis-chack.e";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { PolisChackProps } from "./polis-chack.t";
import { UserInfoInput } from "../personal-area/personal-buy/pesonal-buy.e";
import { FlexBlock, FormBtnCheck, FormButtonBlock, FormInsBtn, UserNumber } from "../common/forms-for-insurance/casco/casco.e";
import { FormSog, UserEmail } from "../common/Invite-cooperation-form/Invite-cooperation-form.e";
import { BTNblock } from "../common/partners-comp/partners-comp.e";
import { FormGroup, Checkbox } from "@mui/material";
import Link from "next/link";



const PolisChack: FC<PolisChackProps> = () => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const [check, setCheck] = useState(false);

  return (
    <Wrapper>
        <ChackTitle>Проверка полиса</ChackTitle>   
        <CheckBlock>
            <CheckForm>
                <FormTitle>Данные по полису</FormTitle>
                <PolisNum
                    label='Номер полиса    '
                    placeholder='1234567-123456789/20-ТФ'
                />
                <UserInfoInput
                    label='Фамилия, имя и отчество*' 
                    placeholder="Иванов Иван Иванович"
                />
                <FormTitle>Контактные данные</FormTitle>
                <FlexBlock className="al-center ">
                    <UserNumber
                    className="chack"
                    label='Номер теефона'
                    placeholder="998 90 989-89-89"
                    />
                    <UserEmail
                    className="chack"

                        label='Электронная почта'
                        placeholder="status585@mail.ru"
                    />
                </FlexBlock>
                <FormButtonBlock>
                        <FormBtnCheck>
                            <FormGroup>
                                <Checkbox {...label} onClick={() => setCheck(!check)} />
                            </FormGroup>
                            <FormSog className="label">
                            Подтверждаю согласие на обработку моих персональных данных. Я даю согласие на обработку указанных мной персональных данных в соответствии с Политикой в области обработки и защиты персональных данных ООО «СК «OMAD»
                                <Link href="" passHref>
                                <a></a>
                                </Link>
                            </FormSog>
                            <FormInsBtn type="submit"   disabled={!check}>
                            Отправить
                            </FormInsBtn>
                        </FormBtnCheck>
                            
                    
                </FormButtonBlock>
                
            </CheckForm>
        </CheckBlock>
    </Wrapper>
  );
};

export default PolisChack;