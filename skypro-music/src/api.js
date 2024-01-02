export async function getTodos() {
  const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/');


  if (!response.ok) {
    throw new Error("Ошибка сервера")
  }

  const tracks = await response.json();
  return tracks
}

export async function getAuthorization({ email, password }) {
  const response = await fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: email,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  })
  if (response.status === 500) {
    throw new Error("Сервер не отвечает")
  }
  const user = await response.json();
  return user
}

export async function getLogin({ email, password }) {
  const response = await fetch("https://skypro-music-api.skyeng.tech/user/login/", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  })
  if (response.status === 500) {
    throw new Error("Сервер не отвечает")
  }
  const user = await response.json();
  return user
}

export async function getToken({ email, password }) {
  const response = await fetch("https://skypro-music-api.skyeng.tech/user/token/", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  })

  const token = await response.json();
  return token
}