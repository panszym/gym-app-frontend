interface DeleteProps {
  show: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteConfirm: React.FC<DeleteProps> = ({
  show,
  message,
  onConfirm,
  onCancel,
}) => {
  if (!show) return null;
  return (
    <div
      className="modal show d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0,0,0,0.5" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Delete</h5>
            <button
              className="btn-close"
              type="button"
              aria-label="Close"
              onClick={onCancel}
            ></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-sm btn-secoondary"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="btn btn-sm btn-primary"
              type="button"
              onClick={onConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
