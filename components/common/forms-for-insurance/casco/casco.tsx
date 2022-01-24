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
    CheckDTp,
    UserStr,
    UserNumber,
    FormUserD,
    FormsDrop,
    UserDataBlock,
    FlexBlock
} from './casco.e'
import MenuItem from '@mui/material/MenuItem';
import { CascoProps } from "./casco.t";
import Link from "next/link";
import { CheckBlock, FormButton, FormSog, UserEmail } from "../../Invite-cooperation-form/Invite-cooperation-form.e";
import { useTranslation } from "react-i18next";
import { Box, FormControl, InputLabel, Select } from "@mui/material";
import { BodyForm, ButtonAdd, ButtonBlock, FormBody, FormHeading, PageForm, UserInfoInput } from "../../../personal-area/personal-buy/pesonal-buy.e";
import { UserData } from "../../..";
import { CardButton } from "../../../yur-face-page/CardBlock/CardBlock.e";
import { UserApartment, UserHome } from "../../../personal-area/user-data/user-data.e";
import { UptadeSelect, UptadeSelectRayon } from "../../../personal-area/polic-updates/pesonal-.updates.e";
import { api } from "../../../../services/api";


const Casco: FC<CascoProps> = ({title , yurFace}) => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const [check, setCheck] = useState(false);
    const [addButt, setAddBut] = useState("yes");
    const [districts, setDistricts] = useState([]);
    const [regions, setRegions] = useState([]);
    const {t} = useTranslation()
    const getDistrict = (id: any) => {
    api
      .get("cabinet/district-list", {
        params: { regionId: id },
      })
      .then((res) => {
        setDistricts(res.data.data);
      });
  };
    const [step , setStep] = useState(1)
    const [userInfo, setUserInfo] = useState<any>({});
    const [age, setAge] = useState('');
    const [avto , setAvto] = useState('avto')
    const [insuranse , setInsuranse] = useState('')
    const [calc , setCalc] = useState('')
    const [progres , setPropgres] = useState('40')
    const [credit , setCredit] = useState(true)
    const [sobs , setSobs] = useState(false)
    const [ogrV , setOgrV] = useState(false)
  const [add, isAdd] = useState("");

    const handleChangeE= (event:any) => {
      setAge(event.target.value);
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        api
          .post("cabinet/user/post", userInfo)
          .then((res) => {
            console.log("object ==>", res);
          })
          .catch((err) => {
            console.log("object ==>", err.response.data);
          });
      };
    const AddHand = () => {
        isAdd("addet");
        setAddBut("");
      };
      const RemoveBtn = () => {
        isAdd("");
        setAddBut("yes");
      };
    const NoAvto = ()=>{
        setAvto('')
        setInsuranse('insuranse')
        setStep(2)
        setPropgres('80')
        console.log()
  }
    const handleChange = (event: any, field: any) => {
        setUserInfo((prevState: any) => ({
        ...prevState,
        [field]: event.target.value,
        }));
    };
    const prevAV = () =>{
        setAvto('avto')
        setInsuranse('')
        setPropgres('40')
        setCheck(false)
        setStep(1)
        
    }

    const CheckCredit = () =>{
    setCredit(!credit)
    }
    const NoIns =  () =>{
        setInsuranse('')
        setPropgres('100')
        setStep(3)

        setCalc('calc')

    }
        return (
            <GlobalFormBody>
                    <FormContainer>
                            <form action="">
                                <FormBlock>
                                    <Avto>
                                        {avto == 'avto' ? (
                                            <>
                                           <HeIs>{title}<small> { yurFace == true ?  '(Юр.чицо)' : '(Физ.лицо)'}</small> &nbsp; &nbsp;  <StepIn>Шаг <span>{step} </span>из 2</StepIn> </HeIs>


                                            <FormTitle>Заполните информацию о автомобиле</FormTitle>
                                        

                                        <CarsBlock>
                                                <BrandCar
                                                    label='Марка*'
                                                    placeholder="Chevrolet"
                                                />
                                                <ModelCar
                                                    label='Модель*'
                                                    placeholder="Spark"
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
                            <p></p>
                                        <RegionUsage
                                            label='Регион использование*'
                                            placeholder="Ташкент и ТО"
                                        />
                                        <UserStr>
                                            <FormsUser
                                                        label='Страховых случаев за год*'
                                                        placeholder="Страховых случаев за год* "
                                                        id="strahavoy-za-god"
                                                    />
                                                    
                                                    <CheckDTp>  
                                                        <Checkbox {...label}  /> Были ДТП за прошлый год
                                                        
                                                    </CheckDTp>
                                        </UserStr>
                                                 
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
                                          <HeIs>{title}<small> { yurFace == true ?  '(Юр.чицо)' : '(Физ.лицо)'}</small> &nbsp; &nbsp;  <StepIn>Шаг <span>{step} </span>из 2</StepIn> </HeIs>


                                             <FormTitle>Период страхования</FormTitle>
                                        
                                             {/* <FormInfo>Выберите значение из списка, используя поиск по буквам</FormInfo> */}
                                             <p>Дата начала действия КАСКО</p>
                                             <UserNumber
                                                className="myInput"
                                                placeholder="Дата начала действия КАСКО"
                                                // id="demo-helper-text-misaligned"
                                                label={t("Дата начала действия КАСКО")}
                                                onChange={(e) => handleChange(e, "documentDateOfIsue")}
                                                name="documentDateOfIsue"
                                                type="date"
                                                id=""
                                                defaultValue="Дата начала действия КАСКО"
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                                required
                                                value={userInfo.documentDateOfIsue}
                                            />
                                             <FormInfo>Автомобиль</FormInfo>
                                             <FlexBlock>
                                             <FormUserD
                                                    label='VIN*'
                                                    placeholder=" На пример :  X9L212300A0287536  "
                                                    id="tel"
                                                />
                                                 <FormUserD
                                                    disabled={!credit} 

                                                    label='Госномер*'
                                                    placeholder="Если есть  "
                                                    id="tel"
                                                />
                                             </FlexBlock>
                                                
                                            <InfoUser>
                                                
                                               
                                                <FormsDrop
                                                    // label='Мин. возраст водителя*'
                                                    disabled={!credit} 
                                                    placeholder="Тип документа* "
                                                    id="vozrast"
                                                >
                                                    <option>Тип документа*</option>
                                                    <option>СТС</option>
                                                    <option>ПТС</option>


                                                </FormsDrop>
                                                <FormsUser
                                                    disabled={!credit} 

                                                    label='Серия и номер*'
                                                    placeholder=""
                                                    type={'email'}
                                                    id="emailUser"
                                                />
                                                 <Engine
                                                    disabled={!credit} 
                                                    label='Дата выдачи*'
                                                    id="Дата выдачи*"
                                                    placeholder=""
                                                />
                                               <div>
                                                    <Checkbox {...label} onClick={CheckCredit}  /> Автомобиль взят в кредит
                                               </div>
                                                        
                                                        
                                            </InfoUser>
                                            {/* <FormInfo>Собственник</FormInfo>
                                            <div>
                                                    <Checkbox {...label}   /> Собственник является страхователем
                                            </div> */}
                                            <FormInfo>Водитель</FormInfo>
                                            <div>
                                                    <Checkbox {...label} onClick={()=> setOgrV(!ogrV)}   /> Без ограничений на водителей

                                            </div>
                                                {ogrV == false ? (
                                                    <>
                                                     <FormInfo>Укажите данные водителя</FormInfo>
                                                <FlexBlock>
                                                <FormsUser

                                                        label='Фамилия, имя и отчество*'
                                                        placeholder="Иванов Иван Иванович"
                                                        type={''}
                                                        id="emailUser"
                                                        />

                                                    <FormsUser

                                                    label='Дата рождения*'
                                                    placeholder="Дата рождения"
                                                    type={''}
                                                    id="emailUser"
                                                    />
                                                </FlexBlock>
                                           
                                                
                                                     {add == "addet" ? (
                                                <FlexBlock>
                                                <FormsUser

                                                    label='Фамилия, имя и отчество*'
                                                    placeholder="Иванов Иван Иванович"
                                                    type={''}
                                                    id="emailUser"
                                                    />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <FormsUser

                                                        label='Дата рождения*'
                                                        placeholder="Дата рождения"
                                                        type={''}
                                                        id="emailUser"
                                                        />
                                                </FlexBlock>
                                            ) : (
                                                ""
                                            )}
                                                    <div>
                                                        {addButt == "yes" ? (
                                                        <ButtonAdd onClick={AddHand}>     {t("common:Add")}</ButtonAdd>
                                                        ) : (
                                                        <ButtonAdd onClick={RemoveBtn}>Убрать</ButtonAdd>
                                                        )}
                                                    </div>
                                                            
                                                    </>
                                                ):''}
                                           
                                     <FormButtonBlock>
                                             <FormBtnCheck>
                                                     <a onClick={prevAV}>Назад</a>
                                             </FormBtnCheck>
                                             <FormInsBtn onClick={NoIns} >Далее </FormInsBtn>
                                         
                                     </FormButtonBlock>
                                     </>
                                        ): ('')}
                                       
                                        <div>
                                                            
                                        {calc  == 'calc' ? (
                                       <>
                  <HeIs>{title}<small> { yurFace == true ?  '(Юр.чицо)' : '(Физ.лицо)'}</small> &nbsp; &nbsp;  <StepIn>Шаг <span>{step} </span>из 2</StepIn> </HeIs>



                                        {yurFace == false ? (
                                            <BodyForm>
                                            <FormBody>
                                            <FormHeading>{t("common:Personal_ata")}</FormHeading>
                                            <PageForm onSubmit={handleSubmit}>
                                                <p>
                                                <UserInfoInput
                                                    placeholder="Иванов Иван Иванович"
                                                    label={t("common:name_data")}
                                                    onChange={(e) => handleChange(e, "full_name")}
                                                    name="full_name"
                                                    value={userInfo.full_name}
                                                    required
                                                    id="full_name"
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                />
                                                </p>
                                                <p>
                                                <UserNumber
                                                    className="myInput"
                                                    placeholder="01/01/2000"
                                                    // id="demo-helper-text-misaligned"
                                                    label={t("common:birth_data")}
                                                    onChange={(e) => handleChange(e, "data_birthday")}
                                                    name="data_birthday"
                                                    type="date"
                                                    id="data_birthday"
                                                    defaultValue="00-00-2000"
                                                    value={userInfo.data_birthday}
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                    required
                                                />
                                                </p>
                                                <FormHeading>{t("common:Personal_ata")}</FormHeading>
                                                <UptadeSelect
                                                // onChange={(e) => {
                                                //   setValue(e.target.value);
                                                // }}
                                                name="documentTypeId"
                                                required
                                                id="documentTypeId"
                                                onChange={(e) => handleChange(e, "documentTypeId")}
                                                value={userInfo.documentTypeId}
                                                >
                                                <option selected>{t("common:Citizens_passport")}</option>
                                                <option value={1}>Паспорт</option>
                                                <option value={2}>ID карта</option>
                                                {/* <option value="США">США</option> */}
                                                </UptadeSelect>

                                                <UserInfoInput
                                                placeholder=" Например: 470347034703477"
                                                label={t("common:Series_number_pas")}
                                                onChange={(e) => handleChange(e, "documentSerieAndNumber")}
                                                name="documentSerieAndNumber"
                                                required
                                                id="documentSerieAndNumber"
                                                value={userInfo.documentSerieAndNumber}
                                                // InputLabelProps={{
                                                //   shrink: true,
                                                // }}
                                                />
                                                {/* <SNumber
                                                className="myInput"
                                                //  id="demo-helper-text-misaligned"

                                                id="documentSerieAndNumber"
                                                value={userInfo.documentSerieAndNumber}
                                                type="text"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                /> */}
                                                <p>
                                                <UserInfoInput
                                                    label={t("common:Issued_by")}
                                                    placeholder={t("Например: IIV 3411")}
                                                    onChange={(e) => handleChange(e, "documentIssuedBy")}
                                                    name="documentIssuedBy"
                                                    required
                                                    id="documentIssuedBy"
                                                    value={userInfo.documentIssuedBy}
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                />
                                                </p>
                                                <p>
                                                <UserNumber
                                                    className="myInput"
                                                    placeholder="01/01/2000"
                                                    // id="demo-helper-text-misaligned"
                                                    label={t("common:Date_issue")}
                                                    onChange={(e) => handleChange(e, "documentDateOfIsue")}
                                                    name="documentDateOfIsue"
                                                    type="date"
                                                    id="documentDateOfIsue"
                                                    defaultValue="00-00-2000"
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                    required
                                                    value={userInfo.documentDateOfIsue}
                                                />
                                                </p>
                                                    <FormHeading>{t("common:Contact_details")}</FormHeading>
                                                <p>
                                                <UserDataBlock>
                                                    <UserNumber
                                                    className="myInput"
                                                    placeholder="998 90 989-89-89"
                                                    label={t("common:Phone_number")}
                                                    onChange={(e) => handleChange(e, "tel1")}
                                                    name="tel1"
                                                    required
                                                    id="tel1"
                                                    value={userInfo.tel1}
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                />
                                                <UserEmail
                                                    placeholder="status585@mail.ru"
                                                    label="Email"
                                                    onChange={(e) => handleChange(e, "email1")}
                                                    name="email1"
                                                    required
                                                    id="email1"
                                                    value={userInfo.email1}
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                />
                                                </UserDataBlock>
                                                
                                                {add == "addet" ? (
                                                    <UserDataBlock>
                                                    <UserNumber
                                                className="myInput"
                                                placeholder="998 90 989-89-89"
                                                label={t("common:Phone_number")}
                                                //   onChange={(e) => handleChange(e, "tel1")}
                                                name="tel1"
                                                required
                                                id="tel1"
                                                //   value={userInfo.tel1}
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                            />
                                            <UserEmail
                                                placeholder="status585@mail.ru"
                                                label="Email"
                                                //   onChange={(e) => handleChange(e, "email1")}
                                                name="email1"
                                                required
                                                id="email1"
                                                //   value={userInfo.email1}    
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                            />
                                            </UserDataBlock>
                                                ) : (
                                                    ""
                                                )}
                                                <div>
                                                    {addButt == "yes" ? (
                                                    <ButtonAdd onClick={AddHand}> + {t("common:Add")}</ButtonAdd>
                                                    ) : (
                                                    <ButtonAdd onClick={RemoveBtn}>Убрать</ButtonAdd>
                                                    )}
                                                </div>
                                                </p>
                                                <FormHeading>{t("common:Residence_address")}</FormHeading>
                                                <UserInfoInput
                                                label={t("common:index")}
                                                placeholder={t("Например : 100012")}
                                                onChange={(e) => handleChange(e, "box_index")}
                                                name="box_index"
                                                required
                                                id="box_index"
                                                value={userInfo.box_index}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                />
                                                <UptadeSelect
                                                placeholder="Область"
                                                onChange={(e) => {
                                                    handleChange(e, "region_id");
                                                    getDistrict(e.target.value);
                                                }}
                                                name="region_id"
                                                required
                                                >
                                                <option selected>{t("common:Region")}</option>
                                                {regions.map((item: any, idx: any) => (
                                                    <option value={item.id} key={idx}>
                                                    {item.title}
                                                    </option>
                                                ))}
                                                </UptadeSelect>
                                                <UptadeSelectRayon
                                                className="rayon"
                                                placeholder="Область"
                                                onChange={(e) => {
                                                    handleChange(e, "district_id");
                                                }}
                                                name="region_id"
                                                >
                                                <option selected value="Область">
                                                    {t("common:District_city")}
                                                </option>
                                                {districts.map((item: any, idx: any) => (
                                                    <option selected value={item.id} key={idx}>
                                                    {item.title}
                                                    </option>
                                                ))}
                                                </UptadeSelectRayon>
                                                <UserInfoInput
                                                label={t("common:Street_Quarter")}
                                                placeholder={t("Например :MirzoUlugbek 23")}
                                                onChange={(e) => handleChange(e, "street")}
                                                name="street"
                                                id="street"
                                                value={userInfo.street}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                />
                                                <UserHome
                                                label={t("common:House")}
                                                placeholder={t("47")}
                                                onChange={(e) => handleChange(e, "home")}
                                                name="home"
                                                id="home"
                                                value={userInfo.home}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                />
                                                <UserApartment
                                                label={t("common:Apartment")}
                                                placeholder={t("9")}
                                                onChange={(e) => handleChange(e, "flat")}
                                                name="flat"
                                                id="flat"
                                                value={userInfo.flat}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                />

                                                <ButtonBlock>
                                                <CardButton type="submit">{t("common:Save")}</CardButton>
                                                </ButtonBlock>
                                            </PageForm>
                                            
                                            </FormBody>
                                            </BodyForm>
                                        ):(
                                            <>
                                                 <FormBody>
                                                    <FormHeading>Данные для оформления</FormHeading>
                                                    <UserInfoInput
                                                    placeholder="Khans"
                                                    label={'Название компании'}
                                                    name="full_name"
                                                    required
                                                    id="company_name"
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                /><br/><br/>
                                                <UserInfoInput
                                                    placeholder=""
                                                    label={'Юридический адрес'}
                                                    name="full_name"
                                                    required
                                                    id="yur_adress"
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                /><br/><br/>
                                                    <UserInfoInput
                                                    placeholder="10855430604947"
                                                    label={'Свидетельство'}
                                                    name="guvoh"
                                                    required
                                                    id="guvohnima"
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                /><br/><br/>
                                                <UserInfoInput
                                                    placeholder="10855430604947"
                                                    label={'ИНН'}
                                                    name="full_name"
                                                    required
                                                    id="inn"
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                /><br/><br/>
                                                
                                                 
                                                <ButtonBlock>
                                                <CardButton type="submit">{t("common:Save")}</CardButton>
                                                </ButtonBlock>
                                                </FormBody>
                                            </>
                                        )}

                                       
                                       </>

                                        ):(
                                           ''
                                        )}
                                        </div>
                                    
                                        
                                    </Avto>
                                </FormBlock>    
                            </form>
                        <CostBlock>
                            <ThisCost>Заполните до показа стоимости:</ThisCost>
                            <CostValue>{progres}%</CostValue>
                            <CostS className={'i' + progres}/>
                            {progres == '100' ?(
                                    ''
                            ): (
                                <CostInfo>    {progres == '80' ? '+20%' : '+40% '}      за заполнение следующего шага</CostInfo>

                            )}
                        </CostBlock>
                    </FormContainer>
                   
                   
            </GlobalFormBody>
        )
};

export default Casco;
