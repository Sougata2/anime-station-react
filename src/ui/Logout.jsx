import useLogout from "../features/Authentication/useLogout";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  font-family: inherit;
  background-color: #ff204e;
  color: white;
  border: none;
  padding: 2px 18px 4px 18px;
  font-size: 17px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 200ms linear;
  &:hover {
    transform: translateY(-5px);
  }
`;

function Logout() {
  const { isLoggingOut, logout } = useLogout();
  return (
    <Button onClick={logout} disabled={isLoggingOut}>
      Logout
    </Button>
  );
}

export default Logout;
