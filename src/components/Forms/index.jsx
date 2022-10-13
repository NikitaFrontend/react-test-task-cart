import { useState, useEffect } from 'react';
import { Map } from '../Map';
import styles from './Forms.module.scss';
import { SelectedProducts } from '../SelectedProducts';
import { Input } from '../Input';

import { PlacesAutocomplete } from '../PlacesAutocomplete';
import { useJsApiLoader } from '@react-google-maps/api';
//=====================КАРТА===========================
const API_KEY = process.env.REACT_APP_API_KEY;
const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
};
const libraries = ['places'];

export const Forms = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries,
  });
  //===================КАРТА=============================

  const initialValues = { address: '', name: '', email: '', tel: '', comment: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    //в случае если у нас все верно
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(JSON.stringify(formValues));
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};

    if (!values.address) {
      errors.address = 'Ошибка ввода';
    }
    if (!values.name) {
      errors.name = 'Ошибка ввода';
    }
    if (!values.email) {
      errors.email = 'Ошибка ввода';
    }
    if (!values.tel) {
      errors.tel = 'Ошибка ввода';
    }

    return errors;
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputItems}>
          <Input
            value={formValues.address}
            onChange={handleChange}
            formErrors={formErrors.address}
            name={'address'}
            type={'text'}
            label={'Адрес'}
          />
          <Input
            value={formValues.name}
            onChange={handleChange}
            formErrors={formErrors.name}
            name={'name'}
            type={'name'}
            label={'Ваше имя'}
          />
          <Input
            value={formValues.tel}
            onChange={handleChange}
            formErrors={formErrors.tel}
            name={'tel'}
            type={'tel'}
            label={'Ваш Телефон'}
          />
          <Input
            value={formValues.email}
            onChange={handleChange}
            formErrors={formErrors.email}
            name={'email'}
            type={'text'}
            label={'Ваш Email'}
          />
          <Input
            value={formValues.comment}
            onChange={handleChange}
            formErrors={formErrors.comment}
            name={'comment'}
            type={'text'}
            label={'Введите Комментарий'}
          />
        </div>
        <SelectedProducts />
        <button className={styles.button}>Купить</button>
        {/* <PlacesAutocomplete isLoaded={isLoaded} />
        {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading</h2>} */}
      </form>
    </div>
  );
};
