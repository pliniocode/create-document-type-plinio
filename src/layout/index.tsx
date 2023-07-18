import { Outlet } from 'react-router-dom'
import { Header, Sidebar } from '../components'
import { ContainerLayout } from './styles'


export function DefaultLayout() {
    return (
        <ContainerLayout>
            <Sidebar />
            <div className="container-page">
                <Header />
                <Outlet />
            </div>
        </ContainerLayout>
    )
  }