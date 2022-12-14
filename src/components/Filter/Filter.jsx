import PropTypes from 'prop-types';
import { StyledLabel } from './Filter.styled';
import { useSelector } from 'react-redux'; // useDispatch,
import { getFilter } from 'redux/selectors';
// import { changeFilter } from 'redux/filterSlice';

export const Filter = ({ onChange, value }) => {
  // const dipatch = useDispatch();
  const filter = useSelector(getFilter);
  console.log('filter >>>', filter);

  return (
    <StyledLabel>
      Find contacts by name
      <input
        type="text"
        onChange={onChange}
        // onChange={({target}) => dipatch(changeFilter(target.value.toLowerCase()))}
        value={value}
      />
    </StyledLabel>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
