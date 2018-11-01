export const getActiveTabIndex = (navigationNodes, currenPathname) => {
  let filteredNodes = navigationNodes.filter(
    item => item.path === currenPathname
  );

  return filteredNodes.length
    ? filteredNodes[filteredNodes.length - 1].index
    : 0;
};
