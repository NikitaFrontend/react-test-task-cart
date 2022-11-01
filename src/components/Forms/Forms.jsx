import { useState, useEffect } from 'react';
import styles from './Forms.module.scss';
import { Products } from '../Products/Products';
import { Input } from '../Input/Input';
import { DropDownList } from '../DropDownList/DropDownList';
export const Forms = () => {
  const [select, setSelect] = useState('');
  const [formValues, setFormValues] = useState({
    address: '',
    name: '',
    email: '',
    tel: '',
    comment: '',
    select: select,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    setFormValues({ ...formValues, select: select });
  }, [select]);

  const removeSelectError = () => {
    if (formErrors.select) {
      delete formErrors.select;
      setFormErrors(formErrors);
    }
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (formErrors[name]) {
      delete formErrors[name];
      setFormErrors(formErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert(JSON.stringify(formValues));
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
    if (!values.select) {
      errors.select = 'Ошибка ввода';
    }
    return errors;
  };
  //error
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputItems}>
          <Input
            value={formValues.address}
            onChange={onChangeInput}
            error={formErrors.address}
            name="address"
            type="text"
            label="Адрес"
          />
          <DropDownList
            select={select}
            setSelect={(e) => setSelect(e)}
            error={formErrors.select}
            removeSelectError={removeSelectError}
          />
          <Input
            value={formValues.name}
            onChange={onChangeInput}
            error={formErrors.name}
            name="name"
            type="name"
            label="Ваше имя"
          />
          <Input
            value={formValues.tel}
            onChange={onChangeInput}
            error={formErrors.tel}
            name="tel"
            type="tel"
            label="Ваш Телефон"
          />
          <Input
            value={formValues.email}
            onChange={onChangeInput}
            error={formErrors.email}
            name="email"
            type="text"
            label="Ваш Email"
          />
          <Input
            value={formValues.comment}
            onChange={onChangeInput}
            error={formErrors.comment}
            name="comment"
            type="text"
            label="Введите Комментарий"
          />
        </div>
        <Products />
        <button className={styles.button}>Купить</button>
      </form>
    </div>
  );
};
