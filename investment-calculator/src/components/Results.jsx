import { formatter } from "../util/investment"


export default function Results({ results }) {
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
            {results.map((result) => (
                <tr key={result.year}>
                    <td>{result.year}</td>
                    <td>{formatter.format(result.valueEndOfYear)}</td>
                    <td>{result.interest}</td>
                    <td>{formatter.format(result.annualInvestment)}</td>
                </tr>
            ))}
        </tbody>
    </table> : <></>
  )
}