import { render, screen } from '@testing-library/angular'

import { DashboardPageComponent } from './dashboard-page.component';

describe('DashboardPageComponent', () => {

  it(`should have as title 'Dashboard'`, async () => {
    await render(DashboardPageComponent);
    const title = await screen.findByText(/Dashboard/i);
    expect(title).toBeInTheDocument();
  });

});
