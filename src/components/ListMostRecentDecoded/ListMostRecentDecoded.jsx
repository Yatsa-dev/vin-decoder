import { useContext, useEffect } from 'react';
import { RequestContext } from '../../contexts/requestContext';
import { v4 as uuidv4 } from 'uuid';

import s from './ListMostRecentDecoded.module.css';
import { useDispatch } from 'react-redux';
import { carsOperations } from '../../redux/cars';

export default function ListMostRecentDecoded() {
  const [lastRequests, setLastRequests] = useContext(RequestContext);
  const dispatch = useDispatch();

  useEffect(() => {
    const localLastRequests = localStorage.getItem('lastRequests');
    const parsedLastRequest = JSON.parse(localLastRequests);

    if (!parsedLastRequest) {
      return;
    }
    setLastRequests(parsedLastRequest);
  }, [setLastRequests]);

  useEffect(() => {
    localStorage.setItem('lastRequests', JSON.stringify(lastRequests));
  });

  const handleClickByListItem = (event) => {
    const vinCodeInList = event.target.innerHTML;

    dispatch(carsOperations.fetchByVin(vinCodeInList));
  };

  return (
    <section className={s.recentlyDecoding}>
      <h2 className={s.title}>Memory decoding VIN </h2>
      {lastRequests.length > 0 ? (
        <ul className={s.list} onClick={handleClickByListItem}>
          {lastRequests &&
            lastRequests.map((request) => (
              <li className={s.item} key={uuidv4()}>
                {request}
              </li>
            ))}
        </ul>
      ) : (
        <p className={s.text}>You don't have early requests</p>
      )}
    </section>
  );
}
