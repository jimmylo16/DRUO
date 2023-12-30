import { BusinessList } from '../../../interfaces/Business';

interface TableProps {
  businessList: BusinessList[] | undefined;
}
export const Table = ({ businessList }: TableProps) => {
  return (
    <table className="border border-gray-600 m-8 w-full text-left">
      <thead className="border border-gray-600">
        <tr>
          <th className="border border-gray-600">ID</th>
          <th className="border border-gray-600">Nombre</th>
          <th className="border border-gray-600">Nit</th>
          <th className="border border-gray-600">Email</th>
        </tr>
      </thead>
      <tbody>
        {businessList?.map((business) => (
          <tr key={business.id}>
            <td className="border border-gray-600">{business.id}</td>
            <td className="border border-gray-600">{business.name}</td>
            <td className="border border-gray-600">{business.nit}</td>
            <td className="border border-gray-600">{business.mail}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
