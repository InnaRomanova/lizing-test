import React from 'react';

function Amount() {
    return (
        <section className="amount">
            <form className="amount__form">
                <div className="amount__form-container">
                    <p className="form__label">Сумма договора лизинга</p>
                    <h2 className="amount__text">4 467 313 ₽</h2>
                </div>
                <div className="amount__form-container">
                    <p className="form__label">Ежемесячный платеж от</p>
                    <h2 className="amount__text">114 455 ₽</h2>
                </div>
            </form>

        </section>
    );
}

export default Amount;