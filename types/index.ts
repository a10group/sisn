import { Option, Options } from "react-tailwindcss-select/dist/components/type";

export type SmallTitleProps = {
  title: string;
  icon?: React.ReactNode;
};

export type LogoVariantProps = {
  variant?: "dark" | "light";
};

export type AddNewButtonProps = {
  href: string;
  toolTipText: string;
};

export type FormSelectInputProps = {
  options: Options;
  label: string;
  option: Option;
  setOption: any;
  href?: string;
  labelShown?: boolean;
  toolTipText?: string;
};

export type MultipleImageInputProps = {
  label: string;
  files: FileProps[];
  setFiles: any;
  className?: string;
  endpoint?: any;
};

export type FileProps = {
  title: string;
  type: string;
  size: number;
  url: string;
};

export type TextInputProps = {
  register: any;
  errors: any;
  label: string;
  type?: string;
  name: string;
  toolTipText?: string;
  unit?: string;
  placeholder?: string;
  icon?: any;
  forgotPasswordLink?: string;
};

export type ImageInputProps = {
  title: string;
  imageUrls: string[];
  setImageUrls: any;
  endpoint: any;
  imageUrl: string;
  setImageUrl: any;
};

export type RadioOption = {
  label: string;
  id: string;
};

export type RadioInputProps = {
  radioOptions: RadioOption[];
  register: any;
  label: string;
  name: string;
  errors: any;
};

export type SubmitButtonProps = {
  title: string;
  loadingTitle?: string;
  className?: string;
  loaderIcon?: any;
  buttonIcon?: any;
  loading: boolean;
  showIcon?: boolean;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
};

export type TextAreaProps = {
  register: any;
  errors: any;
  label: string;
  name: string;
  helperText?: string;
};
