import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Redirect = () => {
  const navigation = useNavigate();
  useEffect(() => {
    navigation('/negocios');
  }, []);

  return <div className="bg-black">test</div>;
};
