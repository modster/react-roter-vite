import { useSearchParams } from "react-router-dom";

function SearchResults() {
  const [searchParams] = useSearchParams();
  return (
    <div className="text-white">
      <p>
        You searched for <i>{searchParams.get("exchangeId")}</i>
      </p>
    </div>
  );
}

export default SearchResults;
