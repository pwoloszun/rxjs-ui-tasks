import userEvent from '@testing-library/user-event';

import { expectElementsToContainTexts } from 'src/test-utils/assertions';

import {
  findSearchCard,
  findSearchFieldWithin,
  findSearchItemsWithin,
  querySearchItemsWithin,
  renderComponent
} from './specs/helpers';
import { searchApiServiceStub } from './specs/search-api-stub';

describe('[better helpers] LiveSearchPageComponent', () => {

  it('should render search results when user type search query', async () => {
    // given
    await renderComponent();
    const expectedResults = [
      'imba!',
      'batman',
      'smth else'
    ];
    searchApiServiceStub.setQueryResponse(expectedResults);

    // then
    const searchCard = await findSearchCard();
    const searchCtrl = await findSearchFieldWithin(searchCard);
    const searchResultsItems = await querySearchItemsWithin(searchCard);
    expectElementsToContainTexts(searchResultsItems, []);

    // when
    jest.useFakeTimers();
    userEvent.type(searchCtrl, 'abcdef');
    jest.advanceTimersByTime(14_000);

    // then
    const searchResultsItemsAfterSearch = await findSearchItemsWithin(searchCard);
    expectElementsToContainTexts(searchResultsItemsAfterSearch, expectedResults);
  });

});
