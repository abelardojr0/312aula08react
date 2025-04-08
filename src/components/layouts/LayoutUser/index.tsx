import { Outlet, useNavigate } from "react-router-dom";
import { LinkComponent } from "../../LinkComponent";
import { NavStyled } from "./styles";

export const LayoutUser = () => {
  const navigate = useNavigate();
  function vazar() {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }
  return (
    <>
      <header>
        <nav>
          <NavStyled>
            <li>
              <LinkComponent destino={"/"} texto="Home" />
            </li>
            <li>
              <LinkComponent destino={"/page"} texto="Page 1" />
            </li>
            <li>
              <LinkComponent sair texto="Sair" onClick={vazar} />
            </li>
          </NavStyled>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Qualquer besteira só que agora pro usuário</p>
      </footer>
    </>
  );
};
