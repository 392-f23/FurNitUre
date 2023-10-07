import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from 'react-router-dom';
import FurnitureDescription from "./FurnitureDescription/FurnitureDescription";
import MainPage from "./MainPage";

// const CourseFormWrapper = ({ data }) => {
//     const { courseId } = useParams();
//     const course = data.courses[courseId];
  
//     if (!course) {
//       return <div>Course not found</div>;
//     }
//     return <CourseForm course={course} />;
// }

const Dispatcher = ({}) => (
    <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<TermPage data={data}/>}></Route>
            When the user navigates to the root path ("/"), 
            the TermPage component will be rendered, and the data prop will be passed to it.
            <Route path="/courses/:courseId/edit" element={<CourseFormWrapper data={data} />} /> */}
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/FurnitureDescription/furnitureId/detail" element={<FurnitureDescription />}></Route>
        </Routes>
    </BrowserRouter>
);

export default Dispatcher;