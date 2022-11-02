import { capitalize, map } from 'lodash';

interface IPathsData {
  path: string;
  localPaths: string[];
}

const APP_MAIN_MENU_PATHS: IPathsData[] = [
  {
    path: 'fundamentals',
    localPaths: [
      'dashboard',
      'observable-ui-events'
    ]
  },
  {
    path: 'combine-streams',
    localPaths: [
      'currency-exchange',
      'lazy-forex',
    ]
  },
  {
    path: 'flattening-operators',
    localPaths: [
      'download-catch-retry',
      'live-search'
    ]
  },
];

export const mainMenuSections = generateAppMainMenuSections(APP_MAIN_MENU_PATHS);

interface ILinkData {
  text: string;
  path: string;
}

export interface ISectionData {
  id: string;
  text: string;
  links: ILinkData[];
}

function generateAppMainMenuSections(paths: IPathsData[]): ISectionData[] {
  return map(paths, (item) => {
    const { localPaths, path } = item;
    return generateSection(path, localPaths);
  });
}

function generateSection(sectionPath: string, localPaths: string[]): ISectionData {
  const text = pathToName(sectionPath);
  const links = map(localPaths, (localPath) => {
    const text = pathToName(localPath);
    const path = `/${sectionPath}/${localPath}`;
    return { text, path };
  });

  return {
    id: sectionPath,
    text,
    links,
  };
}

function pathToName(path: string): string {
  return capitalize(path.split('-').join(' '));
}
