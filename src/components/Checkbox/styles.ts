import styled from 'styled-components'

export const Styled = styled.div`
  display: inline-block;
  > input {
    opacity: 0;
  }
  > input + label {
    position: relative; 
    padding-left: 25px; 
    cursor: pointer;    
    &:before {
      content: '';
      position: absolute;
      left:0; top: 1px;
      width: 1rem; 
      height: 1rem; 
      border: 1px solid ${props => props.theme['divider']};
      background: ${props => props.theme['white']};
      border-radius: 0.25rem; 
      /* box-shadow: inset 0 1px 3px rgba(0,0,0,.3); */
    }

    &:after {
      /* content: '✔'; */
      content: url('/src/assets/check.svg');
      background-size: cover;
      position: absolute;
      top: 1px; left:0;
      width: 1.1rem; 
      height: 1.2rem; 
      border-radius: 0.25rem; 
      font-size: 1rem;
      color: ${props => props.theme['white']};
      background: ${props => props.theme['secondary_green']};
      transition: all .2s; /* on prévoit une animation */
    }
  }
  > input:not(:checked) + label {
      &:after {
        opacity: 0; /* coche invisible */
        transform: scale(0); /* mise à l'échelle à 0 */
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
  }
  > input:checked + label {
    &:after {
      opacity: 1; /* coche opaque */
      transform: scale(1); /* mise à l'échelle 1:1 */
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`;