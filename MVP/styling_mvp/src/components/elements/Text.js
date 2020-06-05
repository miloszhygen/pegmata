import styled from 'styled-components';
import { compose, space, color, typography } from 'styled-system';

const truncateStyles = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/**
 * truncate: boolean (allow text to be truncated with ellipsis. remember to set overflow to hidden on parent container)
 */
const Text = styled.p`
  word-break: break-word;

  ${({ truncate }) => (truncate ? truncateStyles : null)}

  ${compose(space, color, typography)}
`;

Text.propTypes;

export default Text;
