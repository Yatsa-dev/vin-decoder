import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  toTop: {
    zIndex: 2,
    position: 'fixed',
    bottom: '2vh',
    backgroundColor: '#fff',
    color: '#fff',
    '&:hover, &.Mui-focusVisible': {
      transition: '0.3s',
      color: '#212121',
      backgroundColor: '#8c9092',
      boxShadow: '3px 5px 5px rgba(3, 5, 5, 0.12)',
    },
    [theme.breakpoints.up('xs')]: {
      right: '5%',
      backgroundColor: '#2a363b',
    },
    [theme.breakpoints.up('lg')]: {
      right: '6.5%',
    },
  },
}));

const ScrollToTop = ({ showBelow }) => {
  const classes = useStyles();

  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          className={classes.toTop}
          aria-label="to top"
          component="span"
        >
          <ExpandLessIcon fontSize="medium" />
        </IconButton>
      )}
    </div>
  );
};
export default ScrollToTop;
