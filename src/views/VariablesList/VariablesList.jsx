import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import ReactHtmlParser from 'react-html-parser';
import { variablesOperations, variablesSelectors } from '../../redux/variables';

import s from './VariablesList.module.css';

export default function Variables() {
  const dispatch = useDispatch();
  const isLoading = useSelector(variablesSelectors.isLoading);
  const variablesList = useSelector(variablesSelectors.getVariables);

  useEffect(() => {
    dispatch(variablesOperations.getVariables());
  }, [dispatch]);

  return (
    <section>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={s.list}>
          {variablesList &&
            variablesList.map((variableInfo) => {
              const keys = Object.keys(variableInfo);
              const values = Object.values(variableInfo);
              const { ID } = variableInfo;

              return (
                <li className={s.item} key={ID}>
                  <Link to={`${ID}`}>
                    {keys.map((key, index) => (
                      <div className={s.text} key={key}>
                        <div className={s.textKey}>{key}</div>
                        <div className={s.textValue}>
                          {ReactHtmlParser(values[index])}
                        </div>
                      </div>
                    ))}
                  </Link>
                </li>
              );
            })}
        </ul>
      )}
    </section>
  );
}
