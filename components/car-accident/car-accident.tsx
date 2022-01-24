import { FC, useState } from "react";
import type { NextPage } from "next";
    import {MissionBody,
        MissionNav,
        MissionNavItem,
        MissionContent,
        MissionContentTitle,
        MissionContentAbout,
        MissionContentAbItem
        } from '../about/mission/Mission.e'
import Link from "next/dist/client/link";
import { ContainerHero, HeroBgItem, PageHeading, PageText } from "../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../styles/global-styles.e";
import BreadcrumbsBlock from "../common/bread-crumbs/Breadcrumbs";
import {AboutNav, MainBtn} from '../common'
import { useTranslation } from "react-i18next";
import { CarInProps } from "./car-accident.t";
import Image from "next/dist/client/image";
import {
  ChtoDelat,
  CHtototTam,
  Danger,
  DangerDes,
  Descs,
  Docs,
  DocsDes,
  DowBlock,
  DowDiv,
  FireLine, LineNumber, Punkt, PunktDes, Punkts, TitleDoc
} from './car-accident.e'
import { InfoDoc, InfoDocItem, Suk } from "../about/Insurance-rules/Insurance-rules.e";
import { FinancialBlock, FinancialYears, YearSpan } from "../about/financial-performance/financial-performance.e";
// import { Link } from "@mui/icons-material";
const main_image = '/slider1.jpg'
const CardAccident: FC<CarInProps> = ({title,description}) => {
const {t} = useTranslation()
const PDFImage = '/carbon_document-pdf.png'
const [active , setActive ] = useState('active')

const HandlAct = () =>{
  setActive('active')
}
const HandlPrivate = () =>{
  setActive('active2')
}
   
  // console.log("inner ->>>>", data[0]);

  return (
  <>
   <ContainerHero imgUrl={main_image}>
      <GWrapper>
        <HeroBgItem>
          <PageHeading>{title}</PageHeading>
          <PageText>{description}</PageText>
        </HeroBgItem>
      </GWrapper>
    </ContainerHero>
    <MissionBody>
      <MissionContent>
      <div>
        <MissionContentTitle>Что делать при ДТП</MissionContentTitle>
      <CHtototTam>
          <Punkts>
              <Punkt>
                1
              </Punkt>.
              <PunktDes>
                Остановитесь
                <ChtoDelat>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi expedita magnam eos corporis nam repudiandae ipsum culpa, consequuntur laboriosam et.</ChtoDelat>
                
              </PunktDes>
            </Punkts>
            <Punkts>
              <Punkt>
                2
              </Punkt>
              <PunktDes>
              Включите аварийную сигнализацию и установите знак аварийной остановки
             <ChtoDelat>Знак аварийной остановки выставляется в населенном пункте на расстоянии 15 м от транспортного средства, вне населенного пункта — на расстоянии 30 м.</ChtoDelat>
              </PunktDes>
            </Punkts>
            <Punkts>
              <Punkt>
                3
              </Punkt>
              <PunktDes>
              Сообщите о случившемся в ГИБДД
              <ChtoDelat>Сообщите о случившемся в ГИБДД
                <ChtoDelat>в результате ДТП вред причинен только транспортным средствам;
                          ДТП произошло в результате взаимодействия (столкновения) двух транспортных средств (включая транспортные средства с прицепами к ним);
                          гражданская ответственность владельцев транспортных средств застрахована по ОСАГО;
                          </ChtoDelat>
                          <ChtoDelat>
                          С подробной информацией об оформлении ДТП без участия ГИБДД Вы можете ознакомиться ЗДЕСЬ

                          </ChtoDelat>
              </ChtoDelat>
              </PunktDes>
            </Punkts>
            <Punkts>
              <Punkt>
                4
              </Punkt>
              <PunktDes>
              Вызовите скорую медицинскую помощь, если есть пострадавшие
              <ChtoDelat>
              До прибытия экипажа скорой помощи постарайтесь оказать пострадавшим первую доврачебную помощь

              </ChtoDelat>
              </PunktDes>
            </Punkts>
            <Punkts>
              <Punkt>
                5
              </Punkt>
              <PunktDes>
              Зафиксируйте посредством фотосъемки или видеозаписи государственные регистрационные знаки транспортных средств участников ДТП, места повреждений транспортных средств, расположение транспортных средств относительно друг друга, других автомобилей и объектов, государственные регистрационные знаки свидетелей ДТП
              <ChtoDelat>
              В случае отсутствия государственных регистрационных знаков зафиксируйте идентификационные номера (VIN) транспортных средств

              </ChtoDelat>
              </PunktDes>
            </Punkts>
            <Punkts>
              <Punkt>
                6
              </Punkt>
              <PunktDes>
              Если ваш автомобиль создает препятствие движению других транспортных средств, по возможности освободите проезжую часть
              <ChtoDelat>
              Более подробная информация о случаях, когда проезжую часть освободить необходимо, содержится в Правилах дорожного движения РУ

              </ChtoDelat>
              </PunktDes>
            </Punkts>
            <Punkts>
              <Punkt>
                7
              </Punkt>
              <PunktDes>
              Заполнить вместе с другим участником Извещение о ДТП на бумажном носителе
              <ChtoDelat>ВАЖНО: Извещение о ДТП может быть оформлено в виде электронного документа. Подробнее об электронном Извещении о ДТП смотри по ссылке.</ChtoDelat>
              
              </PunktDes>
            </Punkts>
            <Punkts>
              <Punkt>
                8
              </Punkt>
              <PunktDes>
              Постарайтесь сохранить следы и предметы, имеющие отношение к ДТП (в случае если ДТП будет оформляться с участием ГИБДД)
              <ChtoDelat>Организуйте обход/объезд следов от колес на полотне дороги, обочинах, на других объектах, следов жидкостей, обломков деталей транспортных средств (если они не являются препятствием для участников дорожного движения).</ChtoDelat>
              </PunktDes>
            </Punkts>
            <Punkts>
              <Punkt>
                9
              </Punkt>
              <PunktDes>
              Подайте заявление и полный пакет документов
              <ChtoDelat>В офис страховой компании виновника или в нашу компанию</ChtoDelat>
              </PunktDes>
            </Punkts>
      </CHtototTam>
      <DowBlock>
        <DowDiv>
        <Image src={PDFImage} width={85} height={82} /> 
                    <InfoDoc>Актуарное заключение за 2020 год.pdf
                        </InfoDoc>
                    <InfoDocItem> 19.31 МБ
                        Обновлено 24.05.2021 в 14:0</InfoDocItem>
                        <Suk>
                            <MainBtn
                                    onClass="download"
                                     text={t("common:Download")} url={null}                        // url={item.files[0].file}
                        />
                        </Suk>
        </DowDiv>
        <DowDiv>
        <Image src={PDFImage} width={85} height={82} /> 
                    <InfoDoc>Актуарное заключение за 2020 год.pdf
                        </InfoDoc>
                    <InfoDocItem> 19.31 МБ
                        Обновлено 24.05.2021 в 14:0</InfoDocItem>
                        <Suk>
                            <MainBtn
                                    onClass="download"
                                     text={t("common:Download")} url={null}                        // url={item.files[0].file}
                        />
                        </Suk>
        </DowDiv>
        <DowDiv>
        <Image src={PDFImage} width={85} height={82} /> 
                    <InfoDoc>Актуарное заключение за 2020 год.pdf
                        </InfoDoc>
                    <InfoDocItem> 19.31 МБ
                        Обновлено 24.05.2021 в 14:0</InfoDocItem>
                        <Suk>
                            <MainBtn
                                    onClass="download"
                                     text={t("common:Download")} url={null}                        // url={item.files[0].file}
                        />
                        </Suk>
        </DowDiv>
        <DowDiv>
        <Image src={PDFImage} width={85} height={82} /> 
                    <InfoDoc>Актуарное заключение за 2020 год.pdf
                        </InfoDoc>
                    <InfoDocItem> 19.31 МБ
                        Обновлено 24.05.2021 в 14:0</InfoDocItem>
                        <Suk>
                            <MainBtn
                                    onClass="download"
                                     text={t("common:Download")} url={null}                        // url={item.files[0].file}
                        />
                        </Suk>
        </DowDiv>
                    
                        
        </DowBlock>
        <MissionContentTitle>Какие документы необходимо предоставить?</MissionContentTitle>
        <FinancialBlock>
            <FinancialYears onClick={HandlAct} className={active == 'active' ? 'active' : ''}>
                <YearSpan>Физическим лицам</YearSpan>
            </FinancialYears>
            <FinancialYears onClick={HandlPrivate} className={active == 'active2' ?  'active' : " "}>
                <YearSpan>Юридическим лицам</YearSpan>
            </FinancialYears>
             
          </FinancialBlock>
          <Docs>
            <Descs>
            <DocsDes>
                Документ, удостоверяющий личность;
                </DocsDes>
                <DocsDes>
                Доверенность на право представления интересов в страховой компании, оформленная нотариально (если вы не являетесь Собственником поврежденного транспортного средства);

                </DocsDes>
                <DocsDes>
                Водительское удостоверение (водителя, управлявшего поврежденным ТС в момент ДТП), если обращение по договору КАСКО;

                </DocsDes>
                <DocsDes>
                Свидетельство о регистрации ТС или иной документ на право собственности на ТС;

                </DocsDes>
                <DocsDes>
                Извещение о ДТП, заполненное обоими участниками (в случае, если Извещение о ДТП было оформлено на бумажном носителе, а не в виде электронного документа);

                </DocsDes>
                <DocsDes>
                Банковские реквизиты (если форма выплаты — на расчетный счет);

                </DocsDes>
                <DocsDes>
                Фото и видео с места события (при наличии).

                </DocsDes>
            </Descs>
               <TitleDoc>ДОКУМЕНТЫ ИЗ ГИБДД, ЕСЛИ ДТП ОФОРМЛЯЛОСЬ С УЧАСТИЕМ РАБОТНИКОВ КОМПЕТЕНТНЫХ ОРГАНОВ:</TitleDoc>
               <Descs>
                  <DocsDes>
                  Постановление по делу об административном правонарушении;
                  </DocsDes>
                  <DocsDes>
                  Определение о возбуждении / отказе в возбуждении дела об административном правонарушении;
                  </DocsDes>
                  <DocsDes>
                  Результаты медицинского освидетельствования - для обращений по договору КАСКО (если проводилось);

                  </DocsDes>
                  <DocsDes>
                  Протокол об административном правонарушении (если составлялся).

                  </DocsDes>
               </Descs>
               <TitleDoc>ДОКУМЕНТЫ ДЛЯ ЗАПОЛНЕНИЯ</TitleDoc>
               <DowBlock>
                  <DowDiv>
                  <Image src={PDFImage} width={85} height={82} /> 
                              <InfoDoc>Актуарное заключение за 2020 год.pdf
                                  </InfoDoc>
                              <InfoDocItem> 19.31 МБ
                                  Обновлено 24.05.2021 в 14:0</InfoDocItem>
                                  <Suk>
                                      <MainBtn
                                              onClass="download"
                                              text={t("common:Download")} url={null}                        // url={item.files[0].file}
                                  />
                                  </Suk>
                  </DowDiv>
                  <DowDiv>
                  <Image src={PDFImage} width={85} height={82} /> 
                              <InfoDoc>Актуарное заключение за 2020 год.pdf
                                  </InfoDoc>
                              <InfoDocItem> 19.31 МБ
                                  Обновлено 24.05.2021 в 14:0</InfoDocItem>
                                  <Suk>
                                      <MainBtn
                                              onClass="download"
                                              text={t("common:Download")} url={null}                        // url={item.files[0].file}
                                  />
                                  </Suk>
                  </DowDiv>
                  <DowDiv>
                  <Image src={PDFImage} width={85} height={82} /> 
                              <InfoDoc>Актуарное заключение за 2020 год.pdf
                                  </InfoDoc>
                              <InfoDocItem> 19.31 МБ
                                  Обновлено 24.05.2021 в 14:0</InfoDocItem>
                                  <Suk>
                                      <MainBtn
                                              onClass="download"
                                              text={t("common:Download")} url={null}                        // url={item.files[0].file}
                                  />
                                  </Suk>
                  </DowDiv>
                  <DowDiv>
                  <Image src={PDFImage} width={85} height={82} /> 
                              <InfoDoc>Актуарное заключение за 2020 год.pdf
                                  </InfoDoc>
                              <InfoDocItem> 19.31 МБ
                                  Обновлено 24.05.2021 в 14:0</InfoDocItem>
                                  <Suk>
                                      <MainBtn
                                              onClass="download"
                                              text={t("common:Download")} url={null}                        // url={item.files[0].file}
                                  />
                                  </Suk>
                  </DowDiv>
                  <DowDiv>
                  <Image src={PDFImage} width={85} height={82} /> 
                              <InfoDoc>Актуарное заключение за 2020 год.pdf
                                  </InfoDoc>
                              <InfoDocItem> 19.31 МБ
                                  Обновлено 24.05.2021 в 14:0</InfoDocItem>
                                  <Suk>
                                      <MainBtn
                                              onClass="download"
                                              text={t("common:Download")} url={null}                        // url={item.files[0].file}
                                  />
                                  </Suk>
                  </DowDiv>
                              
                                  
            </DowBlock>
          </Docs>
      </div>
        <FireLine>
          <MissionContentTitle>Горячая линия</MissionContentTitle>
          <LineNumber>8 495 739-01-01</LineNumber>
          <span>для звонков из Ташкента</span>
          <LineNumber>8 900 555-11-55</LineNumber>
          <span>для звонков из регионов.</span>
          <Danger>Внимание!</Danger>
        <DangerDes>Звонок может тарифицироваться как междугородный в соответствии с тарифами вашего оператора связи</DangerDes>
        </FireLine>
      
      </MissionContent>
     
    </MissionBody>
  </>
   
    
  );


};

export default CardAccident;
