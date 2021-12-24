import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Spinner.module.css';

export default function Spinner() {
  return (
    <Loader
      className={s.spinner}
      type="MutatingDots"
      color="#2a363b"
      secondaryColor="#2a363b"
      height={100}
      width={100}
    />
  );
}
