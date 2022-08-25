export default function editItem(state, action){
  const duplicate_item = [...state];
  duplicate_item[action.payload.id - 1] = action.payload;
  return duplicate_item
}