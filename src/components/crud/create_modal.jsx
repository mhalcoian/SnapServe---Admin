import { useState } from "react";

const CreateModal = ({ setIsModalOpen, handleAddVendor }) => {
  const [formData, setFormData] = useState({
    name: "",
    owner: "",
    tin: "",
    email: "",
    contact: "",
    countryCode: "+63",
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddVendor(formData);
  };

  return (
    <div className="modal-backdrop" onClick={setIsModalOpen}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Create Vendor</h3>
          <button onClick={setIsModalOpen} className="close-btn">
            ×
          </button>
        </div>

        <form className="modal-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Owner</label>
            <input
              name="owner"
              placeholder="Owner"
              value={formData.owner}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>TIN</label>
            <input
              name="tin"
              placeholder="TIN"
              value={formData.tin}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <div className="form-group logo-group">
              <label className="file-upload" htmlFor="logo-upload">
                <div className="logo-box">
                  {formData.logo ? (
                    <img
                      src={URL.createObjectURL(formData.logo)}
                      alt="Logo Preview"
                      className="logo-preview"
                    />
                  ) : (
                    <>
                      <div className="logo-icon">📷</div>
                      <span className="logo-text">
                        Select logo
                        <br />
                        <span className="logo-subtext"></span>
                      </span>
                      or drag one here
                    </>
                  )}
                </div>
              </label>
              <input
                type="file"
                id="logo-upload"
                name="logo"
                onChange={handleChange}
                accept="image/*"
                hidden
              />
            </div>

            <div className="contact-info">
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Contact number</label>
                <div className="contact-wrapper">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                  >
                    <option value="+63">🇵🇭</option>
                    <option value="+82">🇰🇷</option>
                    <option value="+1">🇺🇸</option>
                  </select>
                  <input
                    type="tel"
                    name="contact"
                    placeholder="Contact number"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;
