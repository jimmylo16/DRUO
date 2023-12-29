export const Form = () => {
  return (
    <section className="p-4">
      <span>Crear Negocio</span>
      <form className="flex flex-col">
        <div>
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div>
          <label>Nit</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" />
        </div>
        <button className="bg-gray-200 border border-gray-500">
          Crear Negocio
        </button>
      </form>
    </section>
  );
};
