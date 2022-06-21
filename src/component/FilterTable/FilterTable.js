import React, { useState } from "react";
const tableData = [
  {
    name: "sonu",
    Performance: "nathi",
    status: "singal",
    date: " 2022-01-01",
  },
  {
    name: "konu",
    Performance: "nathi",
    status: "singal",
    date: " 2022-01-01",
  },
  {
    name: "bonu",
    Performance: "nathi",
    status: "singal",
    date: " 2022-01-01",
  },
  {
    name: "monu",
    Performance: "nathi",
    status: "katai singal",
    date: " 2021-02-01",
  },
  {
    name: "tonu",
    Performance: "nathi",
    status: "janmjaat singal",
    date: " 2021-03-01",
  },
  {
    name: "chonu",
    Performance: "nathi",
    status: "bohot singal",
    date: " 2021-04-01",
  },
];
const FilterTable = () => {
  const [searchValue, setSearchValue] = useState(false);

  const searchItems = () => {};
  console.log(searchValue);
  return (
    <div>
      <input
        type="search"
        placeholder="search here"
        onChange={(e) =>
          setSearchValue((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        type="search"
        placeholder="status"
        onChange={(e) =>
          setSearchValue((prev) => ({ ...prev, status: e.target.value }))
        }
      />

      <input
        type="date"
        onChange={(e) =>
          setSearchValue((prev) => ({ ...prev, date: e.target.value }))
        }
      />
      <button onClick={searchItems}>Search</button>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>Performance</th>
            <th>status</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {tableData
            ?.filter((el, i) =>
              !searchValue.name
                ? el
                : el?.name?.toLowerCase()?.includes(searchValue?.name)
            )
            ?.filter((ann, id) =>
              !searchValue.date ? ann : ann?.date?.includes(searchValue?.date)
            )
            .map((elem, ind) => (
              <tr key={ind}>
                <td>{elem.name}</td>
                <td>{elem.Performance}</td>
                <td>{elem.status}</td>
                <td>{elem.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterTable;
