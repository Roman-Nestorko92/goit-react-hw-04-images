import s from './Button.module.css';
import { BiPlusMedical } from 'react-icons/bi';

const Button = ({ onClick, isLoading }) => {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      {isLoading ? '' : 'Load more'}
      <BiPlusMedical className={s.icon} />
    </button>
  );
};

export default Button;
