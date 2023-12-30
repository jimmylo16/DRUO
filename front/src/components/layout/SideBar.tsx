import { useLocation, useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const handleOnClick = (route: string) => {
    navigation(route);
  };
  return (
    <section className="h-full overflow-auto fixed z-10 w-[16%]  border border-gray-600">
      <div className="flex flex-col mt-10 gap-4">
        <button
          onClick={() => handleOnClick("/negocios")}
          className={`cursor-pointer border border-gray-600 ${
            location.pathname === "/negocios" ? "text-blue-700" : ""
          }`}
        >
          Ver Negocios
        </button>
        <button
          onClick={() => handleOnClick("/negocios/crear")}
          className={`cursor-pointer border border-gray-600 ${
            location.pathname === "/negocios/crear" ? "text-blue-700" : ""
          }`}
        >
          Crear Negocio
        </button>
      </div>
    </section>
  );
};
