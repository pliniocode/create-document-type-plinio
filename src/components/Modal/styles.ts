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
    z-index: 1;

    .modal-content {
        height: 25rem;
        width: 30rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2.6rem 3.6rem;
        color: var(--titulos, #43425D);
        font-weight: 400;
        text-align: center;
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
  