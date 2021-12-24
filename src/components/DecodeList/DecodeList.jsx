import { useSelector } from 'react-redux';
import { carsSelectors } from '../../redux/cars';
import { v4 as uuidv4 } from 'uuid';
import s from './DecodeList.module.css';
export default function DecodeList() {
  const carInfo = useSelector(carsSelectors.getCarInfo);

  return (
    <section className={s.section}>
      <ul>
        {carInfo.map(({ Value, Variable }) => {
          const isValue = Value && Value !== 'Not Applicable';

          return (
            isValue && (
              <li key={uuidv4()} className={s.item}>
                <p>{`${Variable}:`} </p>
                <p>{`${Value}`}</p>
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
}
