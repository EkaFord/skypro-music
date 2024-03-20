import { Link, Navigate, useNavigate } from "react-router-dom";
import * as S from "./LoginStyles.js"
import { useEffect, useState, useContext } from "react";
import { getAuthorization, getLogin, getToken } from "../../api.js";
import Context from "../../contexts.jsx";
import { currentUserToken, currentUser } from "../../store/slices/user.js";
import { useDispatch } from "react-redux";


export function Login() {
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const { addLogin, setUser } = useContext(Context)

  const changeForm = (isLoginMode) => {
    setIsLoginMode(!isLoginMode)
    setEmail("")
    setPassword("")
    setRepeatPassword("")
  }
  const navigate = useNavigate();

  const handleLogin = async () => {

    setLoading(true)
    if (email === "") {
      setError("Не заполнен Email");
      return
    }
    if (password === "") {
      setError("Не введен пароль");
      return
    }
    getLogin({ email, password })
      .then((user) => {
        if (user.detail == "Пользователь с таким email или паролем не найден") {
          setError(user.detail);
          setLoading(false)
          return
        }
        setUser(user)
        addLogin(email)
        dispatch(currentUser({ user }))
        localStorage.setItem('id', user.id);

        getToken({ email, password })
          .then((token) => {
            console.log(token)
            localStorage.setItem('token', token.refresh);

            dispatch(currentUserToken(token))
          })
        navigate("/");

      })
      .catch((error) => {
        setError(error)
      }).finally(() => {
        setLoading(false)
      })
  };

  const handleRegister = async () => {
    if (email === "") {
      setError("Не заполнен Email");
      return
    }
    if (password === "") {
      setError("Не введен пароль");
      return
    }
    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
      return
    }
    setLoading(true)
    getAuthorization({ email, password })
      .then((user) => {
        if (user.email !== email && user.email !== undefined) {
          setError(user.email);
          setLoading(false)
          return
        }
        if (user.password !== password && user.password !== undefined) {
          setError(user.password[0]);
          setLoading(false)
          return
        }
        setIsLoginMode(true)
        setEmail("")
        setPassword("")
        setRepeatPassword("")
      }).catch((error) => {
        setError(error)
      }).finally(() => {
        setLoading(false)
      })
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

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
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <Link >
                <S.PrimaryButton disabled={loading} onClick={handleLogin}>
                  Войти
                </S.PrimaryButton>
              </Link>
              <Link>
                <S.SecondaryButton onClick={() => { changeForm(isLoginMode) }}>Зарегистрироваться</S.SecondaryButton>
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
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={loading} onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
              <S.SecondaryButton onClick={() => { changeForm(isLoginMode) }}>
                Войти
              </S.SecondaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}