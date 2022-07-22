import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { FlexBox, SpanText, ErrorText } from "../../../../components/shared-styled";
import Input from "./../../../../components/UI/Input";
import LoanSlider from "./styled";

const LoanComponent: React.FC = () => {
    const [sliderValue, setSliderValue] = useState(1000);
    const schema = yup.object().shape({
        amount: yup
            .string()
            .required()
            .test("amount", "Loans cannot be smaller than $1,000",
                (value: any, ctx) => {
                    return (
                        +value.substring(1).split(",").join("") > 1000
                    );
                }
            )
    });

    console.log(sliderValue, "Number(sliderValue)");
    return (
        <FlexBox flexDirection="column" justifyContent="center" width="100%" height="233px"
            margin="32px 0px 32px 0px" padding="40px" backgroundColor="#ffffff" borderRadius="16px">
            <Formik
                initialValues={{ amount: sliderValue }}
                validationSchema={schema}
                enableReinitialize
                validateOnChange
                onSubmit={values => {
                    console.log(values);
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isValid,
                    handleSubmit
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <FlexBox flexDirection="column" justifyContent="center" margin="0 0 16px 0" >
                            <SpanText>Loan Size</SpanText>
                            <Input
                                name="amount"
                                value={`$${Number(values.amount).toLocaleString('en-US')}`}
                                changeHandler={(e: any) => {
                                    handleChange(e);
                                    const targetValue = e.target.value;
                                    let currentNumberValue = targetValue.substring(1).split(",").join("");
                                    (currentNumberValue >= 500000 || sliderValue === 500000) ? setSliderValue(500000) : setSliderValue(+currentNumberValue);
                                }}
                                placeholder="Loan Size"
                                isBorderError={!!errors.amount}
                            />
                            <ErrorText>{errors.amount}</ErrorText>
                        </FlexBox>
                    </Form>
                )}
            </Formik>
            <LoanSlider
                onChange={(e: any, val: any) => { setSliderValue(val); console.log(val, "mouse-event") }}
                value={sliderValue}
                step={1}
                min={1000}
                max={500000}
            />
            <FlexBox justifyContent="space-between">
                <SpanText color="#000f2b4d">$1,000</SpanText>
                <SpanText color="#000f2b4d">$500,000</SpanText>
            </FlexBox>
        </FlexBox>
    )
}
export default LoanComponent