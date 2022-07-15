import { useState } from "react";

export const UserCreate = (props) => {

    const [errors, setErrors] = useState('');

    const [values, setValues] = useState({
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        imageUrl: '',
        country: '',
        city: '',
        street: '',
        streetNumber: '',
    });

    const imageUrlRegex = /^https?:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
    const phoneNumberRegex = /^\d{10}$/;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;

    const changeHandler = (e) => {

        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value

        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const userData = {
            ...values,
            address: {
                country: values.country,
                city: values.city,
                street: values.street,
                streetNumber: values.streetNumber
            }
        }

        props.createUser({ ...userData });
    }

    const errorHandler = (e, bound) => {
        if (values[e.target.name].length < bound) {
            setErrors(state => ({
                ...state,
                [e.target.name]: true
            }))
        } else {
            setErrors(state => ({
                ...state,
                [e.target.name]: false
            }))
        }
    }

    function ValidateEmail(e) {
        if (emailRegex.test(e.target.value)) {
            setErrors(state => ({
                ...state,
                [e.target.name]: false
            }))
        }
        else {
            setErrors(state => ({
                ...state,
                [e.target.name]: true
            }))
        }
    }

    function ValidateImageUrl(e) {
        if (imageUrlRegex.test(e.target.value)) {
            setErrors(state => ({
                ...state,
                [e.target.name]: false
            }))
        } else {
            setErrors(state => ({
                ...state,
                [e.target.name]: true
            }))
        }
    }

    function ValidatePhoneNumber(e) {
        if (phoneNumberRegex.test(e.target.value)) {
            setErrors(state => ({
                ...state,
                [e.target.name]: false
            }))
        } else {
            setErrors(state => ({
                ...state,
                [e.target.name]: true
            }))
        }
    }

    function ValidateStreetNumber(e) {
        if (Number(e.target.value) >= 0) {
            setErrors(state => ({
                ...state,
                [e.target.name]: false
            }))
        } else {
            setErrors(state => ({
                ...state,
                [e.target.name]: true
            }))
        }
    }

    return (
        <div className="overlay">
            <div className="backdrop" onClick={props.closeTab}></div>
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>Add User</h2>
                        <button className="btn close" onClick={props.closeTab}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={submitHandler}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="firstName" name="firstName" value={values.firstName} onChange={changeHandler} onBlur={(e) => errorHandler(e, 3)} type="text" />
                                </div>
                                {errors.firstName &&
                                    < p className="form-error">
                                        First name should be at least 3 characters long!
                                    </p>
                                }

                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="lastName" name="lastName" value={values.lastName} onChange={changeHandler} onBlur={(e) => errorHandler(e, 3)} type="text" />
                                </div>
                                {errors.lastName &&
                                    < p className="form-error">
                                        Last name should be at least 3 characters long!
                                    </p>
                                }
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-envelope"></i></span>
                                    <input id="email" name="email" value={values.email} onChange={changeHandler} onBlur={(e) => ValidateEmail(e)} type="text" />
                                </div>
                                {errors.email &&
                                    <p className="form-error">Email is not valid!</p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-phone"></i></span>
                                    <input id="phoneNumber" name="phoneNumber" value={values.phoneNumber} onChange={changeHandler} onBlur={(e) => ValidatePhoneNumber(e)} type="text" />
                                </div>
                                {errors.phoneNumber &&
                                    <p className="form-error">Phone number is not valid!</p>
                                }
                            </div>
                        </div>

                        <div className="form-group long-line">
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-image"></i></span>
                                <input id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={changeHandler} onBlur={(e) => ValidateImageUrl(e)} type="text" />
                            </div>
                            {errors.imageUrl &&
                                <p className="form-error">ImageUrl is not valid!</p>
                            }
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input id="country" name="country" value={values.country} onChange={changeHandler} onBlur={(e) => errorHandler(e, 2)} type="text" />
                                </div>
                                {errors.country &&
                                    <p className="form-error">
                                        Country should be at least 2 characters long!
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-city"></i></span>
                                    <input id="city" name="city" value={values.city} onChange={changeHandler} onBlur={(e) => errorHandler(e, 3)} type="text" />
                                </div>
                                {errors.city &&
                                    <p className="form-error">
                                        City should be at least 3 characters long!
                                    </p>
                                }
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input id="street" name="street" value={values.street} onChange={changeHandler} onBlur={(e) => errorHandler(e, 3)} type="text" />
                                </div>
                                {errors.city &&
                                    <p className="form-error">
                                        Street should be at least 3 characters long!
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="streetNumber">Street number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-house-chimney"></i></span>
                                    <input id="streetNumber" name="streetNumber" value={values.streetNumber} onChange={changeHandler} onBlur={(e) => ValidateStreetNumber(e)} type="text" />
                                </div>
                                {errors.streetNumber &&
                                    <p className="form-error">
                                        Street number should be a positive number!
                                    </p>
                                }
                            </div>
                        </div>
                        <div id="form-actions">
                            <button id="action-save" className="btn" type="submit">Add</button>
                            <button id="action-cancel" className="btn" type="button" onClick={props.closeTab}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}