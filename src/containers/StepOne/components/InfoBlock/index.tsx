import { useState } from 'react';
import { FlexBox, SpanText } from "./../../../../components/shared-styled";
import { TipWrapper, TipHeader, TipBody, AccordeonWrapper, AccordeonHeader, AccordeonBody, ArrowDownIcon, ArrowUpIcon } from "./styled";
import { accordeonData } from "./data";
import Icon from "./../../../../components/UI/Icon";
import Finger from "./../../../../assets/finger.png";
import Think from "./../../../../assets/think.png";
interface InfoData {
    id: number;
    head: string;
    body: string;
    isOpen: boolean;
}
const InfoBlock = () => {
    const [infoData, setInfoData] = useState<any[]>(accordeonData);

    const toggleAccordon = (id: number) => {
        let infoElement = infoData && infoData.find((el: InfoData) => el.id === id);
        infoElement.isOpen = !infoElement.isOpen;
        const filteredInfoData = infoData.filter((el: InfoData) => el.id !== id)
        // const updateInfoData = infoData.map((el: any) => el.id === id && el.isOpen === false ? el.isOpen=true : el.isOpen=false);
        console.log(infoElement, "infoElement");
        setInfoData([...filteredInfoData, infoElement].sort((a: any, b: any) => a.id - b.id))
    }

    console.log(infoData, "infoData");
    return (
        <FlexBox flexDirection="column">
            <TipWrapper>
                <TipHeader>
                    <Icon image={Finger} alt="Tip icon" />
                    <SpanText color="#ffffff" fontWeight="600">Tip</SpanText>
                </TipHeader>
                <TipBody>
                    <SpanText color="#ffffff" fontWeight="600">
                        Your loan size should not exceed your total cost of attendance minus any financial aid you received. Your loan size does not need to be exact. You can estimate now and always change later.
                    </SpanText>
                </TipBody>
            </TipWrapper>
            {infoData.map(item =>
                <AccordeonWrapper key={item.id} onClick={() => toggleAccordon(item.id)} isActive={item.isOpen}>
                    {!item.isOpen ? <FlexBox alignItems="center" borderRaduis="30px" padding="10px">
                        <Icon image={Think} alt="Think icon" />
                        <SpanText color="#ffffff" fontWeight="600">{item.head}</SpanText>
                        {item.isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </FlexBox>
                        : <AccordeonHeader>
                            <Icon image={Think} alt="Think icon" />
                            <SpanText color="#ffffff" fontWeight="600">{item.head}</SpanText>
                            {item.isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
                        </AccordeonHeader>}
                    {item.isOpen && <AccordeonBody>
                        <SpanText color="#ffffff" fontWeight="600">{item.body}</SpanText>
                    </AccordeonBody>}
                </AccordeonWrapper>)}
        </FlexBox >
    )
}
export default InfoBlock