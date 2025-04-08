import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastSuccess } from "../../utils/toastify";
import Spinner from "../../components/Spinner";

export const Register = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault();
    const novo_usuario = {
      nome: nome,
      email: email,
      senha_hash: senha,
    };
    const { data } = await axios.post(
      "https://banco-usuario-aula.onrender.com/usuarios",
      novo_usuario
    );
    toastSuccess(data.mensagem);
    setLoading(false);
    navigate("/login");
  }
  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <h1>Register</h1>

          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                onChange={({ target }) => setNome(target.value)}
              />
            </div>

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
            <button disabled={loading}>Cadastrar</button>
          </form>
        </>
      )}
    </>
  );
};
