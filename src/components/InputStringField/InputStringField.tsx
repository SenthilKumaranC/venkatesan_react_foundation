import { useCallback, useState } from "react";

export interface IInputStringField {
  name: string;
  defaultValue: string;
  placeholder: string;
  onChange: Function;
}

const InputStringField = (props: IInputStringField) => {
  const [value, setValue] = useState(props.defaultValue);

  const listenForValueChange = useCallback(
    (dataFromInput: any) => {
      const input = dataFromInput.target.value;
      //this is local
      setValue(input);
      //this is for parent
      props.onChange(props.name,input);
    },
    [props]
  );

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
