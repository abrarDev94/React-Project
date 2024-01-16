import React from 'react'
import { useState } from 'react'

export default function Monthlyincome() {

    const [income, setIncome] = useState(0)
    const SalaryCalculator = () => {
        setIncome(income)

    }
    return (
        <div>
            <p>my monthlyincome is $ {income}</p>
            <button className='btn btn-primary' onClick={SalaryCalculator}>INCOME</button>

        </div>
    )
}
