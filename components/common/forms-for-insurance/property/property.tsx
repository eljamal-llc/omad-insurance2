import { FC, useState, forwardRef, useEffect } from "react";
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
  PrBlock,
} from "./property.e";
import MenuItem from "@mui/material/MenuItem";
import { PropertyProps } from "./property.t";
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
const Property: FC<PropertyProps> = ({ title, yurFace }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [check, setCheck] = useState(false);
  const [addButt, setAddBut] = useState("yes");
  const [districts, setDistricts] = useState([]);
  const [regions, setRegions] = useState([]);
  const [specifications, setSpecifications] = useState([]);
  const [docTypes, setDocTypes] = useState([]);

  useEffect(() => {
    api
      .get("cabinet/regions-list")
      .then((res) => {
        setRegions(res.data.data);
      })
      .catch((err) => {
        console.log("err", err.response.data);
      });
    api
      .get("cabinet/typeDocuments")
      .then((res) => {
        setDocTypes(res.data.data);
      })
      .catch((err) => {
        console.log("err", err.response.data);
      });
    api
      .get("forms/kvXarakteristikaList")
      .then((res) => {
        setSpecifications(res.data.data);
      })
      .catch((err) => {
        console.log("err", err.response.data);
      });
  }, []);
  const { t } = useTranslation();
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
  const [avto, setAvto] = useState("avto");
  const [insuranse, setInsuranse] = useState("");
  const [calc, setCalc] = useState("");
  const [progres, setPropgres] = useState("40");
  const [credit, setCredit] = useState(true);
  const [sobs, setSobs] = useState(false);
  const [ogrV, setOgrV] = useState(false);
  const [add, isAdd] = useState("");
  const [add2, isAdd2] = useState("");
  const [addButt2, setaddButt2] = useState("yes");

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState<any>(null);
  const handleChangeE = (event: any) => {
    setAge(event.target.value);
  };

  const AddHand2 = () => {
    isAdd2("addet");

    setaddButt2("");
  };
  const RemoveBtn2 = () => {
    isAdd2("");
    setaddButt2("yes");
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    api
      .post("forms/estates", userInfo)
      .then((res) => {
        // console.log("object ==>", res);
        setOpen(true);
        setTimeout(() => window.location.reload(), 3000);
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
  const NoAvto = (e: any) => {
    e.preventDefault();

    setAvto("");
    setInsuranse("insuranse");
    setStep(2);
    setPropgres("80");
    console.log();
  };
  const handleChange = (event: any, field: any) => {
    // console.log("==>>", event.target.checked);
    if (
      field == "was_be_dtp" ||
      field == "avto_credit" ||
      field == "bez_ogranacheniya_voditel" ||
      field == "snimayu_jily" ||
      field == "sdayu_arendu"
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
  const prevAV = () => {
    setAvto("avto");
    setInsuranse("");
    setPropgres("40");
    setCheck(false);
    setStep(1);
  };

  const CheckCredit = () => {
    setCredit(!credit);
  };
  const NoIns = (e: any) => {
    e.preventDefault();

    setPropgres("100");
    setStep(3);

    setCalc("calc");
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
            ?????????????????? ???????????????????? ?????????????? !
          </Alert>
        </Snackbar>

        <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {/* @ts-ignore */}
            {/* {errorMsg && errorMsg.type == "login" && errorMsg.message} */}
            {!!errorMsg &&
              errorMsg.message.length > 0 &&
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
                    {yurFace == true ? "(????.????????)" : "(??????.????????)"}
                  </small>{" "}
                  &nbsp; &nbsp;{" "}
                  <StepIn>
                    ?????? <span>{step} </span>???? 3
                  </StepIn>{" "}
                </HeIs>

                <FormTitle>?????????????? ?????????? ????????????????????????</FormTitle>

                <PrBlock>
                  <Engine
                    label="????????????*"
                    placeholder=" ??????????????"
                    onChange={(e) => handleChange(e, "region")}
                    value={userInfo.region}
                    name="region"
                    id="region"
                    required
                  />
                  <br />
                  <br />

                  <Engine
                    label="?????????? ?????? ??????????*"
                    placeholder="?????????????? ?????????????? "
                    onChange={(e) => handleChange(e, "rayon")}
                    value={userInfo.rayon}
                    name="rayon"
                    id="rayon"
                    required
                  />
                  <br />
                  <br />

                  <Engine
                    label="???????????????????? ??????????*"
                    placeholder="???????????? "
                    onChange={(e) => handleChange(e, "punkt")}
                    value={userInfo.punkt}
                    name="punkt"
                    id="punkt"
                    required
                  />
                  <br />
                  <br />
                  <Engine
                    label="??????????*"
                    placeholder="???????????????? "
                    onChange={(e) => handleChange(e, "ulitsa")}
                    value={userInfo.ulitsa}
                    name="ulitsa"
                    id="ulitsa"
                    required
                  />
                  <br />
                  <br />
                  <FlexBlock>
                    <UserHome
                      label={"??????????????*"}
                      placeholder={t("47")}
                      onChange={(e) => handleChange(e, "kvartal")}
                      value={userInfo.kvartal}
                      name="kvartal"
                      id="kvartal"
                      required
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <UserHome
                      label={"??????"}
                      placeholder={t("18")}
                      onChange={(e) => handleChange(e, "dom1")}
                      value={userInfo.dom1}
                      name="dom1"
                      id="dom1"
                      required
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <UserHome
                      label={"????????????????*"}
                      placeholder={t("03")}
                      onChange={(e) => handleChange(e, "kvartira")}
                      value={userInfo.kvartira}
                      name="kvartira"
                      id="kvartira"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FlexBlock>
                </PrBlock>

                <FormButtonBlock>
                  <FormBtnCheck>
                    <FormGroup>
                      <Checkbox {...label} onClick={() => setCheck(!check)} />
                    </FormGroup>
                    <FormSog className="label">
                      ?? ???????????????? ?????????????? ???????????????? ???????????????????? ?? ??????????????????????
                      <Link href="" passHref>
                        <a></a>
                      </Link>
                    </FormSog>
                    <FormInsBtn onClick={NoAvto} disabled={!check}>
                      ??????????
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
                      {yurFace == true ? "(????.????????)" : "(??????.????????)"}
                    </small>{" "}
                  </HeIs>

                  {/* <FormInfo>???????????????? ???????????????? ???? ????????????, ?????????????????? ?????????? ???? ????????????</FormInfo> */}
                  <UserNumber
                    className="myInput"
                    placeholder="???????? ???????????? ???????????????? ??????????"
                    // id="demo-helper-text-misaligned"
                    label={t("???????? ???????????? ???????????????? ??????????")}
                    onChange={(e) => handleChange(e, "data_nachala")}
                    value={userInfo.data_nachala}
                    name="data_nachala"
                    id="data_nachala"
                    defaultValue="00-00-2000"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                  />

                  <FormInfo>????????????????????????????</FormInfo>
                  <FlexBlock>
                    <FormsDrop
                      className="high"
                      // label='??????. ?????????????? ????????????????*'
                      placeholder=" ????????????????????* "
                      onChange={(e) => handleChange(e, "xarakteristika_id")}
                      value={userInfo.xarakteristika_id}
                      name="xarakteristika_id"
                      id="xarakteristika_id"
                      required
                    >
                      {/* <option >???????????????????? ????????????????????</option> */}
                      {specifications?.map((item: any, idx: any) => (
                        <option key={idx} value={item.id}>
                          {item.title}
                        </option>
                      ))}
                    </FormsDrop>
                  </FlexBlock>

                  <FormInfo>???????????? ??????????</FormInfo>
                  <FlexBlock className="low">
                    <p>
                      <Checkbox
                        {...label}
                        id="???????? ?? ????????????"
                        onChange={(e) => handleChange(e, "sdayu_arendu")}
                        name="sdayu_arendu"
                        value={userInfo.sdayu_arendu}
                      />
                      ???????? ?? ????????????
                    </p>
                    <p>
                      <Checkbox
                        {...label}
                        id="???????????? ??????????"
                        onChange={(e) => handleChange(e, "snimayu_jily")}
                        name="snimayu_jily"
                        value={userInfo.snimayu_jily}
                      />
                      ???????????? ??????????
                    </p>
                  </FlexBlock>

                  <FormButtonBlock>
                    <FormBtnCheck>
                      <a onClick={prevAV}>??????????</a>
                    </FormBtnCheck>
                    <FormInsBtn onClick={NoIns}>?????????? </FormInsBtn>
                  </FormButtonBlock>
                </>
              ) : (
                ""
              )}
              {calc == "calc" ? (
                <>
                  <HeIs>
                    {title}
                    <small>
                      {" "}
                      {yurFace == true ? "(????.????????)" : "(??????.????????)"}
                    </small>
                  </HeIs>

                  {yurFace == false ? (
                    <BodyForm>
                      <FormBody>
                        <FormHeading>{t("common:Personal_ata")}</FormHeading>
                        <p>
                          <UserInfoInput
                            placeholder="???????????? ???????? ????????????????"
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
                          {docTypes?.map((item: any, idx: any) => (
                            <option value={item.id} key={idx}>
                              {item.title}
                            </option>
                          ))}
                        </UptadeSelect>

                        <UserInfoInput
                          placeholder=" ????????????????: 470347034703477"
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
                            placeholder={t("????????????????: IIV 3411")}
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
                              <ButtonAdd onClick={RemoveBtn2}>????????????</ButtonAdd>
                            )}
                          </div>
                        </p>
                        <FormHeading>
                          {t("common:Residence_address")}
                        </FormHeading>
                        <UserInfoInput
                          label={t("common:index")}
                          placeholder={t("???????????????? : 100012")}
                          onChange={(e) => handleChange(e, "indeks")}
                          name="indeks"
                          required
                          id="indeks"
                          value={userInfo.indeks}
                        />
                        <UptadeSelect
                          placeholder="??????????????"
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
                          placeholder="??????????????"
                          onChange={(e) => {
                            handleChange(e, "region_id");
                          }}
                          name="region_id"
                          required
                        >
                          <option selected value="??????????????">
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
                          placeholder={t("???????????????? :MirzoUlugbek 23")}
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
                        <FormHeading>???????????? ?????? ????????????????????</FormHeading>
                        <UserInfoInput
                          placeholder="Khans"
                          label={"???????????????? ????????????????"}
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
                          label={"?????????????????????? ??????????"}
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
                          label={"??????????????????????????"}
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
                          label={"??????"}
                          name="inn"
                          id="inn"
                          onChange={(e) => handleChange(e, "inn")}
                          value={userInfo.inn}
                          required
                        />
                        <br />
                        <br />

                        <ButtonBlock>
                          <CardButton type="submit">??????????????????</CardButton>
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
          <ThisCost>?????????????????? ???? ???????????? ??????????????????:</ThisCost>
          <CostValue>{progres}%</CostValue>
          <CostS className={"i" + progres} />
          {progres == "100" ? (
            ""
          ) : (
            <CostInfo>
              {" "}
              {progres == "80" ? "+20%" : "+40% "} ???? ???????????????????? ???????????????????? ????????
            </CostInfo>
          )}
        </CostBlock>
      </FormContainer>
    </GlobalFormBody>
  );
};

export default Property;
