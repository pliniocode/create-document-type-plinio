import { SHeaderContainer, SInfoUser, SSearchField } from "./styles"
import ImgBrasao from "../../assets/montezuma_brasao.svg"
import SearchIcon from "../../assets/search.svg"
import ScheduleIcon from "../../assets/coolicon.svg"
import NotificationIcon from "../../assets/notification_outline.svg"
import ArrowDownIcon from "../../assets/arrow_down.svg"

const dataUser = {
    name: 'Rafael Lucas',
    avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
}

export function Header() 
{
    return (
        <SHeaderContainer>
            <img src={ImgBrasao} />
            <h1>Prefeitura de Montezuma </h1>
            <SSearchField>
                <img src={SearchIcon} />
                <input type="text" placeholder="Pesquisar ..." />
            </SSearchField>
            <img src={ScheduleIcon} />
            <img src={NotificationIcon} />

            <SInfoUser>
                <span>{dataUser.name}</span>
                <img src={dataUser.avatar} className="avatar" />
                <button>
                    <img src={ArrowDownIcon} />
                </button>
            </SInfoUser>
            
        </SHeaderContainer>
    )
}