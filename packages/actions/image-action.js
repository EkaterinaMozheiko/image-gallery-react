const uuid = () => String(Math.random().toString(8).slice(2));

export const addImage = (title, src) => {
  return {
    type: 'ADD_IMAGE',
    id: uuid(),
    title: title,
    src: src
  }
};

export const deleteImage = id => {
  return {
    type: 'DELETE_IMAGE',
    id: id
  }
};


