export default function required (item, message){
  if (item === undefined) console.error(message)
  return item
}
