export const deleteImage = image => {
  alert (image.id);
  return {
    type: 'DELETE_IMAGE',
    payload: image
  }
};

export const addImage = (title, src) => {
    return {
      type: 'ADD_IMAGE',
      id: uuid.v4(),
      title,
      src
    }
};
