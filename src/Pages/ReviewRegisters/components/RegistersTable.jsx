import React, { useEffect, useState } from "react";

function generateReadebleDate(text) {
  let returnDate = "";
  try {
    returnDate = new Date(text);
    returnDate = returnDate.toLocaleDateString();
  } catch (error) {
    returnDate = "";
  }
  return returnDate;
}

function RegistersTable({ data = [], refetch = () => {} }) {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (data) {
      if (data.length > 0) {
        data.forEach((element) => {
          if (element.data) {
            const headers = Object.keys(element.data);
            if (headers.length > 0) {
              headers.forEach((header) => {
                if (!columns.includes(header)) {
                  setColumns([...columns, header]);
                }
              });
            }
          }
        });
      }
    }
  }, [data, columns]);
  return (
    <div className="flex flex-col justify-center w-full times-center">
      {data && (
        <table className="w-full text-xs">
          <thead>
            <tr>
              <th className="border-2 border-black">id</th>
              {columns.map((column) => (
                <th key={`column-${column}`} className="border-2 border-black">
                  {column}
                </th>
              ))}

              <th className="border-2 border-black">registrado el</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length > 0 &&
              data.map((dataElement, index) => (
                <tr key={"element" + index}>
                  <td className="py-1 text-center border-2 border-black">
                    {`...${dataElement._id.slice(
                      dataElement._id.length - 4,
                      dataElement._id.length
                    )}`}
                  </td>
                  {columns.map((columnData, index) => (
                    <td
                      key={`index-${index}`}
                      className="py-1 text-center border-2 border-black"
                    >
                      {(dataElement.data && dataElement.data[columnData]) || ""}
                    </td>
                  ))}
                  <td className="py-1 text-center border-2 border-black">
                    {`${generateReadebleDate(dataElement.createdAt)}`}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RegistersTable;
