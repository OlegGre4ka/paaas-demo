export interface InputProps {
    name: string;
    value: string;
    changeHandler: (e:any) => void;
    placeholder: string;
    isBorderError?: boolean;
}