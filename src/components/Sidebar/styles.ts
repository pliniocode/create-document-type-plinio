import { styled, css } from 'styled-components'

interface SSidebarContainer {
    isCollapsed: boolean;

}

export const SSidebarContainer = styled.div<SSidebarContainer>`
    height: 100vh;
    width: 16.25rem;
    padding: 2rem 1rem;
    
    background-color: ${props => props.theme['blue_sidemenu']}; 
    color: ${props => props.theme['white']}; 

    .txt-orange {
        color: ${props => props.theme['orange_epaper']} !important; 
    }

    .sidebar-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 3rem;
    }

    ${(props) =>
        props.isCollapsed  &&
        css`
            width: 6.5rem;
            text-align: center;

            .sidebar-header {
                flex-direction: column;
                align-items: center;
            }
    `}

    .img-reduced {
        width: 75px;
        height: 55px;
        object-fit: cover;
        object-position: 0% 0%;
    }

    .toggle-button {
        height: 2rem;
        width: 2rem;
        font-size: 2rem;
        background-color: transparent;
        color: ${props => props.theme['white']}; 
        border: none;

        cursor: pointer;
    }

    .sidebar-body {
        display: flex;
        flex-direction: column;
        gap: 10rem;
    }

    .sidebar-span-config {
        vertical-align: text-top;

        span {
            position: absolute;
            left: 11rem;
        }
    }
`

export const SLiSidebar = styled.li`
    padding: 0.5rem 0.3rem;
    list-style: none;
    border-radius: 3px;

    &:hover {
        background-color: ${props => props.theme['black_selection']}; 
    }

    img {
        color: ${props => props.theme['white']}; 
    }

    a {
        padding-left: 0.5rem;
        text-decoration: none;
        color: ${props => props.theme['white']}; 
        line-height: 1;

        cursor: pointer;

        span {
            margin-left: 0.5rem;
        }
    }

    li {
        list-style: none;
        padding-top: 0.5rem;
    }

    .link-sub-menu {
        
        &:hover {
            color: ${props => props.theme['orange_epaper']}; 
        }
    }
`
