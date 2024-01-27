import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2%.4;
  border-right: 0.1rem solid var(--color-grey-100);
  grid-row: 1/-1;
`;

function Sidebar() {
  return <StyledSidebar>ASIDE</StyledSidebar>;
}

export default Sidebar;
