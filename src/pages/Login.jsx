import LoginForm from "../Components/LoginForm";
import AuthProvider, { AuthContext } from "../contexts/AuthContext";

const Contact = () => {
  return (
    <AuthProvider>
      <h1>Login</h1>
      <LoginForm />
    </AuthProvider>
  );
};

export default Contact;
