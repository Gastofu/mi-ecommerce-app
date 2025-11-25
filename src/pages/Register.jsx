export function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Usuario registrado (demo). Aquí iría el envío al backend.");
  };

  return (
    <section className="form-wrapper">
      <h1>Crear cuenta</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="nombre">Nombre completo</label>
          <input id="nombre" name="nombre" type="text" required />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className="form-field">
          <label htmlFor="telefono">Teléfono</label>
          <input id="telefono" name="telefono" type="tel" />
        </div>

        <div className="form-field">
          <label htmlFor="direccion">Dirección</label>
          <input id="direccion" name="direccion" type="text" />
        </div>

        <div className="form-field">
          <label htmlFor="password">Contraseña</label>
          <input id="password" name="password" type="password" required />
        </div>

        <div className="form-field">
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
          />
        </div>

        <button type="submit" className="btn-primary">
          Registrarme
        </button>
      </form>
    </section>
  );
}
