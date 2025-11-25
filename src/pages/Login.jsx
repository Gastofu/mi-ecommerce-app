export function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Inicio de sesión (demo). Aquí se validaría el usuario contra una base de datos."
    );
  };

  return (
    <section className="form-wrapper">
      <h1>Iniciar sesión</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className="form-field">
          <label htmlFor="password">Contraseña</label>
          <input id="password" name="password" type="password" required />
        </div>

        <button type="submit" className="btn-primary">
          Ingresar
        </button>
      </form>
    </section>
  );
}
