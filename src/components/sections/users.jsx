import { useState } from "react";
import CreateModal from "../crud/create_modal";
import ValidationModal from "../checker/validation_modal";

function users() {
  const [currentPage, setCurrentPage] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    owner: "",
    tin: "",
    email: "",
    contact: "",
    countryCode: "+63",
    logo: null,
    status: "Active",
    due_date: "21/01/2027",
  });

  const [selectedVendorIndex, setSelectedVendorIndex] = useState(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const [actionText, setActionText] = useState("");

  const ITEMS_PER_PAGE = 10;

  const [vendorsData, setVendorsData] = useState([
    {
      name: "Cherry Mae",
      owner: "Cherry Mae",
      tin: "86813425",
      email: "cherry@example.com",
      contact: "98765432101",
      countryCode: "+63",
      logo: null,
      status: "Active",
      due_date: "21/01/2026",
    },
    {
      name: "Lyneth Escuadero",
      owner: "Lyneth Escuadero",
      tin: "86813425",
      email: "lyn@example.com",
      contact: "98765432101",
      countryCode: "+63",
      logo: null,
      status: "Inactive",
      due_date: "21/01/2025",
    },
  ]);

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
    if (selectedVendorIndex !== null) {
      setVendorsData((prev) =>
        prev.map((v, i) => (i === selectedVendorIndex ? { ...vendor } : v))
      );
    } else {
      setVendorsData((prev) => [...prev, vendor]);
    }

    setFormData({
      name: "",
      owner: "",
      tin: "",
      email: "",
      contact: "",
      countryCode: "+63",
      logo: null,
      status: "Active",
      due_date: "21/01/2027",
    });

    setIsModalOpen(false);
    setSelectedVendorIndex(null);
  };

  return (
    <>
      <div className="container">
        <div className="add">
          <h2 className="label">Users</h2>
          <button
            className="btn-add"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <span>+</span> ADD USER
          </button>
        </div>

        {isModalOpen && (
          <CreateModal
            setIsModalOpen={() => {
              setIsModalOpen(false);
              setFormData({
                name: "",
                owner: "",
                tin: "",
                email: "",
                contact: "",
                countryCode: "+63",
                logo: null,
                status: "Active",
                due_date: "21/01/2027",
              });
            }}
            handleAddVendor={handleAddVendor}
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {isConfirmModalOpen && (
          <ValidationModal
            onClose={() => setIsConfirmModalOpen(false)}
            onConfirm={() => {
              setVendorsData((prev) =>
                prev.map((vendor, i) =>
                  i === selectedVendorIndex
                    ? {
                        ...vendor,
                        status:
                          vendor.status === "Active" ? "Inactive" : "Active",
                      }
                    : vendor
                )
              );
              setIsConfirmModalOpen(false);
            }}
            actionText={actionText}
          />
        )}

        <div className="table-container">
          <div className="table-responsive">
            <table className="table-form">
              <thead className="table-header">
                <tr>
                  <th></th>
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
                    <td>
                      {vendor.logo ? (
                        <img
                          src={URL.createObjectURL(vendor.logo)}
                          alt={vendor.logo}
                          className="icon-profile"
                        />
                      ) : (
                        <img
                          src={vendor.logo}
                          alt={vendor.logo}
                          className="icon-profile"
                        />
                      )}
                    </td>
                    <td>{vendor.name}</td>
                    <td>{vendor.tin}</td>
                    <td>
                      <span className={`pill ${vendor.status.toLowerCase()}`}>
                        {vendor.status === "Active" ? "● Active" : "● Inactive"}
                      </span>
                    </td>
                    <td>{vendor.due_date}</td>
                    <td>
                      <button
                        className="icon edit"
                        onClick={() => {
                          setSelectedVendorIndex(startIndex + index);
                          setFormData(vendor);
                          setIsModalOpen(true);
                        }}
                      >
                        ✏️
                      </button>
                      <button
                        className="icon toggle-status"
                        onClick={() => {
                          setSelectedVendorIndex(startIndex + index);
                          setIsConfirmModalOpen(true);
                          {
                            vendor.status === "Active"
                              ? setActionText("proceed")
                              : setActionText("submit");
                          }
                        }}
                      >
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
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  «
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((page) => {
                    if (totalPages <= 3) return true;
                    if (currentPage === 1) return page <= 3;
                    if (currentPage === totalPages)
                      return page >= totalPages - 2;
                    return Math.abs(page - currentPage) <= 1;
                  })
                  .map((page) => (
                    <button
                      key={page}
                      className={`page-button ${
                        page === currentPage ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  »
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default users;
