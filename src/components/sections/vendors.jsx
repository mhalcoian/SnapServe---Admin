import { useState } from "react";
import CreateModal from "../crud/create_modal";

function vendors() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ITEMS_PER_PAGE = 10;

  const vendorsData = [
    {
      name: "Cherry Mae",
      tin: "86813425",
      status: "Active",
      due_date: "21/09/2025",
    },
    {
      name: "Lyneth Escuadero",
      tin: "87654321",
      status: "Inactive",
      due_date: "21/01/2025",
    },
    {
      name: "Cherry Mae",
      tin: "86813425",
      status: "Active",
      due_date: "21/09/2025",
    },
    {
      name: "Lyneth Escuadero",
      tin: "87654321",
      status: "Inactive",
      due_date: "21/01/2025",
    },
    {
      name: "Cherry Mae",
      tin: "86813425",
      status: "Active",
      due_date: "21/09/2025",
    },
    {
      name: "Lyneth Escuadero",
      tin: "87654321",
      status: "Inactive",
      due_date: "21/01/2025",
    },
    {
      name: "Cherry Mae",
      tin: "86813425",
      status: "Active",
      due_date: "21/09/2025",
    },
    {
      name: "Lyneth Escuadero",
      tin: "87654321",
      status: "Inactive",
      due_date: "21/01/2025",
    },
    {
      name: "Cherry Mae",
      tin: "86813425",
      status: "Active",
      due_date: "21/09/2025",
    },
    {
      name: "Lyneth Escuadero",
      tin: "87654321",
      status: "Inactive",
      due_date: "21/01/2025",
    },
    {
      name: "Cherry Mae",
      tin: "86813425",
      status: "Active",
      due_date: "21/09/2025",
    },
    {
      name: "Lyneth Escuadero",
      tin: "87654321",
      status: "Inactive",
      due_date: "21/01/2025",
    },
  ];

  const totalPages = Math.ceil(vendorsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = vendorsData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAddVendor = (vendor) => {
    console.log("Vendor submitted:", vendor);
    // Save to backend or update local state
  };

  return (
    <>
      <div className="vendors-container">
        <div className="add-vendor">
          <h2 className="vendor-label">Vendors</h2>
          <button
            className="btn-add-vendors"
            onClick={() => setIsModalOpen(true)}
          >
            <span>+</span> ADD VENDOR
          </button>
        </div>

        {isModalOpen && (
          <CreateModal
            setIsModalOpen={() => setIsModalOpen(false)}
            handleAddVendor={handleAddVendor}
          />
        )}

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
                {currentItems.map((vendor, index) => (
                  <tr key={index}>
                    <td>{vendor.name}</td>
                    <td>{vendor.tin}</td>
                    <td>
                      <span className={`pill ${vendor.status.toLowerCase()}`}>
                        {vendor.status === "Active" ? "● Active" : "● Inactive"}
                      </span>
                    </td>
                    <td>{vendor.due_date}</td>
                    <td>
                      <button className="icon edit">✏️</button>
                      <button className="icon toggle-status">
                        {vendor.status === "Active" ? "🚫" : "✅"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination-container">
              <p className="pagination-info">
                Showing {startIndex + 1}-
                {Math.min(startIndex + ITEMS_PER_PAGE, vendorsData.length)} from{" "}
                {vendorsData.length} data
              </p>
              <div className="pagination">
                {"<-"}
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    className={`page-button ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
                {"->"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default vendors;
