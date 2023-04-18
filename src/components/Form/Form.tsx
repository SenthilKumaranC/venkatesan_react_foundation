import { FormEvent, useCallback, useRef } from "react";
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
        

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
