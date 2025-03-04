import { useSearchParams } from "react-router-dom";

function SearchResults() {
  const [searchParams] = useSearchParams();

  const exchangeId = searchParams.get("exchangeId");
  const intervalId = searchParams.get("intervalId");
  const symbolId = searchParams.get("symbolId");

  const displaySearchParams =
    `exchangeId: ${exchangeId}, intervalId: ${intervalId}, symbolId: ${symbolId}`;

  return (
    <div className="flex text-slate-300 text-sm items-center justify-center">
      <table className="table-auto border-separate border-spacing-2 border border-slate-500">
        <thead className="text-slate-300 border border-color-slate-500">
          <tr className="text-slate-300 border border-color-slate-500">
            <th>
              Search Parameters
            </th>
          </tr>
        </thead>
        <tbody className="text-slate-300 border border-color-slate-500 p-2 m-2 text-sm">
          {Array.from(searchParams.entries()).map((entry) => {
            const [k, item] = entry;
            return (
              <tr key={k}>
                <td>{k}</td>
                <td>{item}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
