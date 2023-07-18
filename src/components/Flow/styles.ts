import { styled } from "styled-components";


export const SFlowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        color: ${props => props.theme['titles']};
        font-size: 1.2rem;
        font-weight: 500;
        

        a {
            text-decoration: none;
            color: inherit;
        }

        a:last-child {
            color: ${props => props.theme['secondary_green']};
        }

        span {
            color: ${props => props.theme['divider']};
            margin-left: 0.8rem;
        }
    }

    div {
        display: flex;
        gap: 0.8rem;
    }
`

const Button = styled.button`
    height: 2.6ren;
    padding: 0.2rem 1rem;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.6;
    cursor: pointer;
    border: none;
    border-radius: 5px;
`

export const BackButton = styled(Button)`
    background: none;
    color: ${(props) => props.theme['secondary_green']};

    &:hover {
        outline: 1px solid  ${(props) => props.theme['secondary_green']};
    }
`

export const SaveButton = styled(Button)`
    background-color: ${(props) => props.theme['secondary_green']};
    color: ${(props) => props.theme['white']};

    &:hover {
        color: ${(props) => props.theme['secondary_green']};
        background-color: ${(props) => props.theme['white']};
        outline: 1px solid ${(props) => props.theme['secondary_green']};
    }
`