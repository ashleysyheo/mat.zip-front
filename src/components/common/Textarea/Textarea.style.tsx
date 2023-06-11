import { TextareaProps } from "./Textarea";

import styled, { css } from "styled-components";

const getVariantStyling = (isError: Required<TextareaProps>["isError"]) => {
  const style = {
    default: css`
      background-color: ${({ theme }) => theme.color.gray100};
      color: ${({ theme }) => theme.color.gray800};
      border: 1px solid ${({ theme }) => theme.color.gray100};
    `,
    error: css`
      background-color: ${({ theme }) => theme.color.redLight};
      color: ${({ theme }) => theme.color.gray800};
      border: 1px solid ${({ theme }) => theme.color.redDark};

      &:focus {
        border: 1px solid ${({ theme }) => theme.color.redDark};
        box-shadow: 0 0 0 3px ${({ theme }) => theme.color.redLight1};
      }
    `,
  };

  return isError ? style.error : style.default;
};

const getSizeStyling = (size: Required<TextareaProps>["$size"]) => {
  const style = {
    small: css`
      padding: 1.2rem;
      font-size: 1.4rem;
    `,
    medium: css`
      padding: 1.4rem;
      font-size: 1.6rem;
    `,
    large: css`
      padding: 1.6rem 1.4rem;
      font-size: 1.6rem;
    `,
  };

  return style[size];
};

export const Textarea = styled.textarea<TextareaProps>`
  min-height: 16rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  ${({ isError = false }) => getVariantStyling(isError)}
  ${({ $size = "medium" }) => getSizeStyling($size)}
  ${(props) => props.css}

  &:focus {
    outline: 0;
  }
`;

export const SupportingText = styled.p<TextareaProps>`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ theme, isError = false }) =>
    isError ? theme.color.redDark : theme.color.gray600};
`;