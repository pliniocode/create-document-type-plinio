import { Styled } from "./styles";

interface ChekboxProps {
    checked: boolean,
    onChange: (checked: boolean) => void,
    label: string,
}

export function Checkbox(props: ChekboxProps) { 
  
    return (
      <Styled
        onClick={() => props.onChange(props.checked)}>
        <input type="checkbox" 
            checked={props.checked} 
            onChange={() => props.onChange(props.checked)}
        />
        <label>{props.label}</label>
      </Styled>
    );
}

// fonte: https://gist.github.com/mbeaudru/d473014009ef12bc9eef076f3fa004ff