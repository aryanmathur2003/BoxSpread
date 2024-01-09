const OptionTable = ({ data }) => {
  const credits = data.slice(8);
  const strikes = data.slice(0,7);
  console.log(credits)
  
  return (
    
    <div className="relative overflow-x-auto rounded-2xl shadow-lg">
      <table className="w-full text-lg text-left rtl:text-right text-gray-500">
        <thead className="text-xl text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              {data[7]}
            </th>
            <th scope="col" className="px-6 py-3">
              Credit
            </th>
          </tr>
        </thead>
        <tbody>
          {credits.map((cred, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              } border-b`}
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {strikes[index]} - {strikes[index] + 1}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {cred}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OptionTable;
