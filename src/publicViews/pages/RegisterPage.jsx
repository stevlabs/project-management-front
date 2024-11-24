import "./loginPage.css"

export const RegisterPage = () => {
 
  return (
    <div className="App-login-page">
      <h1>REGISTRO</h1>
      <form id="register">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Escriba su nombre"
          required
        />

        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Escriba su correo electrónico"
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Escriba su contraseña"
          required
        />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  )
}

