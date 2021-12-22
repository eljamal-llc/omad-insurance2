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
const BuyPolis: FC<PersonalBuyProps> = () => {
    
    return (
        <>
        <BodyForm>
            <FormBody>
                <FormHeading>Связаться с нами   </FormHeading>
                <PageForm>
                    <UserInfoInput type={'text'}  placeholder="Фамилия, имя и отчество*"/>
                    <UserNumber placeholder="Номер теефона"/ >
                    <UserEmail placeholder="Электронная почта"/>
                    <ButtonAdd>+ Добавить</ButtonAdd>
                    <FormMessage placeholder="Сообщение"/>
                    <ButtonBlock>
                        <CardButton>Отправить</CardButton>
                    </ButtonBlock>
                </PageForm>
            </FormBody>
        </BodyForm>
     


        </>

    )

}

export default BuyPolis;
