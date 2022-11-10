import { screen, within, render } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchApiService } from '@api/search-api.service';
import { CustomMaterialModule } from '@shared/custom-material';
import { ErrorModalModule } from '@shared/error-modal';
import { MySearchComponent } from '@features/flattening-operators/components/my-search/my-search.component';

import { searchApiServiceStub } from './search-api-stub';
import { LiveSearchPageComponent } from '../live-search-page.component';

export async function renderComponent() {
  return render(LiveSearchPageComponent, {
    providers: [
      { provide: SearchApiService, useValue: searchApiServiceStub },
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      // ui
      CustomMaterialModule,
      ErrorModalModule,
    ],
    declarations: [
      MySearchComponent,
    ],
  });
}

export async function findSearchCard() {
  return screen.findByRole('region', { name: 'Search Card', hidden: true });
}

export async function findSearchFieldWithin(searchContainer: HTMLElement) {
  return await within(searchContainer).findByLabelText('Search');
}

export async function querySearchItemsWithin(searchCard: HTMLElement) {
  const searchResultsList = await within(searchCard).findByRole('list', { name: 'Search results', hidden: true });
  return within(searchResultsList).queryAllByRole('listitem', { hidden: true });
}

export async function findSearchItemsWithin(searchCard: HTMLElement) {
  const searchResultsList = await within(searchCard).findByRole('list', { name: 'Search results', hidden: true });
  return within(searchResultsList).findAllByRole('listitem', { hidden: true });
}
