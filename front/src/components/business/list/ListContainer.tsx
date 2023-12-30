import { useEffect, useState } from "react";
import { Table } from "./Table";
import { axiosCall } from "../../../infraestructure/axios";
import { BackendResponse, BusinessList } from "../../../interfaces/Business";

export const ListContainer = () => {
  const [businessList, setBusinessList] = useState<BusinessList[]>();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosCall<BackendResponse<BusinessList[]>>({
        method: "get",
        endpoint: "business",
      });
      setBusinessList(data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-3/4">
      <span className="font-bold text-sm flex justify-center mt-4">
        Ver Negocios
      </span>
      <Table businessList={businessList} />
    </div>
  );
};
