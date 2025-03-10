import { formatter } from "../util/investment"


export default function Results({ results }) {
    const initialInvestment = results.length > 0 ? results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment : 0;
  return (
    results && results.length > 0 ? <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {results.map((result) => {
                const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
                const investedCapital = result.valueEndOfYear - totalInterest;
                return (
                    <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(investedCapital)}</td>
                    </tr>
                )
            })}
        </tbody>
    </table> : <></>
  )
}