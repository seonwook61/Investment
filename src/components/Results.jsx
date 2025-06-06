import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({input}) {
    const resultData = calculateInvestmentResults(input);
    const initialInvestment = 
        resultData[0].valueEndOfYear - 
        resultData[0].annualInvestment - 
        resultData[0].interest;

    console.log(resultData);


    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capatal</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map(yearData => {
                const totalInterest = 
                    yearData.valueEndOfYear -
                    yearData.annualInvestment * 
                    yearData.year -
                    initialInvestment;
                const totalAmoutInvested = yearData.valueEndOfYear - totalInterest;

                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmoutInvested)}</td>
                </tr>
                
            })}
        </tbody>
    </table>
}