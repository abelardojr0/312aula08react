import axios from "axios";
import { useState } from "react";
import { toastError, toastSuccess } from "../../utils/toastify";
import Spinner from "../../components/Spinner";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    // const { data } = await axios.get(
    //   "https://banco-usuario-aula.onrender.com/usuarios"
    // );
    // let usuarioEncontrato = false;
    // data.forEach((element: PropsUser) => {
    //   if (element.email === email && element.senha_hash === senha) {
    //     usuarioEncontrato = true;
    //     toastSuccess("Deu certo");
    //   }
    // });
    // if (!usuarioEncontrato) {
    //   toastError("Email ou Senha inválido");
    // }
    setLoading(true);
    event.preventDefault();

    try {
      const usuario = {
        email,
        senha,
      };
      const { data } = await axios.post(
        "https://banco-usuario-aula.onrender.com/login",
        usuario
      );
      toastSuccess(data.mensagem);
      setLoading(false);
      localStorage.setItem("email", email);
      navigate("/");
      window.location.reload();
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        toastError(error.response.data.error);
      } else {
        toastError("Erro ao tentar fazer login. Tente novamente mais tarde.");
      }
      setLoading(false);
    }

    // navigate("/login");
  }
  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <h1>Login</h1>

          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>

            <div>
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                onChange={({ target }) => setSenha(target.value)}
              />
            </div>
            <button disabled={loading}>Entrar</button>
          </form>
        </>
      )}
    </>
  );
};
