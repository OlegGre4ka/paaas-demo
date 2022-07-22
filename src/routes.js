import {
    Routes,
    Route
} from "react-router-dom";
import StepOne from "./containers/StepOne";
import StepTwo from "./containers/StepTwo";
import StepThree from "./containers/StepThree";
import StepFour from "./containers/StepFour";
import StepFive from "./containers/StepFive";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<StepOne />} />
            <Route path="/citizenship" element={<StepTwo />} />
            <Route path="/address" element={<StepThree />} />
            <Route path="/step-four" element={<StepFour />} />
            <Route path="/step-five" element={<StepFive />} />
        </Routes>
    )
}
export default MainRoutes