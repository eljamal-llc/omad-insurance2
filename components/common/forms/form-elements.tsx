import { FC } from "react";

import { FormElementsProps } from "./form-elements.t";
import { Wrapper, WrapperError, WrapperInput } from "./form-elements.e";

const FormElements: FC<FormElementsProps> = ({
  inputType,
  name,
  classN,
  placeholder,
  type,
  onChange,
  onBlur,
  error,
}) => {
  switch (inputType) {
    case "input-text":
      return (
        <WrapperInput>
          <input
            type={type}
            placeholder={placeholder}
            className={`form-control ${classN}`}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
          />
          <WrapperError>{error}</WrapperError>
        </WrapperInput>
      );
      break;
  }
  return null;
};

export default FormElements;
