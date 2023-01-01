import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DayBookUiLibProps {}

const StyledDayBookUiLib = styled.div`
  color: pink;
`;

export function DayBookUiLib(props: DayBookUiLibProps) {
  return (
    <StyledDayBookUiLib>
      <h1>Welcome to DayBookUiLib!</h1>
    </StyledDayBookUiLib>
  );
}

export default DayBookUiLib;
