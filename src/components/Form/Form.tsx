import { FormEvent, useCallback, useRef } from "react";
import InputRadioGroupField from "../InputRadioGroupField/InputRadioGroupField";
import InputSelectField from "../InputSelectField/InputSelectField";
import InputStringField from "../InputStringField/InputStringField";
import "./Form.css";

export interface IChildData {
  name: keyof IForm;
  value: any;
  valid?: boolean;
  errorMessage?: string;
}
export interface IForm {
  firstName: IChildData;
  lastName: IChildData;
  email: IChildData;
  phone: IChildData;
}

const Form = () => {
  const formData = useRef<IForm>({
    firstName: { value: "Rajini", name: "firstName" },
    lastName: { value: "Kanth", name: "lastName" },
    email: { value: "", name: "email" },
    phone: { value: "", name: "phone" },
  });

  const sendToServer = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  const informParent = useCallback(
    ({ value, name, valid, errorMessage }: IChildData) => {
      formData.current[name] = { value, valid, errorMessage, name };
      //formData.current[childName] = childValue;
      console.log(formData.current);
    },
    []
  );

  return (
    <>
      <form className="Form" onSubmit={sendToServer}>
        <InputStringField
          name={"firstName"}
          defaultValue={formData.current.firstName.value}
          placeholder="Enter First Name"
          onChange={informParent}
        />
        <InputStringField
          name="lastName"
          defaultValue={formData.current.lastName.value}
          placeholder="Enter Last Name"
          onChange={informParent}
        />
        <InputStringField
          name="email"
          defaultValue={formData.current.email.value}
          placeholder="Enter Email"
          onChange={informParent}
        />

        <InputStringField
          name="phone"
          defaultValue={formData.current.phone.value}
          placeholder="Enter Phone No"
          onChange={informParent}
        />

        <InputRadioGroupField
          name="gender"
          defaultOption={"male"}
          options={[
            { id: "male", displayValue: "Male" },
            { id: "female", displayValue: "Female" },
            { id: "transgender", displayValue: "Transgender" },
          ]}
          onChange={informParent}
          optionGroupName={"Choose Gender"}
        />

        <InputRadioGroupField
          name="color"
          defaultOption={"blue"}
          options={[
            { id: "green", displayValue: "Green" },
            { id: "red", displayValue: "Red" },
            { id: "blue", displayValue: "Blue" },
            { id: "orange", displayValue: "Orange" },
            { id: "yellow", displayValue: "Yellow" },
          ]}
          onChange={informParent}
          optionGroupName={"Choose Fav Color"}
        />

        <InputSelectField
          name="color"
          defaultOption={"blue"}
          options={[
            { id: "male", displayValue: "Male", header: false },
            { id: "female", displayValue: "Female", header: false },
            { id: "orange", displayValue: "Orange", header: false },
            { id: "yellow", displayValue: "Yellow", header: false },
          ]}
          onChange={informParent}
          optionGroupName={"Choose Fav Color"}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
