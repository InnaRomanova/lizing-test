import React from 'react';
import ContentSection from './contentSection/ContentSection';
import AmountSection from './amountSection/AmountSection';
import FormSection from './formSection/FormSection';
import { useState } from 'react';


function Main() {
    const [currency, setCurrency] = useState(3300000);
    const [payment, setPayment] = useState(13);
    const [month, setMonth] = useState(60);

    //функция ежемесячного платежа
    //Ежемесячный платеж от = (Стоимость автомобиля - Первоначальный взнос) * 
    //(0.05 * Math.pow((1 + 0.05), Срок кредита в месяцах) / (Math.pow((1 + 0.05), Срок кредита в месяцах) - 1)
    const changeMonthPayment = () => {
        let monthlyPayment = (currency - payment) * (0.005 * Math.pow((1 + 0.005), month) / (Math.pow((1 + 0.005), month) - 1));
        monthlyPayment = monthlyPayment.toFixed(2);
        return Number(monthlyPayment);
    }

    let everyMonthPayment = changeMonthPayment();

    //функция суммы договора лизинга
    //Сумма договора лизинга = Первоначальный взнос + Срок кредита в месяцах * Ежемесячный платеж от
    const changeLizingSum = () => {
        let sumLizing = payment + month * everyMonthPayment;
        sumLizing = Math.round(sumLizing);
        return sumLizing;
    }
    let sumLizing = changeLizingSum();
    return (
        <>
            <ContentSection />
            <FormSection currency={currency} setCurrency={setCurrency}
                payment={payment} setPayment={setPayment}
                month={month} setMonth={setMonth} />
            <AmountSection everyMonthPayment={everyMonthPayment} sumLizing={sumLizing} />
        </>
    );
}

export default Main;