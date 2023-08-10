export type TextInputProps = {
  type?: string;
  modelValue: string;
  placeholder?: string;
  message?: string;
  iconPosition?: Position;
  size?: Size;
};
export enum Position {
  LEFT = "left",
  RIGHT = "right",
}
export enum Size {
  SMALL = "sm",
  MEDIUM = "md",
}
