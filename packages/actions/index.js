let nextImageBlock = 0;

export const addImage = (title, src) => ({
  type: 'ADD_IMAGE',
  id: nextImageBlock++,
  title,
  src
});

​
