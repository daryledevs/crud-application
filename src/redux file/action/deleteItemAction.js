export default function deleteItem(state, action){
  const id = action.payload
  const delete_id = state.filter(find_ID => find_ID.id !== id);
  return delete_id
}