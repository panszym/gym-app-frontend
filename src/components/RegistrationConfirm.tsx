interface UpdateProps {
  show: boolean;
  message: string;
  onConfirm: () => void;
}

export const RegistrationConfirm: React.FC<UpdateProps> = ({
  show,
  message,
  onConfirm,
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
            <h5 className="modal-title">You are successfully registered!</h5>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
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
