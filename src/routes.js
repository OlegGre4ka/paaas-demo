import {
    Routes,
    Route
} from "react-router-dom";
import StepTwo from "./containers/StepTwo";
import StepThree from "./containers/StepThree";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<StepTwo />} />
            <Route path="/citizenship" element={<StepThree />} />
        </Routes>
    )
}
export default MainRoutes