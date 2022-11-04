import { TestBed } from '@angular/core/testing';
// import { NgxsModule, Store } from '@ngxs/store';
// import { StateClass } from '@ngxs/store/internals';

interface IInitialState {
  [sliceId: string]: any;
}

const initialGlobalState: IInitialState = {};

interface CreateStoreParams {
  providers?: any[];
  imports?: any[];
}

export function createStore() { }

/*
export function createStore(
  stateClasses: StateClass[],
  initialState = initialGlobalState,
  params: Partial<CreateStoreParams> = {}
) {
  // const { // TODO
  //   imports = [],
  //   providers = []
  // } = params;

  TestBed.configureTestingModule({
    imports: [
      NgxsModule.forRoot(stateClasses),
    ]
  });
  const store = TestBed.inject(Store);
  store.reset({
    ...store.snapshot(),
    ...initialState,
  });
  return store;
}
 */
