import { LoginStyled } from "./styles";
import { CircularProgress, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "./schema";

export function Login() {
  const { userLoginApi, loading } = useContext(UserContext);

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  return (
    <LoginStyled>
      <Header colorTitle="var(--white)" marginTop="1rem" />
      <h2>Login</h2>
      <form onSubmit={handleSubmit(userLoginApi)}>
        <TextField
          id="email"
          label="email"
          variant="filled"
          error={errors.email ? true : false}
          helperText={errors.email && `${errors.email?.message}`}
          {...register("email")}
        />

        <TextField
          id="password"
          label="senha"
          variant="filled"
          type="password"
          error={errors.password ? true : false}
          helperText={errors.password && `${errors.password?.message}`}
          {...register("password")}
        />

        <Button variant="contained" type="submit" disabled={loading} >
          {loading ? <CircularProgress color="info" /> : "Entrar"}
        </Button>
        <span>Não possui conta?</span>
        <Link to="/register">Cadastre-se</Link>
      </form>
    </LoginStyled>
  );
}
