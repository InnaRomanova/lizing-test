import React from 'react';
import currencyImg from '../../../images/currency.svg';
import monthImg from '../../../images/month.svg';
import { useState } from 'react';

function FormSection ({currency, setCurrency, payment, setPayment, month, setMonth}) {
    const currencyProps = {'min': 1500000, 'max': 10000000, 'step': 10000};
    const paymentProps = {'min': 10, 'max': 60, 'step': 1};
    const monthProps = {'min': 6, 'max': 120, 'step': 3};

    //стоимость автомобиля
    const changeCurrency = (event) => {
        setCurrency(event.target.value);
        setBackgroundSize(event);
    };

    //первоначальный взнос
    const changePayment = (event) => {
        setPayment(event.target.value);
        setBackgroundSize(event);
    };

    //срок лизинга
    const changeMonth = (event) => {
        setMonth(event.target.value);
        setBackgroundSize(event);
    };

    function setBackgroundSize(event){
        event.target.style.backgroundSize = (event.target.value - event.target.min) * 100 / (event.target.max - event.target.min) + '% 100%';
    }

    return (
        <form className="form__container">
            <ul className="form__list">
                <li className="form__item">
                    <label className="form__label">Cтоимость автомобиля</label>
                    <div className="form__number">
                        <input className="form__currency" name="number" type="number" value={currency}
                            min="1 500 000" max="10 000 000" autoComplete="on" onChange={changeCurrency} />
                        <img className="form__currency-image" src={currencyImg} alt="в рублях" />
                    </div>
                    <input
                        className="form__input-slider"
                        type='range'
                        onChange={changeCurrency}
                        min={currencyProps.min}
                        max={currencyProps.max}
                        step={currencyProps.step}
                        defaultValue={currency}
                        style={{backgroundSize: (currency - currencyProps.min) * 100 / (currencyProps.max - currencyProps.min) + '% 100%'}}
                    ></input>
                </li>

                <li className="form__item">
                    <label className="form__label">Первоначальный взнос</label>
                    <div className="form__number">
                        <input className="form__currency" name="number" type="number" value={currency * payment / 100}
                            min={currency * 0.1} max={currency * 0.6} autoComplete="on" onChange={changePayment} />
                        <img className="form__currency-image form__currency-contribution" src={currencyImg} alt="в рублях" />
                        <div className="form__discount">
                            <p>{payment}%</p>
                        </div>
                    </div>
                    <input
                        className="form__input-slider"
                        type='range'
                        onChange={changePayment}
                        min={paymentProps.min}
                        max={paymentProps.max}
                        step={paymentProps.step}
                        defaultValue={payment}
                        style={{backgroundSize: (payment - paymentProps.min) * 100 / (paymentProps.max - paymentProps.min) + '% 100%'}}
                    ></input>
                </li>

                <li className="form__item">
                    <label className="form__label">Срок лизинга</label>
                    <div className="form__number">
                        <input className="form__months" name="number" type="number" value={month}
                            min="6" max="120" autoComplete="on" onChange={changeMonth} />
                        <img className="form__discount-image" src={monthImg} alt="месяц" />
                    </div>
                    <input
                        className="form__input-slider"
                        type='range'
                        onChange={changeMonth}
                        min={monthProps.min}
                        max={monthProps.max}
                        step={monthProps.step}
                        defaultValue={month}
                        style={{backgroundSize: (month - monthProps.min) * 100 / (monthProps.max - monthProps.min) + '% 100%'}}
                    ></input>
                </li>
            </ul>
        </form>
    );
}

export default FormSection;