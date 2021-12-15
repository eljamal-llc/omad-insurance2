import { FilledInput } from "@mui/material";
import { FC } from "react";
import { MainBtn } from "../../../common";
import { Formik, Field, Form } from "formik";
import {
  FormControl,
  RightButton,
  RightDescription,
  RightTitle,
  RightWrapper,
  Wrapper,
} from "./right-panel.e";

export interface RightPanelProps {}

const RightPanel: FC<RightPanelProps> = () => {
  return (
    <Wrapper>
      <RightWrapper className="vacancies">
        <RightTitle className="white">Вакансии</RightTitle>
        <RightDescription className="white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem a et
          velit erat est. Dui commodo vehicula nibh mi arcu facilisis elementum.
          Nisi adipiscing est luctus elementum vitae cursus est tincidunt. Sed
          nunc laoreet donec eu eget facilisis nisl. Luctus non tristique purus
          blandit. Egestas nec.
        </RightDescription>

        <RightButton>
          <MainBtn onClass="white" text="Узнать подробнее" url="/" />
        </RightButton>
      </RightWrapper>
      <RightWrapper>
        <RightTitle>Бланк строгой отчетности</RightTitle>
        <RightDescription>Проверка полиса</RightDescription>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <FormControl>
              <Field id="firstName" name="firstName" placeholder="Серия" />
            </FormControl>
            <FormControl>
              <Field id="lastName" name="lastName" placeholder="Номер полиса" />
            </FormControl>

            <RightButton className="bottom-button">
              <MainBtn onClass="blue" text="Проверить полис" url={null} />
            </RightButton>
          </Form>
        </Formik>
      </RightWrapper>
    </Wrapper>
  );
};

export default RightPanel;
