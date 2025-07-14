function vendors() {
  return (
    <>
      <div className="vendors-container">
        <div className="add-vendor">
          <h2>Vendors</h2>
          <button className="btn-add-vendors">
            <span>+</span> ADD VENDOR
          </button>
        </div>
        <div className="table-container">
          <div className="table-responsive">
            <table className="table-form">
              <thead className="table-header">
                <tr>
                  <th>Name</th>
                  <th>TIN</th>
                  <th>Status</th>
                  <th>Due Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="table-data">
                <tr>
                  <td>Cherry Mae</td>
                  <td>87654321</td>
                  <td>
                    <span className="pill active">● Active</span>
                  </td>
                  <td>21/09/2025</td>
                  <td className="actions">
                    <button className="icon edit">edit</button>
                    <button className="icon enable-disable">a/da</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default vendors;
