import { FormEvent, useCallback, useRef } from "react";
import InputRadioGroupField from "../InputRadioGroupField/InputRadioGroupField";
import InputSelectField from "../InputSelectField/InputSelectField";
import InputStringField from "../InputStringField/InputStringField";
import "./Form.css";

export interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const Form = () => {
  const formData = useRef<IForm>({
    firstName: "Rajini",
    lastName: "Kanth",
    email: "",
    phone: "",
  });

  const sendToServer = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  const informParent = useCallback(
    (childName: keyof IForm, childValue: any) => {
      formData.current[childName] = childValue;
      console.log(formData.current);
    },
    []
  );

  return (
    <>
      <form className="Form" onSubmit={sendToServer}>
        <InputStringField
          name={"firstName"}
          defaultValue={formData.current.firstName}
          placeholder="Enter First Name"
          onChange={informParent}
        />
        <InputStringField
          name="lastName"
          defaultValue={formData.current.lastName}
          placeholder="Enter Last Name"
          onChange={informParent}
        />
        <InputStringField
          name="email"
          defaultValue={formData.current.email}
          placeholder="Enter Email"
          onChange={informParent}
        />

        <InputStringField
          name="phone"
          defaultValue={formData.current.phone}
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
            { id: "gender", displayValue: "Choose Gender", header:true },
            { id: "male", displayValue: "Male" , header:false },
            { id: "female", displayValue: "Female" , header:false },
            { id: "colors", displayValue: "Choose Colors" , header:true },
            { id: "orange", displayValue: "Orange" , header:false },
            { id: "yellow", displayValue: "Yellow" , header:false },
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
