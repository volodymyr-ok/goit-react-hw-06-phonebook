// import PropTypes from 'prop-types';
import { StyledLabel } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux'; // useDispatch,
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

// { onChange, value }
export const Filter = () => {
  const dipatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChanger = e => {
    // onChange(e);
    dipatch(changeFilter(e.target.value.toLowerCase()));
  };

  return (
    <StyledLabel>
      Find contacts by name
      <input type="text" onChange={e => handleChanger(e)} value={filter} />
    </StyledLabel>
  );
};

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };
