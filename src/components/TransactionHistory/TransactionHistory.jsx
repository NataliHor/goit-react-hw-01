import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th className={css.tableThead}>Type</th>
          <th className={css.tableThead}>Amount</th>
          <th className={css.tableThead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td className={css.tableBody}>{item.type}</td>
              <td className={css.tableBody}>{item.amount}</td>
              <td className={css.tableBody}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
