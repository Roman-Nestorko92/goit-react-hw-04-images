import PropTypes from 'prop-types';
import css from './Button.module.css';
import { BiPlusMedical } from 'react-icons/bi';

function Button({ onNextFetch }) {
  return (
    <button className={css.button} type="button" onClick={onNextFetch}>
      Load more <BiPlusMedical className={css.icon} />
    </button>
  );
}

Button.prototype = {
  onNextFetch: PropTypes.func.isRequired,
};

export default Button;
