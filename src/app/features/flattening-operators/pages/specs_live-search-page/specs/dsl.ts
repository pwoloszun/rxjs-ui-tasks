import userEvent from '@testing-library/user-event';

import { expectElementsToContainTexts } from 'src/test-utils/assertions';

import {
  findSearchCard,
  findSearchFieldWithin,
  findSearchItemsWithin,
  querySearchItemsWithin,
  renderComponent
} from './helpers';
import { searchApiServiceStub } from './search-api-stub';

interface ISearchApiParams {
  expectToReceive: {
    url: string;
    params?: Record<string, any>;
    method?: 'get' | 'post' | 'put' | 'delete' | 'patch'
  };

  willRespondWith: string[];
}

export function searchApiWill(params: ISearchApiParams) {
  const { expectToReceive, willRespondWith } = params;
  searchApiServiceStub.setQueryResponse(willRespondWith);
}

export async function searchPageShouldBeInitialized() {
  const searchCard = await findSearchCard();
  await findSearchFieldWithin(searchCard);
  const searchResultsItems = await querySearchItemsWithin(searchCard);
  expectElementsToContainTexts(searchResultsItems, []);
}

export async function searchPageShouldDisplayResults(expectedResults: string[]) {
  const searchCard = await findSearchCard();
  const searchResultsItems = await findSearchItemsWithin(searchCard);
  expectElementsToContainTexts(searchResultsItems, expectedResults);
}

export async function userSearchesFor(query: string) {
  const searchCard = await findSearchCard();
  const searchCtrl = await findSearchFieldWithin(searchCard);
  userEvent.type(searchCtrl, query);
}
