import styled from 'styled-components';
import columnSize from './columnSize';

/**
 * width: (string | number) 0-12 width of column or min to take up as little space as possible
 */
const Column = styled.div`
  ${columnSize}
`;

/**
 * multiline: boolean (allow columns to wrap)
 * gapless?: boolean (removes all gaps between columns)
 * gap?: string (set gap between columns)
 */
const Columns = styled.div`
  display: flex;
  flex-wrap: ${({ multiline }) => (multiline ? 'wrap' : null)};

  margin: ${({ theme, gap, gapless }) => (gapless ? null : `-${gap || theme.defaults.columnGap}`)};

  & > ${Column} {
    padding: ${({ theme, gap, gapless }) => (gapless ? null : gap || theme.defaults.columnGap)};
  }
`;

Columns.Column = Column;

export default Columns;
