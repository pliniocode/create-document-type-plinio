import styled from 'styled-components'

export const SModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-content {
        height: 18rem;
        width: 27rem;
        padding: 2.6rem 3.6rem;
        color: var(--titulos, #43425D);
        font-weight: 400;
        background-color: #fff;
    
        border-radius: 0.25rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  
    .modal-buttons {
        display: flex;
        justify-content: center;
        gap: 0.8rem;
        margin-top: 1.8rem;
    }
`
  