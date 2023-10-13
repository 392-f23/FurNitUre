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
          <img src={item.image} alt="Table" className="furniture-image" />
          <div className="furniture-details">
              <p><span className="name-label">Name:</span> {item.name}</p>
              <p><span className="price-label">Price:</span> ${item.price}</p>
              <p><span className="description-label">Description:</span> {item.description}</p>
          </div>
          <ButtonBar />
      </div>
  )
};


export default FurnitureDescription;
