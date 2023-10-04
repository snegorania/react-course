import {useState} from 'react';

const useInput = (validation) => {
    const [value, setValue] = useState('');
    const [isTouched, setTouched] = useState(false);

    const isValid = validation(value);
    const isInvalid = !isValid && isTouched;

    const handleValue = (e) => setValue(e.target.value);

    const handleBlur = () => setTouched(true);

    const reset = () => {
        setValue('');
        setTouched(false);
    }

    return [{value, isValid, isInvalid}, {handleValue, handleBlur, reset}]
}

export default useInput;