import styled from 'styled-components'

export const SHeaderContainer = styled.header`
    height: 4rem;
    width: 100%;
    padding: 2.5rem 2rem;
    display: flex;
    align-items: center;

    border-bottom: 1px solid ${(props) => props.theme['divider']};

    h1 {
        padding-left: 1.5rem;
        margin-left: 1rem;
        font-size: 1.5rem;
        color: ${(props) => props.theme['titles']};
        border-left: 1px solid ${(props) => props.theme['divider']};
    }

    img {
        margin-right: 0.8rem;
        cursor: pointer;
    }
`

export const SSearchField = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    margin-left: 2rem;
    margin-right: 1.5rem;
    background-color: ${props => props.theme['white']};
    color: ${props => props.theme['secondary_text']};
    outline: 1px solid ${props => props.theme['divider']};
    border-radius: 3px;

    &:focus {
        outline: 1px solid ${(props) => props.theme['secondary_green']};
    }

    input {
        padding-right: 0.5rem;
        color: inherit;
        font-weight: 500;
        border: none;
        outline: none;
    }

    img {
        cursor: pointer;
    }
`

export const SInfoUser = styled.div`
    height: 2rem;
    display: flex;
    justify-content: end;
    align-items: center;
    flex: 1;
    gap: 0.7rem;

    border-left: 1px solid ${(props) => props.theme['divider']};

    span {
        font-weight: 500;
    }

    .avatar {
        height: 48px;
        width: 48px;
        border-radius: 999px;
    }

    button {
        border: none;
        background: none;
    }
`