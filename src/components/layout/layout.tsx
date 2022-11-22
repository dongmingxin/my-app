import styled, { StyledComponentBase, ThemeProvider } from "styled-components"
import { useThemeContext, ThemeContextProvider } from '../../context/theme'
import TopNav from '../navigation/TopNav'
import DarkLightModeBtn from '../darkLightModeBtn/DarkLightModeBtn'

/**
 * // Media queries breakpoints
// Extra small screen / phone
@screen-xs: 480px;
@screen-xs-min: @screen-xs;

// Small screen / tablet
@screen-sm: 576px;
@screen-sm-min: @screen-sm;

// Medium screen / desktop
@screen-md: 768px;
@screen-md-min: @screen-md;

// Large screen / wide desktop
@screen-lg: 992px;
@screen-lg-min: @screen-lg;

// Extra large screen / full hd
@screen-xl: 1200px;
@screen-xl-min: @screen-xl;

// Extra extra large screen / large desktop
@screen-xxl: 1600px;
@screen-xxl-min: @screen-xxl;
 */

interface ILayout extends StyledComponentBase<any, {}> {
    Container?: any;
}

const Layout:ILayout = styled.div`
    font-size: 15px;
    background-color: ${props => props.theme.backgroundColor};
    z-index: -10;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    position: absolute;
`;


const Container = styled.div`
    /* margin-bottom: 10px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
    @media screen and (max-width: 2600px) {
        width: 60%;
    }
    @media screen and (max-width: 1600px) {
        width: 80%;
    }
    @media screen and (max-width: 1200px) {
        width: 80%;
    }
    @media screen and (max-width: 992px) {
        width: 80%;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`
Layout.Container = Container;

interface DefaultLayoutProps {
	children?: React.ReactNode;
}

export const DefaultLayout = ({
    children
} : DefaultLayoutProps) => {
    const { themeProps } = useThemeContext();
    return (
        <ThemeProvider theme={themeProps}>
            <Layout>
                <DarkLightModeBtn/>
                <Layout.Container>
                    <TopNav/>
                    {children}
                </Layout.Container>
            </Layout>
        </ThemeProvider>
    )
}


export default Layout;