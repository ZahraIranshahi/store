const cutTitle = (title) => {
  const shortenTitle = title.split(" ");
  const newTitle = `${shortenTitle[0]} ${shortenTitle[1]}`;
  return newTitle;
};
const findItem = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};
const itemsCounter = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index !== -1) {
    return state.selectedItems[index].quantity;
  } else {
    return 0;
  }
};
export { cutTitle, findItem, itemsCounter };
