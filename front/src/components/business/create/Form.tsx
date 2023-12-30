import { useState } from 'react';
import { axiosCall } from '../../../infraestructure/axios';
import { AxiosError } from 'axios';
import { Input } from './Input';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    nit: '',
    mail: '',
  });
  const [errors, setErrors] = useState<string[]>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors(undefined);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axiosCall({
        method: 'post',
        endpoint: '/business',
        body: {
          ...formData,
          nit: +formData.nit,
        },
      });
      navigation('/negocios');
    } catch (error: any) {
      const backendError = error as AxiosError<{
        error: string;
        message: string[];
        statusCode: number;
      }>;
      const messages = backendError.response?.data.message;
      setErrors(messages);
    }
  };
  return (
    <section className="p-4 text-sm flex flex-col gap-8">
      <span className="font-bold text-sm flex justify-center">
        Crear Negocio
      </span>
      <form className="flex flex-col items-end gap-6" onSubmit={handleSubmit}>
        <Input
          name="name"
          value={formData.name}
          handleChange={handleChange}
          errors={errors}
          label="Nombre"
          type="text"
        />
        <Input
          name="nit"
          value={formData.nit}
          handleChange={handleChange}
          label="Nit"
          type="number"
          errors={errors}
        />
        <Input
          name="mail"
          value={formData.mail}
          handleChange={handleChange}
          label="Email"
          type="email"
          errors={errors}
        />
        {errors?.map((error, index) => {
          return error.includes('negocio') ? (
            <span className="text-red-500 text-right" key={index}>
              {error}
            </span>
          ) : (
            <></>
          );
        })}
        <div className="w-[75%]">
          <button className="bg-gray-200 border border-gray-500 py-1 px-4 w-full">
            Crear Negocio
          </button>
        </div>
      </form>
    </section>
  );
};
