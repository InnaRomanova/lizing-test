import React from 'react';
import currency from '../images/currency.svg';
import discount from '../images/discount.svg';

function Form() {
    return (
        <form className="form__container">
            <ul className="form__list">
                <li className="form__item">
                    <label className="form__label">Cтоимость автомобиля</label>
                    <div className="form__number">
                        {/* <div className="form__price"> */}
                        <input className="form__currency" name="number" type="number" placeholder="3 300 000"
                            min="1 500 000" max="10 000 000" autoComplete="on" />
                        <img className="form__currency-image" src={currency} alt="в рублях" />

                        <input className="form__input-slider" type="range" min="1 500 000" max="10 000 000" />
                    </div>
                </li>

                <li className="form__item">
                    <label className="form__label">Первоначальный взнос</label>
                    <div className="form__number">
                        <input className="form__currency" name="number" type="number" placeholder="420 000"
                            min="10%" max="60%" autoComplete="on"></input>
                        <img className="form__currency-image" src={currency} alt="в рублях" />
                        <div className="form__discount">
                            <img className="form__discount-image" src={discount} alt="скидка" />
                        </div>
                        <input className="form__input-slider" type="range" min="10" max="60" />
                    </div>
                </li>

                <li className="form__item">
                    <label className="form__label">Срок лизинга</label>
                    <div className="form__number">
                        <input className="form__months" name="number" type="number" placeholder="60"
                            min="6" max="120" autoComplete="on" />
                        <p className="form__discount-image">мес.</p>
                        <input className="form__input-slider" type="range" min="6" max="120" />
                    </div>
                </li>
            </ul>
        </form>
    );
}

export default Form;