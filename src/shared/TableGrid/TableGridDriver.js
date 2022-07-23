import { verificationKeys } from "../constant";

const TableGridDriver = (props) => {
  return (
    <>
      {props.GridData?.ColumnsData?.filter((x) => (props.Status ? x.Verified === props.Status && x.Staff === "N" : x.Staff === "N")).length !== 0 ? (
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              {props.GridData?.ColumnsHead?.map((x) => (
                <th key={x.Name}>{x.Name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.GridData?.ColumnsData?.filter((x) => (props.Status ? x.Verified === props.Status && x.Staff === "N" : x.Staff === "N")).map((c) => (
              <tr key={c.Id}>
                {props.GridData?.ColumnsHead?.filter((x) => x.Name !== "Action").map((v, i) => {
                  let type = typeof c[v.Key] === "object" ? (v.Field.Name ? c[v.Key].find((x) => x[v.Field.Name] === v.Field.Value)[v.Field.Key] : c[v.Key][v.Field.Key]) : c[v.Key];
                  return <td key={i}>{type}</td>;
                })}
                <td>
                  {props.Status === "N" && (
                    <button className="btn btn-sm btn-link" name={verificationKeys.verifyDriver} onClick={(e) => props.onClick(e, c)}>
                      Verify
                    </button>
                  )}
                  <button className="btn btn-sm btn-link" name={verificationKeys.editDriver} onClick={(e) => props.onClick(e, c)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        "No Data Available"
      )}
    </>
  );
};

export default TableGridDriver;