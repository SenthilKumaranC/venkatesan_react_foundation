import { useCallback, useState } from "react";

export interface IInputSelectField {
  name: string;
  defaultOption: string;
  options: any[];
  onChange: Function;
  optionGroupName: string;
}

const InputSelectField = (props: IInputSelectField) => {
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
    <div>
      {props.optionGroupName}
      <select value={selectedOption} onChange={listenForValueChange}>
        {props.options.map((_option, index) => (
          <option
            disabled={_option.header}
            key={_option.id}
            value={_option.id}
          >
            {_option.displayValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelectField;
