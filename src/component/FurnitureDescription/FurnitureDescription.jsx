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

const FurnitureDescription = () => {
    return (
        <div className="furniture-description">
            <img src="https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/table.jpg" alt="Table" className="furniture-image" />
            <div className="furniture-details">
                <p>Name: Furniture</p>
                <p>Price: $40</p>
                <p>Description: Discover the essence of elegant living with this exquisitely
                  handcrafted table, blending modern design with traditional
                  craftsmanship. Its sleek lines and robust wooden structure infuse a
                  touch of unique charm into your living space. Every detail is
                  meticulously refined, ensuring it's not just a practical piece of
                  furniture but an artistic statement. Moreover, its multifunctional
                  design makes it suitable for various settings, be it a formal office
                  environment or a cozy home ambiance. Choose our table and elevate
                  your space with distinctive style.</p>
            </div>
            <ButtonBar />
        </div>
    )
};

export default FurnitureDescription;
