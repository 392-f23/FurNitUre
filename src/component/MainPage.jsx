import FurnitureHeader from "./FurnitureHeader/FurnitureHeader";
import FurnitureContent from ".//FurnitureContent/FurnitureContent";
import FunritureUserNav from "./FunritureUserNav/FunritureUserNav"


const MainPage = ({ data, profile }) => {
  return (
    <>
    <div className="d-flex mb-3">
      <div className="me-auto">
        <FurnitureHeader />
      </div>
      
      <div className="ms-auto">
        <FunritureUserNav profile={profile} />
      </div>
    </div>
      
      <FurnitureContent data={data} />
    </>
  );
};

export default MainPage;
