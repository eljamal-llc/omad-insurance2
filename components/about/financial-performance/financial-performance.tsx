import { FC, useState } from "react";
import type { NextPage } from "next";
import { FinancialPerformanceProps } from "./financial-performance.t";
import Link from "next/dist/client/link";
import {
  ContainerHero,
  HeroBgItem,
  PageHeading,
  PageText,
} from "../../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
import {
  MissionBody,
  MissionContent,
  MissionNav,
  MissionNavItem,
} from "../mission/Mission.e";
import { SectionTitle, MainBtn, AboutNav } from "../../common";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import {
  FinancialYears,
  FinancialBlock,
  YearSpan,
  FinancialBlockTitle,
  FinicialBloclContent,
  DownloadBlock,
  FinicialP,
  DwBtnBlock,
  DwBlockBorder,
} from "./financial-performance.e";
import Image from "next/image";
// import PDFImage from "../../../../assets/images/about/carbon_document-pdf.png";

const main_image = "/slider1.jpg";
const PDFImage = "/carbon_document-pdf.png";
const FinancialPerformance: FC<FinancialPerformanceProps> = ({
  title,
  description,
  sidebars,
  data,
}) => {
  // console.log("inner ->>>>", data[0]);
  const [active, setActive] = useState("active");

  const HandlAct = () => {
    setActive("active");
  };
  const HandlPrivate = () => {
    setActive("active2");
  };
  const { t } = useTranslation();
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
            <FinancialBlock>
              <FinancialYears
                onClick={HandlAct}
                className={active == "active" ? "active" : ""}
              >
                <YearSpan>2020 год</YearSpan>
              </FinancialYears>
              <FinancialYears
                onClick={HandlPrivate}
                className={active == "active2" ? "active" : " "}
              >
                <YearSpan>2021 год</YearSpan>
              </FinancialYears>
            </FinancialBlock>
            {!!data[0] && (
              <>
                <FinancialBlockTitle>{data[0].title}</FinancialBlockTitle>
                <FinicialBloclContent>
                  {parse(data[0].description)}
                </FinicialBloclContent>
                {!!data[0].files[0] && (
                  <DwBlockBorder>
                    <DownloadBlock>
                      <Image src={PDFImage} alt="s" width={100} height={100} />
                      <FinicialBloclContent>
                        {data[0].files[0].title}
                        <FinicialP>{data[0].files[0].size}</FinicialP>{" "}
                        <FinicialP>
                          Обновлено {data[0].files[0].updated_at}
                        </FinicialP>
                      </FinicialBloclContent>
                    </DownloadBlock>
                    <DwBtnBlock>
                      <MainBtn
                        onClass="download"
                        text={t("common:Download")}
                        url={data[0].files[0].file}
                      />
                    </DwBtnBlock>
                  </DwBlockBorder>
                )}
              </>
            )}
            {!!data[1] && (
              <DwBlockBorder>
                <FinancialBlockTitle>{data[1].title}</FinancialBlockTitle>
                <DownloadBlock>
                  {!!data[1].files &&
                    data[1].files.map((item: any, idx: any) => (
                      <div key={idx}>
                        <DownloadBlock>
                          <Image
                            src={PDFImage}
                            alt="s"
                            width={100}
                            height={100}
                          />
                          <FinicialBloclContent>
                            {item.title}
                            <FinicialP>{item.size}</FinicialP>{" "}
                            <FinicialP>Обновлено {item.updated_at}</FinicialP>
                          </FinicialBloclContent>
                        </DownloadBlock>
                        <DwBtnBlock>
                          <MainBtn
                            onClass="download"
                            text={t("common:Download")}
                            url={item.file}
                          />
                        </DwBtnBlock>
                      </div>
                    ))}
                </DownloadBlock>
              </DwBlockBorder>
            )}
          </div>
          <AboutNav sidebars={sidebars} />
        </MissionContent>
      </MissionBody>
    </>
  );
};

export default FinancialPerformance;
