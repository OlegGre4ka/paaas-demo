import { createSlice } from "@reduxjs/toolkit";
interface InfoData {
    id: number;
    head: string;
    body: string;
    isOpen: boolean | undefined;
}
interface AccordionData {
    accordionData: {[index: number]:InfoData};
}
const initialState: AccordionData = {
    accordionData: [
        {
            id: 1,
            head: "How long does loan certification take?",
            body: "There are two types of student loan certification: self certification and school certification. Self certification is performed by you. School certification is performed by your school’s financial aid office. Self certification is immediate. It is done after you’ve completed the Private Education Loan Applicant Self-Certification form. School certification usually takes between seven and ten days.",
            isOpen: undefined
        },
        {
            id: 2,
            head: "How does my loan get disbursed?",
            body: "Your loan is disbursed through your school. Generally, your school will give you your loan money in at least two payments called disbursements. In most cases, your school will give you your loan money at least once per term (semester, trimester, or quarter).",
            isOpen: undefined
        },
        {
            id: 3,
            head: "How long until I get the money?",
            body: "Loan funds are normally dispersed within seven to ten business days after loan certification.",
            isOpen: undefined
        },
    ]
};

const accordionSlice = createSlice({
    name: "accordion",
    initialState,
    reducers: {
        setAccordion: (state: AccordionData, action) => {
            state.accordionData = action.payload;
        },
        updateAccordion: (state:any, action) => {
            const id = action.payload;
            let infoElement = state.accordionData.find((el: InfoData) => el.id === id);
            infoElement.isOpen = !infoElement.isOpen;
            const filteredInfoData = state.accordionData.filter((el: InfoData) => el.id !== id)
            state.accordionData = [...filteredInfoData, { ...infoElement }].sort((a: InfoData, b: InfoData) => a.id - b.id);
        },
    }
});

const { actions, reducer } = accordionSlice;
export const {
    setAccordion, updateAccordion
} = actions;
export default reducer;

