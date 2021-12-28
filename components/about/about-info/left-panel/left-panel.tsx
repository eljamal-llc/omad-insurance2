import { FC } from "react";
import Image from "next/image";
import { LeftPanelProps } from "./left-panel.t";
import {
  LeftButton,
  LeftWrapper,
  LeftWrapperDescription,
  LeftWrapperPDF,
  LeftWrapperRow,
  PDFData,
  PDFIcon,
  PDFInfo,
  PDFTitle,
  Wrapper,
} from "./left-panel.e";
import { SectionTitle, MainBtn } from "../../../common";

import PDFImage from "../../../../assets/images/about/carbon_document-pdf.png";
import { useTranslation } from "react-i18next";
const LeftPanel: FC<LeftPanelProps> = () => {
  const {t} = useTranslation()
  return (
    <Wrapper>
      <LeftWrapper>
        <SectionTitle title={t('common:Licenses')} color="black" classN="title" />
        <LeftWrapperRow>
          <LeftWrapperDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
            consectetur est facilisis tristique dolor. Congue massa vitae
            feugiat egestas cras tempus. Ac proin lacus id placerat quis nunc,
            leo pellentesque. Eros, etiam dui risus non massa tortor at eros.
            Varius nulla magnis habitant feugiat tortor.
          </LeftWrapperDescription>
          <LeftWrapperPDF>
            <PDFIcon>
              <Image src={PDFImage} alt="test2" />
            </PDFIcon>
            <PDFInfo>
              <PDFTitle>{t('common:Company_licenses')} </PDFTitle>
              <PDFData>1017.18 КБ</PDFData>
              <PDFData>{t('common:Updated_at')}</PDFData>

              <LeftButton>
                <MainBtn onClass="download" text={t('common:Download')} url="/" />
              </LeftButton>
            </PDFInfo>
          </LeftWrapperPDF>
        </LeftWrapperRow>ч
      </LeftWrapper>

      <LeftWrapper>
        <SectionTitle title={t('common:Capital')} color="black" classN="title" />
        <LeftWrapperDescription>
        {t('common:The_paid_up_authorized_capital_of_the_Company_is_100_billion_UZS')}
        </LeftWrapperDescription>
      </LeftWrapper>

      <LeftWrapper className="bottom-wrap">
        <SectionTitle title={t('common:Capital')} color="black" classN="title" />
        <LeftWrapperDescription className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis nisi,
          sed amet eu, nec. Iaculis consectetur molestie scelerisque arcu, et
          fermentum cursus turpis eu. Neque fermentum quisque dis auctor. Morbi
          a nulla elementum consectetur. Cras at vulputate amet lectus maecenas
          tristique libero tempor purus. Vel amet et quis orci netus urna.
        </LeftWrapperDescription>

        <LeftWrapperRow className="left-wrapper-row">
          <LeftWrapperPDF className="icon">
            <PDFIcon>
              <Image src={PDFImage} alt="test2" />
            </PDFIcon>
            <PDFInfo>
              <PDFTitle>{t('common:Company_licenses')}</PDFTitle>
              <PDFData>1017.18 КБ</PDFData>
              <PDFData>{t('common:Updated_at')}</PDFData>

              <LeftButton>
                <MainBtn onClass="download" text={t('common:Download')} url="/" />
              </LeftButton>
            </PDFInfo>
          </LeftWrapperPDF>
          <LeftWrapperPDF className="icon">
            <PDFIcon>
              <Image src={PDFImage} alt="test2" />
            </PDFIcon>
            <PDFInfo>
              <PDFTitle>{t('common:Company_licenses')}</PDFTitle>
              <PDFData>1017.18 КБ</PDFData>
              <PDFData>{t('common:Updated_at')}</PDFData>

              <LeftButton>
                <MainBtn onClass="download" text={t('common:Download')} url="/" />
              </LeftButton>
            </PDFInfo>
          </LeftWrapperPDF>
        </LeftWrapperRow>
      </LeftWrapper>
    </Wrapper>
  );
};

export default LeftPanel;
