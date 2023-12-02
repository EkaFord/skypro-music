import { Link } from "react-router-dom";
import * as S from "./LoginStyles.js";
import { useEffect, useState, useContext } from "react";
import { getAuthorization, getLogin, getToken } from "../../api.js";
import Context from "../../contexts.jsx";

export function Login() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const { addLogin } = useContext(Context);

  const clearFields = () => {
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };

  const handleLogin = async () => {
    setLoading(true);
    if (email === "" || password === "") {
      setError(email === "" ? "Не заполнен Email" : "Не введен пароль");
      setLoading(false);
      return;
    }

    try {
      const user = await getLogin({ email, password });
      if (user.detail === "Пользователь с таким email или паролем не найден") {
        setError(user.detail);
        setLoading(false);
        return;
      }

      const token = await getToken({ email, password });
      addLogin(email);
      window.location.href = "/";
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (email === "" || password === "") {
      setError(email === "" ? "Не заполнен Email" : "Не введен пароль");
      return;
    }

    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
      return;
    }

    setLoading(true);
    try {
      const user = await getAuthorization({ email, password });
      if (user.email !== email && user.email !== undefined) {
        setError(user.email);
        return;
      }
      if (user.password !== password && user.password !== undefined) {
        setError(user.password[0]);
        return;
      }
      setIsLoginMode(true);
      clearFields();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "login") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "repeat-password") setRepeatPassword(value);
  };

  const changeForm = () => {
    setIsLoginMode(!isLoginMode);
    clearFields();
  };

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={handleInputChange}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={handleInputChange}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={loading} onClick={handleLogin}>
                Войти
              </S.PrimaryButton>
              <Link>
                <S.SecondaryButton onClick={changeForm}>
                  Зарегистрироваться
                </S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={handleInputChange}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={handleInputChange}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={handleInputChange}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={loading} onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
              <S.SecondaryButton onClick={changeForm}>
                Войти
              </S.SecondaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}
