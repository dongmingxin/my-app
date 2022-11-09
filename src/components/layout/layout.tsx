import styled, { StyledComponentBase } from "styled-components";

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
    background-color: ${props => props.theme.backgroundColor 
        ? props.theme.backgroundColor
        :'#f5f5f5'
    };
    z-index: -10;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`;


const Container = styled.div`
    /* margin-bottom: 10px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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

export default Layout;