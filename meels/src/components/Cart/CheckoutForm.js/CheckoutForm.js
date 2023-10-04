import classes from "./CheckoutForm.module.css";
import useInput from "../../../hooks/input-hook";

const isNotEmpty = (value) => value.trim() !== "";
const isPostalValid = (value) => value.length === 5;

const Checkout = ({ onCancel, onSubmit}) => {
  const [name, nameFunc] = useInput(isNotEmpty);
  const [street, streetFunc] = useInput(isNotEmpty);
  const [postal, postalFunc] = useInput(isPostalValid);
  const [city, cityFunc] = useInput(isNotEmpty);

  const confirmHandler = (event) => {
    event.preventDefault();

    if (name.isInvalid || street.isInvalid || postal.isInvalid || city.isInvalid) {
        return;
    }

    onSubmit({name: name.value, street: street.value, postal: postal.value, city: city.value});

    nameFunc.reset();
    streetFunc.reset();
    postalFunc.reset();
    cityFunc.reset();
  };

  const nameClasses = `${classes.control} ${name.isInvalid && classes.invalid}`;
  const streetClasses = `${classes.control} ${
    street.isInvalid && classes.invalid
  }`;
  const postalClasses = `${classes.control} ${
    postal.isInvalid && classes.invalid
  }`;
  const cityClasses = `${classes.control} ${city.isInvalid && classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes['form-inputs']}>
        <div className={nameClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onChange={nameFunc.handleValue}
            onBlur={nameFunc.handleBlur}
            value={name.value}
          />
          {name.isInvalid && <p style={{ color: "red" }}>Enter valid value</p>}
        </div>
        <div className={streetClasses}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            onChange={streetFunc.handleValue}
            onBlur={streetFunc.handleBlur}
            value={street.value}
          />
          {street.isInvalid && <p style={{ color: "red" }}>Enter valid value</p>}
        </div>
        <div className={postalClasses}>
          <label htmlFor="postal">Postal Code</label>
          <input
            type="text"
            id="postal"
            onChange={postalFunc.handleValue}
            onBlur={postalFunc.handleBlur}
            value={postal.value}
          />
          {postal.isInvalid && <p style={{ color: "red" }}>Enter valid value</p>}
        </div>
        <div className={cityClasses}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            onChange={cityFunc.handleValue}
            onBlur={cityFunc.handleBlur}
            value={city.value}
          />
          {city.isInvalid && <p style={{ color: "red" }}>Enter valid value</p>}
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
