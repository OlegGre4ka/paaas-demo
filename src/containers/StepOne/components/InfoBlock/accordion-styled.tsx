import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion
    disableGutters
    elevation={0} square {...props}
  />
))(({ theme }) => ({
  // backgroundColor: "transparent",
  backgroundColor: "rgba(255,255,255,0.2)",
  border: "2px solid rgba(255,255,255,0.2)",
  color: "#ffffff",
  borderRadius: "30px",
  padding: "0px",
  '&.css-8p1etx-MuiButtonBase-root-MuiAccordionSummary-root': {
    padding: '0px',
    backgroundColor: 'orange',
  },
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />

))(({ theme }) => ({
  borderRadius: "30px",
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
    display: 'none'
  },
  '& .MuiAccordionSummary-content': {
    display: 'flex',
    alignItems: 'center',
    padding: '0px'
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "30px 40px",
  border: "none",
  borderRadius: '0 0 30px 30px',
  backgroundColor: "rgba(255,255,255,0.4)",
  fontWeight: "600",
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    display: 'none'
  },
}));

export { Accordion, AccordionSummary, AccordionDetails }