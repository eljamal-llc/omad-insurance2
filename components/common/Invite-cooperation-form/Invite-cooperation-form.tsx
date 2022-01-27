import { FC, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import {
    AuthBlock,
    AuthButton,
    AuthLink,
    FormCheck,
    Wrapper,
  } from "../../auth/auth-page/auth-page.e";
import FormGroup from "@mui/material/FormGroup";

import { FormElementsProps } from "../forms/form-elements.t";
import { InviteFormBody,
         FormTitle,
         FormsContainer,
         UserName,
         UserPhone,
         UserEmail,
         OraganName,
         UserCity,
         MessageIn,
         CheckBlock,
         FormButton,
         FormSog
} from './Invite-cooperation-form.e'
import { Invite_cooperation_formProps } from "./Invite-cooperation-form.t";
import Link from "next/link";

const InviteCooperationForm: FC<Invite_cooperation_formProps> = () => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const [check, setCheck] = useState(false);
  
        return (
            <form>
                <InviteFormBody>
                    <FormTitle>Пригласить к сотрудничеству</FormTitle>
                    <FormsContainer>
                        <UserName
                              placeholder="Иванов Иван Иванович"
                              label={'Ваше имя'}
                        />
                        <UserPhone
                            placeholder="998 90 989-89-89"
                            label={'Номер теефона'}

                        />
                        <UserEmail
                            placeholder="status585@mail.ru"
                            label={'Электронная почта'}
                        />
                        <OraganName
                            placeholder=""
                            label={'Название организации'}
                        />
                        <UserCity
                         placeholder="Андижан"
                         label={'Город'}
                        />
                       
                    </FormsContainer>
                    <MessageIn
                        placeholder="Примечание"
                        />
                        <CheckBlock>
                            <FormCheck>
                                <FormGroup>
                                    <Checkbox {...label} onClick={() => setCheck(!check)} />
                                </FormGroup>
                                <FormSog className="label">
                                Подтверждаю согласие на обработку моих персональных данных. Я даю согласие на обработку указанных мной персональных данных в соответствии с Политикой в области обработки и защиты персональных данных ООО «СК «Согласие»
                                    <Link href="/blog/hello-world" passHref>
                                    <a></a>
                                    </Link>
                                </FormSog>
                            </FormCheck>
                                <div>
                                <FormButton type="submit" disabled={!check}>
                                Отправить
                                </FormButton>
                                </div>
                            
                        </CheckBlock>
                </InviteFormBody>
            </form>
        )
};

export default InviteCooperationForm;
