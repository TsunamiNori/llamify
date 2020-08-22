const { default: Modal } = require("./Modal");

const RemoveConfirmationModal = ({ onClose, onRemove }) => {
  return (
    <Modal onClose={onClose}>
      <div className="alert">
        <div className="modal-title">Remove</div>
        <div>Are you sure you want to remove this post?</div>
        <div className="form-buttons">
          <button className="button-wrapper" onClick={onRemove}>
            <span className="button button-primary danger" tabIndex="-1">
              Remove
            </span>
          </button>
          <button className="button-wrapper" onClick={onClose}>
            <span className="button button-secondary" tabIndex="-1">
              Cancel
            </span>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default RemoveConfirmationModal;
