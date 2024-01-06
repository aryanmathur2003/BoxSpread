const OptionTable = () => {
  const tableData = [
    {
      productName: 'Apple MacBook Pro 17"',
      color: "Silver",
    },
    {
      productName: "Microsoft Surface Pro",
      color: "White",
    },
    {
      productName: "Magic Mouse 2",
      color: "Black",
    },
    {
      productName: "Magic Mouse 2",
      color: "Black",
    },
    {
      productName: "Magic Mouse 2",
      color: "Black",
    },
    {
      productName: "Magic Mouse 2",
      color: "Black",
    },
  ];

  return (
    <div className="relative overflow-x-auto rounded-2xl shadow-lg">
      <table className="w-full text-xl text-left rtl:text-right text-gray-500">
        <thead className="text-2xl text-gray-700 uppercase bg-gray-50">
          <tr>
            {Object.keys(tableData[0]).map((key) => (
              <th key={key} scope="col" className="px-6 py-3">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              } border-b`}
            >
              {Object.values(row).map((value, idx) => (
                <td
                  key={idx}
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OptionTable;
