import React from "react";

export function Table({ data }) {
  if (!data || data.length === 0) return <p>No data to display</p>;

  const headers = Object.keys(data[0]); // Get column headers from first object

  return (
    <table style={{fontFamily:"poppins",fontSize:"15px", borderCollapse: "collapse", width: "80%" }}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} style={{ borderBottom: "1px solid black",fontWeight:"600",textAlign:"left", padding: "8px" }}>
              {header.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {headers.map((key) => (
              <td key={key} style={{ borderBottom: "1px solid grey", padding: "15px 8px" }}>
                {row[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
