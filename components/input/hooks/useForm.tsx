import {ChangeEvent, useEffect, useState} from 'react';

const useForm = () => {
    const [email, setEmail] = useState('');
    const [search, setSearch] = useState('');
    const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [firstname, setFirstName] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [passwordInputType, setPasswordInputType] = useState('password');

    useEffect(() => {
        hidePassword ? setPasswordInputType('password') : setPasswordInputType('text')
    }, [hidePassword]);

    const isPasswordShown = () => setHidePassword((prevState) => !prevState)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.id == 'firstName') setFirstName(event.target.value)
        else if (event.target.id == 'lastName') setLastName(event.target.value)
        else if (event.target.id == 'username') setUsername(event.target.value)
        else if (event.target.id == 'email') setEmail(event.target.value)
        else if (event.target.id == 'password') setPassword(event.target.value)
        else if (event.target.id == 'search') setSearch(event.target.value)
    }

    return {
        email,
        search,
        password,
        lastName,
        firstname,
        username,
        hidePassword,
        passwordInputType,
        handleInputChange,
        isPasswordShown
    };
}

export default useForm;