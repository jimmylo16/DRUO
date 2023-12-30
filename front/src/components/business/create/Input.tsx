import React from "react";

type InputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  label: string;
  type: string;
  errors: string[] | undefined;
};
export const Input = ({
  handleChange,
  value,
  name,
  label,
  type,
  errors,
}: InputProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-2 w-full flex-row items-end">
        <label className="w-1/4 text-right">{label}</label>
        <input
          className="border border-gray-600 w-3/4"
          onChange={handleChange}
          name={name}
          value={value}
          type={type}
        />
      </div>
      {errors?.map((error, index) => {
        return error.includes(name) ? (
          <span className="text-red-500 text-right" key={index}>
            {error}
          </span>
        ) : (
          <></>
        );
      })}
    </div>
  );
};
