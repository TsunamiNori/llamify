import { useState } from "react";
import Modal from "./Modal";

const TeamEditModal = ({
  teamName: teamNameProp,
  onSubmit: onSubmitProp,
  onClose,
}) => {
  const [teamName, setTeamName] = useState(teamNameProp);
  const onSubmit = (e) => {
    onSubmitProp({
      teamName,
    });
    e.preventDefault();
  };
  return (
    <Modal onClose={onClose}>
      <form className="new-team form" onSubmit={onSubmit}>
        <div className="modal-title">Edit Team</div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Name
          </label>
          <input
            className="input"
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <div className="form-buttons buttons">
          <button className="button-wrapper" onClick={onSubmit}>
            <span className="button button-primary" tabIndex="-1">
              Submit
            </span>
          </button>
          <button className="button-wrapper" onClick={() => onClose()}>
            <span className="button button-secondary" tabIndex="-1">
              Cancel
            </span>
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default TeamEditModal;
