import { css, keyframes } from 'styled-components';

const BOUNCE_KEYFRAMES = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
`;

const FADE_IN_KEYFRAMES = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const BOUNCE_ANIMATION_CSS = css`${BOUNCE_KEYFRAMES} 1.19s ease-in-out infinite`;
const FADE_IN_ANIMATION_CSS = css`${FADE_IN_KEYFRAMES} 0.225s ease-in-out forwards`;

export {
  BOUNCE_ANIMATION_CSS,
  FADE_IN_ANIMATION_CSS
};