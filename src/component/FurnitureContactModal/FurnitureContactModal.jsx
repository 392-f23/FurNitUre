// import 'bootstrap/dist/css/bootstrap.min.css';
import './FurnitureContactModal.less'

const FurnitureContactModal = ({open, close}) => {


    return (
        <div
          className={`modal ${open ? 'modal-show' : ''}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="dialog_confirm_mapLabel" aria-hidden="true"
          onClick={(evt) => { if (evt.target === evt.currentTarget) close(); }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" aria-label="Close"
                  onClick={close}
                />
              </div>
              <div className="modal-body">
                2xx-8xx-9xxx, Alice Bob
              </div>
            </div>
          </div>
        </div>
      );
}

export default FurnitureContactModal;