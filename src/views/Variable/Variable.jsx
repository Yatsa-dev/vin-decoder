import { useEffect } from 'react';
import { useParams } from 'react-router';
import ReactHtmlParser from 'react-html-parser';
import { useSelector, useDispatch } from 'react-redux';
import { variableOperations, variableSelectors } from '../../redux/variable';
import Spinner from '../../components/Spinner';
import s from './Variable.module.css';

export default function Variable() {
  const { variableId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(variableSelectors.isLoading);
  const variable = useSelector(variableSelectors.getVariableById);

  useEffect(() => {
    dispatch(variableOperations.fetchVariableById(variableId));
  }, [dispatch, variableId]);

  const keys = Object.keys(variable);
  const values = Object.values(variable);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className={s.variable}>
          <h2 className={s.title}>Variable {variableId}</h2>

          {variable ? (
            <ul className={s.list}>
              {keys.map((key, index) => (
                <li className={s.item} key={key}>
                  <div className={s.itemKey}>{key}</div>

                  <div className={s.itemValue}>
                    {ReactHtmlParser(values[index])}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className={s.notFound}>
              Variable with ID: {variableId} not found
            </p>
          )}
        </section>
      )}
    </>
  );
}
