// components/ConfirmModal.js
function ValidationModal({ onClose, onConfirm, actionText }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-validation" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-validation">
          <h3>
            {actionText == "submit" ? (
              <span>Activate</span>
            ) : (
              <span>Deactivate</span>
            )}
          </h3>
          <button className="close-btn-validation" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body-validation">
          <p>
            {actionText == "submit" ? (
              <span>Do you want to activate this vendor?</span>
            ) : (
              <span>Are you certain you want to deactivate this vendor?</span>
            )}
          </p>
        </div>
        <div className="modal-footer-validation">
          <button className="cancel-btn-validation" onClick={onClose}>
            Cancel
          </button>
          <button
            className={`proceed-btn-validation ${
              actionText == "submit" ? "green" : "red"
            }`}
            onClick={onConfirm}
          >
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ValidationModal;
