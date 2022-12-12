import api from "../../Services/api";
import styles from "./styles.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const LoginForm = () => {

  const navigate = useNavigate();

  // const{dentistas, dentista, getAllDentistas, getDentista} = useContext(DentistaContext);

  const {userData, fillUserDataState} = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await auth();
  }
  
  async function auth(){
    console.log(auth);
    try{
      const response = await api.post("/auth", {
        username: username,
        password: password,
      });
      localStorage.setItem("token", response.data.token)
      console.log(response);
      // toast("Autenticação realizada com sucesso!", {type: "success"});
      // navigate("/home");
      fillUserDataState({
        username: response.data.username,
        token: response.data.token,
        password: response.data.password,
      });
      
      // console.log(response);
    } catch (error) {
      toast.error("Erro de autenticação", {position: "bottom-center" });
      }
    }
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card}`}
      >
        {/* <h1> Login {userData.token}</h1> */}
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              value = {username}
              onChange={(event) => setUsername(event.target.value)}
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
            />
            <input
              value = {password}
              onChange={(event) => setPassword(event.target.value)}
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginForm;