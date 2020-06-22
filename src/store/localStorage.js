export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('app-state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('app-state', serializedState);
  } catch (error) {
    console.log('Failed to write to localStorage');
  }
};
