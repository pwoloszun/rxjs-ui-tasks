import { forEach } from 'lodash';
import { fakeAsync, tick } from '@angular/core/testing';
import { screen, within, render } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from '@shared/custom-material';
import { ErrorModalModule } from '@shared/error-modal';
import { SearchApiService } from '@api/search-api.service';

import { LiveSearchPageComponent } from './live-search-page.component';
import { MySearchComponent } from '../../components/my-search/my-search.component';
import { searchApiServiceStub } from './specs/search-api-stub';

describe('[naive] LiveSearchPageComponent', () => {

  it('should render search results when user type search query', async () => {
    // given
    await render(LiveSearchPageComponent, {
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
    const expectedResults = [
      'imba!',
      'batman',
      'smth else'
    ];
    searchApiServiceStub.setQueryResponse(expectedResults);

    // then
    const searchCard = await screen.findByRole('region', { name: 'Search Card', hidden: true });
    const searchField = await within(searchCard).findByLabelText('Search');
    const searchResultsList = await within(searchCard).findByRole('list', { name: 'Search results', hidden: true });
    const searchResultsItems = within(searchResultsList).queryAllByRole('listitem', { hidden: true });
    expect(searchResultsItems.length).toEqual(0);

    // when
    jest.useFakeTimers();
    userEvent.type(searchField, 'abcdef');
    jest.advanceTimersByTime(14_000);

    // then
    const searchResultsItemsAfter = await within(searchResultsList).findAllByRole('listitem', { hidden: true });
    expect(searchResultsItemsAfter.length).toEqual(expectedResults.length);
    forEach(expectedResults, (expResult, i) => {
      const listItem = searchResultsItemsAfter[i];
      expect(listItem).toHaveTextContent(expResult)
    });
  });

});
