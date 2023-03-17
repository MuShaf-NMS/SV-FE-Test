import React from "react";

function Table({ title, loading, header, items, slot }) {
  return (
    <div>
      <div className="text-lg font-medium ml-3">{title}</div>
      <div className="overflow-x-auto">
        <table className="table-auto rounded shadow w-full mt-3 font-normal">
          <thead className="text-[#00000099]">
            <tr className="border-b text-left font-normal">
              {header.map((h, idx) => (
                <th className="px-3 py-2" key={idx}>
                  {h.text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={header.length}
                  className="text-[#00000099] text-center py-3"
                >
                  Sedang memuat ... Mohon tunggu
                </td>
              </tr>
            ) : items.length > 0 ? (
              items?.map((item, i) => (
                <tr key={i} className="hover:bg-gray-100 border-b">
                  {header.map((key, idx) => (
                    <td key={idx} className="px-3 py-2">
                      {slot && slot[key.value]
                        ? slot[key.value](item, i)
                        : item[key.value]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={header.length}
                  className="text-[#00000099] text-center py-3"
                >
                  Data tidak ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
