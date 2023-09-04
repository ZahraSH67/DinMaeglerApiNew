import styled from "styled-components";
import { Link } from "react-router-dom";
import NavigationElement from "./NavigationElement";

const StyledNavigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 508px;
    height: 30px;
`

const Navigation = () => {
    return (
        <StyledNavigation>
            <Link to="/buildingforsale">
                <NavigationElement title="Boliger til salg" />
            </Link>
            <Link to="/agentview">
                <NavigationElement title="Mæglere" />
            </Link>
            {/* Add other navigation links here */}
        </StyledNavigation>
    )
}

export default Navigation;