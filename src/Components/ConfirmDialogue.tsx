interface ConfirmDialogueProps {
  title: string;
  message: string;
  show: boolean;
    onClose:()=>void
    onConfirm:()=>void
}
const ConfirmDialogue: React.FC<ConfirmDialogueProps> = ({
  title,
  message,
  show,
  onClose,
  onConfirm
}) => {
  if (show == false) {
    return null;
  }
  return (
    <div className="modal show d-block" tabIndex={-1} style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary"  onClick={onConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialogue;
