import { FC, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import {
    AuthBlock,
    AuthButton,
    AuthLink,
    FormCheck,
    Wrapper,
  } from "../../../auth/auth-page/auth-page.e";

import FormGroup from "@mui/material/FormGroup";

import {
    GlobalFormBody,
    HeIs,
    StepIn,
    FormTitle,
    FormInfo,
    FormBlock,
    FormContainer,
    CostBlock,
    ThisCost,
    CostValue,
    CostInfo,
    CostS,
    AvtoModel,
    BrandCar,
    ModelCar,
    CarsBlock,
    Engine,
    RegionUsage,
    FormButtonBlock,
    FormBtnCheck,
    FormInsBtn,
    Avto,
    InfoUser,
    FormsUser,
    CheckDTp
} from './casco.e'

import { CascoProps } from "./casco.t";
import Link from "next/link";
import { CheckBlock, FormButton, FormSog } from "../../Invite-cooperation-form/Invite-cooperation-form.e";

const Casco: FC<CascoProps> = () => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const [check, setCheck] = useState(false);
    const [step , setStep] = useState(1)

    const [avto , setAvto] = useState('avto')
    const [insuranse , setInsuranse] = useState('')
    const [calc , setCalc] = useState('')
    const [progres , setPropgres] = useState('40%')
    const NoAvto = ()=>{
        setAvto('')
        setInsuranse('insuranse')
        setStep(2)
        setPropgres('60%')
        console.log()
  }
  const prevAV = () =>{
    setAvto('avto')
    setInsuranse('')
    setPropgres('40%')
    setStep(1)
      
  }
    const NoIns =  () =>{
        setInsuranse('')

        setCalc('calc')

    }
        return (
            <GlobalFormBody>
                    <FormContainer>
                            <form>
                                <FormBlock>
                                    <Avto>
                                        {avto == 'avto' ? (
                                            <>
                    <HeIs>Автомобиль  &nbsp;  &nbsp;  &nbsp;  <StepIn>Шаг <span>{step} </span>из 4</StepIn> </HeIs>

                                            <FormTitle>Заполните информацию о автомобиле</FormTitle>
                                        
                                                <FormInfo>Выберите значение из списка, используя поиск по буквам</FormInfo>
                                                <AvtoModel
                                                    label='Модель автомобилья*'
                                                    placeholder="Мерседес"
                                                    id='car'
                                                    />
                                        <FormInfo>Выберите значение из списка, используя поиск по буквам</FormInfo>
                                        <CarsBlock>
                                                <BrandCar
                                                    label='Марка*'
                                                    placeholder="Ford"
                                                />
                                                <ModelCar
                                                    label='Модель*'
                                                    placeholder="Focus"
                                                />
                                                <ModelCar
                                                    // type={'date'}
                                                    label='Год*'
                                                    placeholder="2018"
                                                />
                                        </CarsBlock>
                                        <Engine
                                            label='Двигатьель*'
                                            placeholder="2.0 (250.00 л.с.)"
                                        />
                                        <RegionUsage
                                            label='Регион использование*'
                                            placeholder="Ташкент и ТО"
                                        />
                                        <FormButtonBlock>
                                                <FormBtnCheck>
                                                    <FormGroup>
                                                        <Checkbox {...label} onClick={() => setCheck(!check)} />
                                                    </FormGroup>
                                                    <FormSog className="label">
                                                    Я принимаю условия передачи информации и страхования
                                                        <Link href="" passHref>
                                                        <a></a>
                                                        </Link>
                                                    </FormSog>
                                                    <FormInsBtn onClick={NoAvto}  disabled={!check}>
                                                    Далее
                                                    </FormInsBtn>
                                                </FormBtnCheck>
                                                    
                                            
                                        </FormButtonBlock>
                                        </>
                                        ):''}
                                        {insuranse== 'insuranse' ? (
                                            <>
                    <HeIs>Страхователь  &nbsp;  &nbsp;  &nbsp;  <StepIn>Шаг <span>{step} </span>из 4</StepIn> </HeIs>

                                             <FormTitle>Заполните данне страхователя</FormTitle>
                                        
                                             {/* <FormInfo>Выберите значение из списка, используя поиск по буквам</FormInfo> */}
                                             <AvtoModel
                                                 label='Фамилия, имя и отчество**'
                                                 placeholder="Иванов Иван Иванович"
                                                 id='name'
                                                 />
                                            <InfoUser>
                                                <FormsUser
                                                    label='Мобильный телефон*'
                                                    placeholder="91 605 16 36 "
                                                    id="tel"
                                                />
                                                <FormsUser
                                                    label='Электронная почта'
                                                    placeholder="ktoto@mail.ru "
                                                    type={'email'}
                                                    id="emailUser"
                                                />
                                                <FormsUser
                                                    label='Мин. возраст водителя*'
                                                    placeholder="19 "
                                                    id="vozrast"
                                                />
                                                <FormsUser
                                                    label='Мин. стаж вождения*'
                                                    placeholder="3 "
                                                    id="staj"
                                                />
                                                <FormsUser
                                                    label='Страховых случаев за год*'
                                                    placeholder="Страховых случаев за год* "
                                                    id="strahavoy-za-god"
                                                />
                                                <CheckDTp>  
                                                    <Checkbox {...label} onClick={() => setCheck(!check)} /> Были ДТП за прошлый год
                                                </CheckDTp>
                                                
                                                <div >В том числе повреждения и обращения без ДТП</div>
                                            </InfoUser>
                                    
                                     <Engine
                                         label='Пробег**'
                                         id="probeg"
                                         placeholder="150 000"
                                     />
                                     {/* <RegionUsage
                                         label='Регион использование*'
                                         placeholder="Ташкент и ТО"
                                     /> */}
                                     <FormButtonBlock>
                                             <FormBtnCheck>

                                                
                                                     <Link href="" passHref>
                                                     <a onClick={prevAV}>Назад</a>
                                                     </Link>
                                                 
                                             </FormBtnCheck>
                                             <FormInsBtn onClick={NoIns}  >
                                                 Перейти в калькулятору
                                                 </FormInsBtn>
                                         
                                     </FormButtonBlock>
                                     </>
                                        ): ('')}
                                    {}
                                        
                                </Avto>
                                
                                    
                                </FormBlock>    
                            </form>
                           


                        <CostBlock>
                            <ThisCost>Заполните до показа стоимости:</ThisCost>
                            <CostValue>{progres}</CostValue>
                            <CostS className={progres == '60%' ? 'active' : ''}/>
                            <CostInfo>+20% за заполнение следующего шага</CostInfo>
                        </CostBlock>
                    </FormContainer>
                   
                   
            </GlobalFormBody>
        )
};

export default Casco;
