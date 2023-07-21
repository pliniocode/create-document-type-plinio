import styled, { css } from 'styled-components'
import PathIcon from '../../assets/caminho_1204.svg'


export const SFormHeader = styled.div`


    button:first-child {
        border-top-left-radius: 8px;
    }

    button:last-child {
        border-top-right-radius: 8px;
    }

    .aba-active {
        color: ${(props) => props.theme['white']};
        background-color: ${(props) => props.theme['secondary_green']};
    }

    .aba-inactive {
        color: ${(props) => props.theme['secondary_text']};
    }
`

export const SAbas = styled.button`
    height: 3rem;
    padding: 0.8rem 1rem;
    font-weight: 400;
    border: none;

    cursor: pointer;
`

export const SFormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 5rem;
    padding: 2rem 7rem;
    border-radius: 3px;
    background-color: ${(props) => props.theme['white']};   
`

export const SDivGroup = styled.div`
    width: 100%;
`

interface SFieldProps {
    error?: boolean;
}

export const SField = styled.div<SFieldProps>`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    font-weight: 500;
    color: ${(props) => 
        props.error ? props.theme['red-6'] : props.theme['titles']
    };

    .field-group {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 0.5rem 0;
    }

    label {
        display: flex;
        justify-content: space-between;
        padding-right: 0.3rem;
        margin-bottom: 0.4rem;
        font-size: 1.2re;
    }

    span {
        font-size: 12px;
        color: ${props => props.theme['red-6']}
    }
`

export const SInput = styled.input`
    padding: 0.5rem 1rem;
    background-color: ${props => props.theme['white']};
    color: ${props => props.theme['secondary_text']};
    border: none;
    outline: 1px solid ${props => props.theme['divider']};
    border-radius: 0.25rem;

    &:focus {
        outline: 1px solid ${(props) => props.theme['secondary_green']};
    }
`

interface SInputCheckboxFieldProps {
    checked?: boolean
}

export const SInputCheckboxField = styled.div<SInputCheckboxFieldProps>`
    width: 1rem;
    height: 1rem;
    margin-bottom: 0.4rem;
    border-radius: 0.25rem;
    
    background-color: ${props => props.theme['white']};

    &:hover {
        cursor: pointer;
    }

    ${(props) =>
        props.checked  &&
        css`
            background-color: ${props => props.theme['secondary_green']};
    `}
`

export const SSelect = styled.select`
    padding: 0.5rem 1rem;
    color: ${props => props.theme['titles']};
    border: none;
    outline: 1px solid ${props => props.theme['divider']};
    border-radius: 0.25rem;
    cursor: pointer;

    background-image: url(${PathIcon});
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    appearance: none;

    &:focus {
        outline: 1px solid ${(props) => props.theme['secondary_green']};
    }
`
export const SSelectMultiple = styled.select`
    height: auto;
    appearance: none;
    padding: 0.5rem 1rem;
    background: transparent;
    color: ${props => props.theme['titles']};
    border: none;
    outline: 1px solid ${props => props.theme['divider']};
    border-radius: 0.25rem;

    width: 100%;
    max-width: 300px;


    &:focus {
        outline: none;
        border-color: ${props => props.theme['divider']};
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    option:checked {
        background-color: ${props => props.theme['secondary_green']};
        color: #fff;
    }
`
    

export const SOption = styled.option`
    padding: 0.7rem 1.2rem; 
    color: ${props => props.theme['titles']};
    border-bottom: 1px solid ${(props) => props.theme['divider']};
    cursor: pointer;

    &:checked {
        background-color: ${props => props.theme['secondary_green']};
        color: #fff;
    }

    option:hover {
        color: ${props => props.theme['orange_epaper']};
    }

    &:focus {
        padding: 1rem;
    }
`