import styled from "@emotion/styled";
import { colors } from "../../assets/colors";
import { typography } from "../../assets/typography";

function sizeStyles(size) {
  switch (size) {
    case "default":
      return `padding: 0.5rem 1rem;`;
    case "small":
      return `padding: 0.25rem 0.5rem;`;
    case "large":
      return `padding: 1rem 1.5rem;`;
    default:
      break;
  }
}

function variantStyles(type, background, shadow, colorText) {
  switch (type) {
    case "primary":
      return `
          color: ${colors.white};
          background-color: ${background ? `${background}BF` : colors.red[400]};
          ${typography.button}
          &:hover {
            background-color: ${background || colors.red[500]};
            transition: box-shadow .3s ease-out,background-color .3s ease-out,-webkit-box-shadow .3s ease-out;
            ${
              shadow
                ? `
            box-shadow: 0 2px 15.4px 0.6px ${
              background ? `${background}73` : colors.defaultPink
            };`
                : ""
            }
            
          }
          `;
    case "secondary":
      return `
        border-color: ${background || colors.red[400]};
        color: ${colorText};
        ${typography.button}
        background-color: transparent;
        &:hover {
          border-color: ${background ? `${background}BF` : colors.red[500]};
          background-color: ${
            background ? `${background}1A` : colors.shallowPink
          };
          color: ${colorText || colors.darkGray};
        }
          `;
    case "ghost":
      return `
        background-color: transparent;
        color: ${colors.defaultGray};
        ${typography.button}
        &:hover {
          color: ${colors.darkGray};
          background-color: ${
            background ? `${background}1A` : colors.shallowPink
          };
        }
          `;
    case "disabled":
      return `
        cursor: not-allowed;
        background-color: ${colors.shallowGray};
        color: ${colors.lightGray};
        ${typography.button}`;
    default:
      break;
  }
}

export const ButtonStyled = styled.button`
  width: fit-content;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  text-align: center;
  border: 1px solid transparent;

  .leftIcon{
    align-self: flex-start;
    // left: 0;
  }
  .rightIcon{
    align-self: flex-end;
    // right: 0;
  }
  .label{
    align-selsf: center;
  }
  ${(props) =>
    variantStyles(
      props.variant,
      props.background,
      props.shadow,
      props.colorText
    )}
  ${(props) => sizeStyles(props.size)})};
`;
