import styled,{css} from "styled-components";
import { ReactComponent as TelegramIcon } from '../../assets/icons/telegram.svg'
import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg'

const flexBox = css`
    display: flex;
    align-items: center;
`;

export const HeaderContainer = styled.header`
    ${flexBox};
    padding: 15px 0;

    .menu {
        margin: 0 auto;
    }

    .menu a {
        padding: 0 20px;
        color: #2D3A45;
        font-weight: 600;
    }

    .menu a.active {
        color: #0091FF;
    }
`;

export const Logo = styled.div`
    ${flexBox};

    & .logo__title {
        margin-left: 12px;
    }
`;

export const Contact = styled.div`
    ${flexBox};
`;

export const Telegram  = styled(TelegramIcon)`
    margin: 0 10px;
    opacity: 0.5;
    cursor: pointer;
    vertical-align: middle;
    
    &:hover {
        opacity: 1;
    }
`;

export const Git  = styled(GithubIcon)`
    opacity: 0.5;
    cursor: pointer;
    vertical-align: middle;


    &:hover {
        opacity: 1;
    }
`;