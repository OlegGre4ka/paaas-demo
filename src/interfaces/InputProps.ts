export interface InputProps {
    name: string;
    value: string;
    changeHandler: (e:React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    isBorderError?: boolean;
}