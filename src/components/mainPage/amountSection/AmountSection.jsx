import React from 'react';
import { useState } from 'react';
import { changeCurrency, changePayment, changeMonth } from '../formSection/FormSection';

function AmountSection({ sumLizing, everyMonthPayment }) {
    // const [leasing, setLeasing] = useState(4 + ' ' + 467 + ' ' + 313);
    // const [monthPayment, setMonthPayment] = useState(114 + ' ' + 455);


    const handleSubmitButton = (event) => {
        alert(JSON.stringify("Сумма договора лизинга: " + sumLizing) + '\n' +
            ("Ваш ежемесячный платеж составляет: " + everyMonthPayment));
    }

    const divideValue = (value) => {
        let temp = String(value);
        let firstSection = temp.slice(0, 3);
        let secondSection = temp.slice(3, 6);
        let threeSection = temp.slice(6, temp.length);
        return firstSection + ' ' + secondSection + ' ' + threeSection;
    }

  const dividePayment = (value) => {
    let temp = String(value);
    let firstSection = temp.slice(0, 3);
    let secondSection = temp.slice(3, temp.length);
    return firstSection + ' ' + secondSection;
  }
    return (
        <section className="amount">
            <form className="amount__form" >
                <div className="amount__form-container">
                    <p className="form__label">Сумма договора лизинга</p>
                    <div className="amount__container">
                        <h2 className="amount__text">{divideValue (sumLizing)}</h2>
                        <p className="amount__text-money">₽</p>
                    </div>
                </div>
                <div className="amount__form-container">
                    <p className="form__label">Ежемесячный платеж от</p>
                    <div className="amount__container">
                        <h2 className="amount__text">{dividePayment(everyMonthPayment)}</h2>
                        {/* <input className="amount__text" value={monthPayment} onChange={changeMonthPayment} /> */}
                        <p className="amount__text-money">₽</p>
                    </div>
                </div>
                <div className="amount__form-container">
                    <button className="amount__button" onClick={() => { handleSubmitButton() }}>Оставить заявку</button>
                </div>
            </form>

        </section>
    );
}

export default AmountSection;