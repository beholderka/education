
export function getNode(id) {
  const node = document.getElementById(id);
  if (node) {
    return node;
  }
  return null;
}
