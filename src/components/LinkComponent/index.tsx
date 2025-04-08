import { LinkStyled, LinkStyledSair } from "./styles";

interface PropsLink {
  destino?: string;
  texto: string;
  sair?: boolean;
  onClick?: () => void;
}
export const LinkComponent = ({ destino, texto, sair, onClick }: PropsLink) => {
  return (
    <>
      {sair ? (
        <LinkStyledSair onClick={onClick}>{texto}</LinkStyledSair>
      ) : destino ? (
        <LinkStyled to={destino}>{texto}</LinkStyled>
      ) : null}
    </>
  );
};
