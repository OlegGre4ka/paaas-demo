import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { setAccordion, updateAccordion } from '../../../../redux/slices/accordionSlice';
import { FlexBox, SpanText } from "./../../../../components/shared-styled";
import { TipWrapper, TipHeader, TipBody, ArrowDownIcon, ArrowUpIcon, } from "./styled";
import { Accordion, AccordionSummary, AccordionDetails } from "./accordion-styled";
import { accordionStartData } from "./data";
import Icon from "./../../../../components/UI/Icon";
import Finger from "./../../../../assets/finger.png";
import Think from "./../../../../assets/think.png";
interface InfoData {
    id: number;
    head: string;
    body: string;
    isOpen: boolean | undefined;
}

const InfoBlock = () => {
    const { accordionData: infoData } = useAppSelector((state) => (state.accordion));
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            console.log("cleaned up");
            dispatch(setAccordion([...accordionStartData]));
        };
    }, [dispatch]);

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
            {infoData.map((item: InfoData) => <div style={{ marginTop: "15px" }} key={item.id} onClick={() => dispatch(updateAccordion(item.id))}>
                <Accordion>
                    <AccordionSummary>
                        <Icon image={Think} alt="Think icon" />
                        <SpanText color="#ffffff" fontWeight="600" marginTop="0px">{item.head}</SpanText>
                        {item.isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </AccordionSummary>
                    <AccordionDetails>
                        {item.body}
                    </AccordionDetails>
                </Accordion>
            </div>
            )}
        </FlexBox >
    )
}
export default InfoBlock