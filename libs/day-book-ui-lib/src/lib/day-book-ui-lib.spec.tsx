import { render } from '@testing-library/react';

import DayBookUiLib from './day-book-ui-lib';

describe('DayBookUiLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DayBookUiLib />);
    expect(baseElement).toBeTruthy();
  });
});
