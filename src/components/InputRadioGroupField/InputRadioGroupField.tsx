import { useCallback, useState } from "react";

export interface IInputRadioGroupField {
  name: string;
  defaultOption: string;
  options: any[];
  onChange: Function;
  optionGroupName:string;
}

const InputRadioGroupField = (props: IInputRadioGroupField) => {
  const [selectedOption, setSelectedOption] = useState(props.defaultOption);

  const listenForValueChange = useCallback(
    (dataFromInput: any) => {
      const input = dataFromInput.target.value;
      //this is local
      setSelectedOption(input);
      //this is for parent
      props.onChange(props.name, input);
    },
    [props]
  );

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      {props.optionGroupName}
      {props.options.map((_option, index) => (
        <div key={_option.id}>
          <input
            checked={_option.id===selectedOption}
            name={props.name}
            type="radio"
            value={_option.id}
            onChange={listenForValueChange}
          ></input>
          <label htmlFor={props.name}>{_option.displayValue}</label>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default InputRadioGroupField;
