export const SideBar = () => {
  const handleOnClick = () => {
    console.log("clicked");
  };
  return (
    <section className="h-full overflow-auto fixed z-10 w-[16%]  border border-gray-600">
      <div className="flex flex-col mt-10 gap-4">
        <button
          onClick={handleOnClick}
          className="cursor-pointer border border-gray-600"
        >
          Ver Negocios
        </button>
        <button
          onClick={handleOnClick}
          className="cursor-pointer border border-gray-600"
        >
          Crear Negocio
        </button>
      </div>
    </section>
  );
};
