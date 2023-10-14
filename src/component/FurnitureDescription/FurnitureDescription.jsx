import './FurnitureDescription.less';
import { useNavigate } from 'react-router-dom';

const ButtonBar = () => {
    const navigate = useNavigate();
    return (
        <div className="d-flex">
            <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate("/")}>Back</button>
        </div>
    );
};

const FurnitureDescription = (props) => {
  const {item} = props;
  return (
      <div className="furniture-description">
          <div className="left-section">
            <img src={item.imageLink} alt="Table" className="furniture-image" />
            <div className="additional-details">
                <p><span className="description-label">Condition:</span> {item.condition}</p>
                <p><span className="description-label">Brand:</span> {item.brand}</p>
                <p><span className="description-label">Decor Style:</span> {item.decorStyle}</p>
                <p><span className="description-label">Finsh:</span> {item.finsh}</p>
                <p><span className="description-label">Material:</span> {item.material}</p>
            </div>
          </div>
          <div className="furniture-details">
              <p><span className="name-label">Name:</span> {item.furnitureName}</p>
              <p><span className="price-label">Price:</span> ${item.price}</p>
              <p><span className="description-label">Description:</span> {item.description}</p>
              <p><span className="description-label">deliveryMethod:</span> {item.deliveryMethod}</p>
              <div className="seller-details">
                  <p><span className="description-label">Seller Name:</span> {item.sellerName}</p>
                  <p><span className="description-label">Seller Address:</span> {item.sellerAddress}</p>
                  <p><span className="description-label">Seller Phone Number:</span> {item.sellerPhoneNumber}</p>
              </div>
              <ButtonBar />
          </div>
      </div>
  )
};


export default FurnitureDescription;
