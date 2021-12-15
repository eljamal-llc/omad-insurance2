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

const LeftPanel: FC<LeftPanelProps> = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <SectionTitle title="Лицензии" color="black" classN="title" />
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
              <PDFTitle>Лицензии компании (RUS/EN)</PDFTitle>
              <PDFData>1017.18 КБ</PDFData>
              <PDFData>Обновлено 20.09.2021 в 13:05</PDFData>

              <LeftButton>
                <MainBtn onClass="download" text="Cкачать" url="/" />
              </LeftButton>
            </PDFInfo>
          </LeftWrapperPDF>
        </LeftWrapperRow>
      </LeftWrapper>

      <LeftWrapper>
        <SectionTitle title="Капитал" color="black" classN="title" />
        <LeftWrapperDescription>
          Оплаченный уставный капитал Компании составляет 100 млрд сум.
        </LeftWrapperDescription>
      </LeftWrapper>

      <LeftWrapper className="bottom-wrap">
        <SectionTitle title="Капитал" color="black" classN="title" />
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
              <PDFTitle>Лицензии компании (RUS/EN)</PDFTitle>
              <PDFData>1017.18 КБ</PDFData>
              <PDFData>Обновлено 20.09.2021 в 13:05</PDFData>

              <LeftButton>
                <MainBtn onClass="download" text="Cкачать" url="/" />
              </LeftButton>
            </PDFInfo>
          </LeftWrapperPDF>
          <LeftWrapperPDF className="icon">
            <PDFIcon>
              <Image src={PDFImage} alt="test2" />
            </PDFIcon>
            <PDFInfo>
              <PDFTitle>Лицензии компании (RUS/EN)</PDFTitle>
              <PDFData>1017.18 КБ</PDFData>
              <PDFData>Обновлено 20.09.2021 в 13:05</PDFData>

              <LeftButton>
                <MainBtn onClass="download" text="Cкачать" url="/" />
              </LeftButton>
            </PDFInfo>
          </LeftWrapperPDF>
        </LeftWrapperRow>
      </LeftWrapper>
    </Wrapper>
  );
};

export default LeftPanel;
