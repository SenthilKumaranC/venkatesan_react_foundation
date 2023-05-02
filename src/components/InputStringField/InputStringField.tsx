import { useCallback, useEffect, useState } from "react";

export interface IInputStringField {
  name: string;
  defaultValue: string;
  placeholder: string;
  onChange: Function;
}

const InputStringField = (props: IInputStringField) => {
  const [value, setValue] = useState(props.defaultValue);
  const [valid, setValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!!value) {
      //if(value!==null || value!==undefined || value!==""){
      setValid(true);
      setErrorMessage("");
    } else {
      setValid(false);
      setErrorMessage("Please enter some First Name");
    }
  }, [errorMessage, props, valid, value]);

  useEffect(() => {
    props.onChange({ value, name: props.name, valid, errorMessage });
  }, [errorMessage, props, valid, value]);

  const listenForValueChange = useCallback((dataFromInput: any) => {
    const input = dataFromInput.target.value;
    setValue(input);
  }, []);

  return (
    <input
      name={props.name}
      placeholder={props.placeholder}
      value={value}
      onChange={listenForValueChange}
    ></input>
  );
};

export default InputStringField;
