export default function updateItemStockAction(state, action){
  let duplicate = [...state]
  const updateArray = action.payload
  for(let i = 0; i < updateArray.length; i++){
    let {id, quantity} = updateArray[i];
    let existingItem = duplicate.find((find_id) => (find_id.id).toString() === id.toString());
    let total = existingItem.availableItem - quantity;
    let updateAvailableItem = {...existingItem, availableItem: total};
    duplicate[existingItem.id - 1] = updateAvailableItem;
  }
  return duplicate
}
