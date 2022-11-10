
import {
  searchApiWill,
  searchPageShouldBeInitialized,
  searchPageShouldDisplayResults,
  userSearchesFor
} from './specs/dsl';
import { renderComponent } from './specs/helpers';

describe('[best DSL] LiveSearchPageComponent', () => {

  it('should render search results when user type search query', async () => {
    // given
    await renderComponent();
    const searchQuery = `abcdef`;
    const expectedSearchResults = [
      'imba!',
      'batman',
      'smth else'
    ];
    searchApiWill({
      expectToReceive: {
        url: `/api/search`,
        params: { q: searchQuery }
      },
      willRespondWith: expectedSearchResults
    });

    // then
    await searchPageShouldBeInitialized();

    // when
    jest.useFakeTimers();
    await userSearchesFor(searchQuery);
    jest.advanceTimersByTime(14_000);

    // then
    await searchPageShouldDisplayResults(expectedSearchResults);
  });

});

function mySetup() {

}
