async function getUpdateWithImageFormData({ name, labelText, image }) {
  const body = new FormData();

  body.append("name", name);
  body.append("labelText", labelText);
  body.append("image", image[0]);
  return body;
}

export { getUpdateWithImageFormData };
