import { FC, useEffect, useState, forwardRef } from "react";
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
  FlexBlock,
} from "./health.e";
import MenuItem from "@mui/material/MenuItem";
import { HealthProps } from "./health.t";
import Link from "next/link";
import {
  CheckBlock,
  FormButton,
  FormSog,
  UserEmail,
} from "../../Invite-cooperation-form/Invite-cooperation-form.e";
import { useTranslation } from "react-i18next";
import { Box, FormControl, InputLabel, Select } from "@mui/material";
import {
  BodyForm,
  ButtonAdd,
  ButtonBlock,
  FormBody,
  FormHeading,
  PageForm,
  UserInfoInput,
} from "../../../personal-area/personal-buy/pesonal-buy.e";
import { UserData } from "../../..";
import { CardButton } from "../../../yur-face-page/CardBlock/CardBlock.e";
import {
  UserApartment,
  UserHome,
} from "../../../personal-area/user-data/user-data.e";
import {
  UptadeSelect,
  UptadeSelectRayon,
} from "../../../personal-area/polic-updates/pesonal-.updates.e";
import { api } from "../../../../services/api";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Health: FC<HealthProps> = ({ title, yurFace }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [check, setCheck] = useState(false);
  const [addButt, setAddBut] = useState("yes");
  const [addButt2, setAddBut2] = useState("yes");

  const [districts, setDistricts] = useState([]);
  const [regions, setRegions] = useState([]);

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState<any>(null);
  const { t } = useTranslation();

  useEffect(() => {
    api
      .get("cabinet/regions-list")
      .then((res) => {
        setRegions(res.data.data);
      })
      .catch((err) => {
        console.log("err", err.response.data);
      });
  }, []);
  const getDistrict = (id: any) => {
    api
      .get("cabinet/district-list", {
        params: { regionId: id },
      })
      .then((res) => {
        setDistricts(res.data.data);
      });
  };
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState<any>({});
  const [age, setAge] = useState("");

  const [health, setHealth] = useState("health");
  const [insuranse, setInsuranse] = useState("");
  const [calc, setCalc] = useState("");
  const [progres, setPropgres] = useState("40");
  const [credit, setCredit] = useState(true);
  const [sobs, setSobs] = useState(false);
  const [ogrV, setOgrV] = useState(false);
  const [add, isAdd] = useState("");
  const [add2, isAdd2] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    api
      .post("/forms/health", userInfo)
      .then((res) => {
        // console.log("object ==>", res);
        setOpen(true);
      })
      .catch((err) => {
        // console.log("objectERROR ==>", err.response.data);
        setAlert(true);
        setErrorMsg({
          type: "registration",
          message: err.response.data,
        });
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
  const AddHand2 = () => {
    isAdd2("addet");
    setAddBut2("");
  };
  const RemoveBtn2 = () => {
    isAdd2("");
    setAddBut2("yes");
  };
  const NoAvto = (e: any) => {
    e.preventDefault();

    setHealth("");
    setInsuranse("insuranse");
    setStep(2);
    setPropgres("100");
    console.log();
  };
  const handleChange = (event: any, field: any) => {
    // console.log("==>>", event.target.checked);
    if (
      field == "was_be_dtp" ||
      field == "avto_credit" ||
      field == "bez_ogranacheniya_voditel"
    ) {
      setUserInfo((prevState: any) => ({
        ...prevState,
        [field]: event.target.checked,
      }));
    } else if (field == "type") {
      setUserInfo((prevState: any) => ({
        ...prevState,
        [field]: event,
      }));
    } else {
      setUserInfo((prevState: any) => ({
        ...prevState,
        [field]: event.target.value,
        type: yurFace ? "yur" : "fiz",
      }));
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setAlert(false);
    setErrorMsg(null);
  };

  return (
    <GlobalFormBody>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Сообщение отправлено успешно !
          </Alert>
        </Snackbar>

        <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errorMsg &&
              errorMsg.type == "registration" &&
              errorMsg.message.map((item: any, idx: any) => (
                <div key={idx}>{item}</div>
              ))}
          </Alert>
        </Snackbar>
      </Stack>
      <FormContainer>
        <PageForm onSubmit={handleSubmit}>
          <FormBlock>
            <Avto>
              <>
                <HeIs>
                  {title}
                  <small>
                    {" "}
                    {yurFace == true ? "(Юр.чицо)" : "(Физ.лицо)"}
                  </small>{" "}
                  &nbsp; &nbsp;{" "}
                  <StepIn>
                    Шаг <span>{step} </span>из 2
                  </StepIn>{" "}
                </HeIs>

                <FormTitle>Выберите параметры страховки</FormTitle>

                <CarsBlock>
                  <BrandCar
                    label="Срок страхования *"
                    type="number"
                    placeholder="srok"
                    onChange={(e) => handleChange(e, "srok")}
                    name="srok"
                    value={userInfo.srok}
                    required
                    id="srok"
                  />
                  <UserNumber
                    className="myInput"
                    placeholder="Дата начала действия "
                    // id="demo-helper-text-misaligned"
                    label={t("Дата начала действия")}
                    type="date"
                    defaultValue="Дата рождения*"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, "data_nachala")}
                    name="data_nachala"
                    value={userInfo.data_nachala}
                    required
                    id="data_nachala"
                  />
                </CarsBlock>

                <p></p>
                <FormTitle>Застрахованные</FormTitle>
                <CarsBlock>
                  <FormsUser
                    label="Фамилия, имя и отчество*"
                    placeholder="Иванов Иван Иванович"
                    type={""}
                    onChange={(e) => handleChange(e, "fullname1")}
                    name="fullname1"
                    value={userInfo.fullname1}
                    required
                    id="fullname1"
                  />
                  <UserNumber
                    className="myInput"
                    placeholder="Дата рождения*"
                    // id="demo-helper-text-misaligned"
                    label={t("Дата начала действия")}
                    type="date"
                    defaultValue="Дата начала действия"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, "date1")}
                    name="date1"
                    value={userInfo.date1}
                    required
                    id="date1"
                  />
                </CarsBlock>
                {add == "addet" ? (
                  <CarsBlock>
                    <FormsUser
                      label="Фамилия, имя и отчество*"
                      placeholder="Иванов Иван Иванович"
                      type={""}
                      onChange={(e) => handleChange(e, "fullname2")}
                      name="fullname2"
                      value={userInfo.fullname2}
                      id="fullname2"
                    />
                    <UserNumber
                      className="myInput"
                      placeholder="Дата рождения*"
                      // id="demo-helper-text-misaligned"
                      label={t("Дата начала действия")}
                      type="date"
                      defaultValue="Дата начала действия"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(e) => handleChange(e, "date2")}
                      name="date2"
                      value={userInfo.date2}
                      id="date2"
                    />
                  </CarsBlock>
                ) : (
                  ""
                )}
                <div>
                  {addButt == "yes" ? (
                    <ButtonAdd onClick={AddHand}>
                      {" "}
                      + {t("common:Add")}
                    </ButtonAdd>
                  ) : (
                    <ButtonAdd onClick={RemoveBtn}>Убрать</ButtonAdd>
                  )}
                </div>

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
                    <FormInsBtn onClick={NoAvto} disabled={!check}>
                      Далее
                    </FormInsBtn>
                  </FormBtnCheck>
                </FormButtonBlock>
              </>
              {insuranse == "insuranse" ? (
                <>
                  <HeIs>
                    {title}
                    <small>
                      {" "}
                      {yurFace == true ? "(Юр.чицо)" : "(Физ.лицо)"}
                    </small>{" "}
                  </HeIs>

                  {yurFace == false ? (
                    <BodyForm>
                      <FormBody>
                        <FormHeading>{t("common:Personal_ata")}</FormHeading>
                        <p>
                          <UserInfoInput
                            placeholder="Иванов Иван Иванович"
                            label={t("common:name_data")}
                            onChange={(e) => handleChange(e, "fullname")}
                            name="fullname"
                            value={userInfo.fullname}
                            required
                            id="fullname"
                          />
                        </p>
                        <p>
                          <UserNumber
                            className="myInput"
                            placeholder="01/01/2000"
                            // id="demo-helper-text-misaligned"
                            label={t("common:birth_data")}
                            onChange={(e) => handleChange(e, "data_rojdeniya")}
                            name="data_rojdeniya"
                            type="date"
                            id="data_rojdeniya"
                            defaultValue="00-00-2000"
                            value={userInfo.data_rojdeniya}
                            required
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </p>
                        <FormHeading>{t("common:Personal_ata")}</FormHeading>
                        <UptadeSelect
                          // onChange={(e) => {
                          //   setValue(e.target.value);
                          // }}
                          name="type_document_id"
                          required
                          id="type_document_id"
                          onChange={(e) => handleChange(e, "type_document_id")}
                          value={userInfo.type_document_id}
                        >
                          <option selected>
                            {t("common:Citizens_passport")}
                          </option>
                          <option value={1}>Паспорт</option>
                          <option value={2}>ID карта</option>
                          {/* <option value="США">США</option> */}
                        </UptadeSelect>

                        <UserInfoInput
                          placeholder=" Например: 470347034703477"
                          label={t("common:Series_number_pas")}
                          onChange={(e) => handleChange(e, "serie_and_number")}
                          name="serie_and_number"
                          required
                          id="serie_and_number"
                          value={userInfo.serie_and_number}
                        />

                        <p>
                          <UserInfoInput
                            label={t("common:Issued_by")}
                            placeholder={t("Например: IIV 3411")}
                            onChange={(e) => handleChange(e, "given_place")}
                            name="given_place"
                            required
                            id="given_place"
                            value={userInfo.given_place}
                          />
                        </p>
                        <p>
                          <UserNumber
                            className="myInput"
                            placeholder="01/01/2000"
                            // id="demo-helper-text-misaligned"
                            label={t("common:Date_issue")}
                            onChange={(e) => handleChange(e, "given_time")}
                            name="given_time"
                            type="date"
                            id="given_time"
                            defaultValue="00-00-2000"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            required
                            value={userInfo.given_time}
                          />
                        </p>
                        <FormHeading>{t("common:Contact_details")}</FormHeading>
                        <p>
                          <UserDataBlock>
                            <UserNumber
                              className="myInput"
                              placeholder="998 90 989-89-89"
                              label={t("common:Phone_number")}
                              onChange={(e) => handleChange(e, "phonenumber1")}
                              name="phonenumber1"
                              required
                              id="phonenumber1"
                              value={userInfo.phonenumber1}
                            />
                            <UserEmail
                              placeholder="status585@mail.ru"
                              label="Email"
                              onChange={(e) => handleChange(e, "email1")}
                              name="email1"
                              required
                              id="email1"
                              value={userInfo.email1}
                            />
                          </UserDataBlock>

                          {add2 == "addet" ? (
                            <UserDataBlock>
                              <UserNumber
                                className="myInput"
                                placeholder="998 90 989-89-89"
                                label={t("common:Phone_number")}
                                onChange={(e) =>
                                  handleChange(e, "phonenumber2")
                                }
                                name="phonenumber2"
                                id="phonenumber2"
                                value={userInfo.phonenumber2}
                              />
                              <UserEmail
                                placeholder="status585@mail.ru"
                                label="Email"
                                onChange={(e) => handleChange(e, "email2")}
                                name="email2"
                                id="email2"
                                value={userInfo.email2}
                              />
                            </UserDataBlock>
                          ) : (
                            ""
                          )}
                          <div>
                            {addButt2 == "yes" ? (
                              <ButtonAdd onClick={AddHand2}>
                                {" "}
                                + {t("common:Add")}
                              </ButtonAdd>
                            ) : (
                              <ButtonAdd onClick={RemoveBtn2}>Убрать</ButtonAdd>
                            )}
                          </div>
                        </p>
                        <FormHeading>
                          {t("common:Residence_address")}
                        </FormHeading>
                        <UserInfoInput
                          label={t("common:index")}
                          placeholder={t("Например : 100012")}
                          onChange={(e) => handleChange(e, "indeks")}
                          name="indeks"
                          required
                          id="indeks"
                          value={userInfo.indeks}
                        />
                        <UptadeSelect
                          placeholder="Область"
                          onChange={(e) => {
                            handleChange(e, "oblast_id");
                            getDistrict(e.target.value);
                          }}
                          name="oblast_id"
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
                            handleChange(e, "region_id");
                          }}
                          name="region_id"
                          required
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
                        />
                        <UserHome
                          label={t("common:House")}
                          placeholder={t("47")}
                          onChange={(e) => handleChange(e, "dom")}
                          name="dom"
                          id="dom"
                          value={userInfo.dom}
                        />
                        <UserApartment
                          label={t("common:Apartment")}
                          placeholder={t("9")}
                          onChange={(e) => handleChange(e, "home")}
                          name="home"
                          id="home"
                          value={userInfo.home}
                        />

                        <ButtonBlock>
                          <CardButton type="submit">
                            {t("common:Save")}
                          </CardButton>
                        </ButtonBlock>
                      </FormBody>
                    </BodyForm>
                  ) : (
                    <>
                      <FormBody>
                        <FormHeading>Данные для оформления</FormHeading>
                        <UserInfoInput
                          placeholder="Khans"
                          label={"Название компании"}
                          name="company_name"
                          id="company_name"
                          onChange={(e) => handleChange(e, "company_name")}
                          value={userInfo.company_name}
                          required
                        />
                        <br />
                        <br />
                        <UserInfoInput
                          placeholder=""
                          label={"Юридический адрес"}
                          name="yuridik_address"
                          id="yuridik_address"
                          onChange={(e) => handleChange(e, "yuridik_address")}
                          value={userInfo.yuridik_address}
                          required
                        />
                        <br />
                        <br />
                        <UserInfoInput
                          placeholder="10855430604947"
                          label={"Свидетельство"}
                          name="svidetolsva"
                          id="svidetolsva"
                          onChange={(e) => handleChange(e, "svidetolsva")}
                          value={userInfo.svidetolsva}
                          required
                        />
                        <br />
                        <br />
                        <UserInfoInput
                          placeholder="10855430604947"
                          label={"ИНН"}
                          name="inn"
                          id="inn"
                          onChange={(e) => handleChange(e, "inn")}
                          value={userInfo.inn}
                          required
                        />
                        <br />
                        <br />

                        <ButtonBlock>
                          <CardButton type="submit">Отправить</CardButton>
                        </ButtonBlock>
                      </FormBody>
                    </>
                  )}
                </>
              ) : (
                ""
              )}
            </Avto>
          </FormBlock>
        </PageForm>

        <CostBlock>
          <ThisCost>Заполните до показа стоимости:</ThisCost>
          <CostValue>{progres}%</CostValue>
          <CostS className={"i" + progres} />
          {progres == "100" ? (
            ""
          ) : (
            <CostInfo> 60% за заполнение следующего шага</CostInfo>
          )}
        </CostBlock>
      </FormContainer>
    </GlobalFormBody>
  );
};

export default Health;
