import { useDispatch } from 'react-redux';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { carsOperations } from '../../redux/cars';

import { RequestContext } from '../../contexts/requestContext';
import s from './Searchbar.module.css';

export default function Searchbar() {
  const dispatch = useDispatch();
  const [lastRequests, setLastRequests] = useContext(RequestContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    const { value } = event.currentTarget;

    setSearchQuery(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      toast.dark('Sorry,input field is empty');
      return;
    }

    if (searchQuery.trim()) {
      dispatch(carsOperations.fetchByVin(searchQuery));
      setLastRequests([...lastRequests, searchQuery].slice(-5));
    }
    setSearchQuery('');
  };

  return (
    <section className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <p className={s.title}> Please enter VIN code </p>
          <input
            className={s.input}
            type="text"
            autoFocus
            onChange={handleChange}
            value={searchQuery}
            placeholder="Enter VIN in the search field"
            pattern="[a-zA-Z0-9]{17}"
            maxLength={17}
            title="The given number is incorrect"
          />
          <button className={s.btn}>Search</button>
        </label>
      </form>
    </section>
  );
}
