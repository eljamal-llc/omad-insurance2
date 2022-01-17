import { FC } from "react";
import Image from "next/image";
import { LeftPanelProps } from "./left-panel.t";
import parse from "html-react-parser";
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
const LeftPanel: FC<LeftPanelProps> = ({ dataLeft }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      {dataLeft?.map(
        // @ts-ignore
        (item, idx) =>
          !item.files.length ? (
            <LeftWrapper>
              <SectionTitle title={item.title} color="black" classN="title" />
              <LeftWrapperDescription>
                {parse(item.description)}
              </LeftWrapperDescription>
            </LeftWrapper>
          ) : item.files.length == 1 ? (

            
           
              <LeftWrapper className="bottom-wrap">
              <SectionTitle title={item.title} color="black" classN="title" />
              <LeftWrapperDescription className="description">
                {parse(item.description)}
              </LeftWrapperDescription>

              <LeftWrapperRow className="left-wrapper-row">
                <LeftWrapperPDF className="icon">
                  <PDFIcon>
                    <Image src={PDFImage} alt="test2" />
                  </PDFIcon>
                  <PDFInfo>
                    <PDFTitle>{item.title} </PDFTitle>
                    <PDFData>{item.size} </PDFData>
                    <PDFData>
                      {t("common:Updated_at")} {item.updated_at}
                    </PDFData>
                    <LeftButton>
                      <MainBtn
                        onClass="download"
                        text={t("common:Download")}
                        url={item.files[0].file}
                      />
                    </LeftButton>
                  </PDFInfo>
                </LeftWrapperPDF>
                <LeftWrapperPDF className="icon">
                  <PDFIcon>
                    <Image src={PDFImage} alt="test2" />
                  </PDFIcon>
                  <PDFInfo>
                    <PDFTitle>{item.title} </PDFTitle>
                    <PDFData>{item.size} </PDFData>
                    <PDFData>
                      {t("common:Updated_at")} {item.updated_at}
                    </PDFData>
                    <LeftButton>
                      <MainBtn
                        onClass="download"
                        text={t("common:Download")}
                        url={item.files[0].file}
                      />
                    </LeftButton>
                  </PDFInfo>
                </LeftWrapperPDF>
              </LeftWrapperRow>
              </LeftWrapper>
          ) : (
            <LeftWrapper>
              <SectionTitle title={item.title} color="black" classN="title" />
              <LeftWrapperRow>
                <LeftWrapperDescription>
                  {parse(item.description)}
                </LeftWrapperDescription>
                <LeftWrapperPDF>
                  <PDFIcon>
                    <Image src={PDFImage} alt="test2" />
                  </PDFIcon>
                  <PDFInfo>
                    <PDFTitle>{item.title} </PDFTitle>
                    <PDFData>{item.size} </PDFData>
                    <PDFData>
                      {t("common:Updated_at")} {item.updated_at}
                    </PDFData>
                    <LeftButton>
                      <MainBtn
                        onClass="download"
                        text={t("common:Download")}
                        url={item.files[0].file}
                      />
                    </LeftButton>
                  </PDFInfo>
                </LeftWrapperPDF>
              </LeftWrapperRow>
            </LeftWrapper>

          )
      )}
    </Wrapper>
  );
};

export default LeftPanel;
