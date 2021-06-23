import React, { useState, useEffect } from "react";
import axios from "axios";
function Search() {
  const [searchTerm, setSearchTerm] = useState("programming");
  const [results, setresults] = useState([]);

  const renderedList = results.map((result, index) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {index + 1}&nbsp;&nbsp; {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  useEffect(() => {
    const url = "https://en.wikipedia.org/w/api.php";
    async function search() {
      const { data } = await axios.get(url, {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: searchTerm
        }
      });
      setresults(data.query.search);
    }

    if (searchTerm) {
      search();
    }
  }, [searchTerm]);

  return (
    <div>
      <div className="ui form container">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            type="text"
            className="input"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            value={searchTerm}
          />
        </div>
      </div>

      <div className="ui celled list container">{renderedList}</div>
    </div>
  );
}

export default Search;
