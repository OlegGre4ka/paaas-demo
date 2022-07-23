import { FlexBox } from "./../../shared-styled";
import { IconProps } from "./../../../interfaces/IconProps";
const Icon: React.FC<IconProps> = ({ image, alt }) => {
    return (
        <FlexBox width="48px" height="48px" backgroundColor="#fff" justifyContent="center" alignItems="center"
            borderRadius="12px" margin="0 12px 0 0">
            <img src={image} alt={alt} width="24" height="25" />
        </FlexBox>
    )
}
export default Icon