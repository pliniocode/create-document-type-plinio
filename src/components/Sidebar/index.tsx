import { useState } from 'react';
import { SSidebarContainer, SLiSidebar } from './styles';
import LogoWhite from '../../assets/logo_white.svg'
import DashboardIcon from '../../assets/icon_material_dashboard.svg'
import OpenDocumentIcon from '../../assets/icon_open_document.svg'
import TasksIcon from '../../assets/icon_awesome_tasks.svg'
import SearchIcon from '../../assets/icon_map_search.svg'
import UserIcon from '../../assets/usuario_white.svg'
import ConfigIcon from '../../assets/config_white.svg'

export function Sidebar() {
    const [isCollapsed, setCollapsed] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    function handleToggleCollapse()
    {
        setCollapsed(!isCollapsed);
        setIsSubMenuOpen(false);
    }

    function handleToggleSubMenu() 
    {
        setIsSubMenuOpen(!isSubMenuOpen);
    }

    return (
        <SSidebarContainer collapsed={isCollapsed} >
            <div className="sidebar-header">
                <img className={`${isCollapsed ? 'img-reduced' : '' }`} src={LogoWhite} />
                <button 
                    className={`toggle-button ${isCollapsed ? 'txt-orange' : ''}`}
                    onClick={handleToggleCollapse}>
                    {isCollapsed ? '>' : '<'}
                </button>
            </div>
            
           <div className="sidebar-body">
                <div className="sidebar-top">
                    <nav className="sidebar-menu">
                        <ul >
                            <SLiSidebar>
                                <a href='#'> 
                                    <img src={DashboardIcon} />
                                    {!isCollapsed && <span>Dashboard</span> }
                                </a>
                            </SLiSidebar>
                            <SLiSidebar>
                                <a href='#'> 
                                    <img src={OpenDocumentIcon} />
                                    {!isCollapsed && <span>Documentos</span> }
                                </a>
                            </SLiSidebar>
                            <SLiSidebar>
                                <a href='#'> 
                                    <img src={TasksIcon} />
                                    {!isCollapsed && <span>Tarefas</span> }
                                </a>
                            </SLiSidebar>
                            <SLiSidebar>
                                <a href='#'>
                                    <img src={SearchIcon} /> 
                                    {!isCollapsed && <span>Pesquisar Documento</span> }
                                </a>
                            </SLiSidebar>
                        </ul>
                    </nav>
                </div>

                <div className="sidebar-bottom">
                    <nav>
                        <ul className="sidebar-menu">
                            <SLiSidebar>
                                <a href='#'>
                                    <img src={UserIcon} /> 
                                    {!isCollapsed && <span>Usuário</span> }
                                </a>
                            </SLiSidebar>
                            <SLiSidebar>
                                <a href='#'>
                                    <img src={ConfigIcon} /> 
                                    {!isCollapsed && <span className='sidebar-span-config'>
                                        Configurações
                                            <span onClick={handleToggleSubMenu}>
                                                {isSubMenuOpen ? '<' : '>'}
                                            </span>
                                    </span>}
                                </a>
                                {/* Sub Menu  */}
                                {isSubMenuOpen && (
                                    <ul>
                                        <li>
                                            <a className="link-sub-menu" href="#">Departamentos</a>
                                        </li>
                                        <li>
                                            <a className="link-sub-menu" href="#">Tipos de Documentos</a>
                                        </li>
                                        <li>
                                            <a className="link-sub-menu" href="#">Índices de Documentos</a>
                                        </li>
                                        <li>
                                            <a className="link-sub-menu" href="#">Fluxos de Processo</a>
                                        </li>
                                    </ul>
                                )}
                            </SLiSidebar>
                        </ul>
                    </nav>
                </div>
            </div>
        </SSidebarContainer>
    )
}