import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

export const Logo = styled((props) => {
  const { variant, ...other } = props;

  const color = variant === 'light' ? '#C1C4D6' : '#5048E5';

  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 40 36"
      xmlns="http://www.w3.org/2000/svg"
      {...other}>
      <path d="M6 11C9.03757 11 11.5 8.53757 11.5 5.5C11.5 2.46243 9.03757 0 6 0C2.96243 0 0.5 2.46243 0.5 5.5C0.5 8.53757 2.96243 11 6 11Z" fill="white"/>
      <path d="M30.4218 24.5565C35.7216 23.1082 39.6183 18.2592 39.6183 12.5C39.6183 5.71624 34.214 0.194797 27.477 0.00660328V0H8.06627H0L6.69512 8.33114H8.06627V8.33334H27.181C29.4535 8.36636 31.2857 10.2186 31.2857 12.4989C31.2857 14.8002 29.4204 16.6656 27.1194 16.6656H24.0811H13.3913L28.9285 36H39.6172L30.4218 24.5565Z" fill="white"/>
    </svg>
);
})``;

Logo.defaultProps = {
  variant: 'primary'
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'primary'])
};
