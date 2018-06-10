const imagesMethods = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return [{
        id: action.id,
        title: action.title,
        src: action.src,
      },
      ...state,
      ];
    case 'DELETE_IMAGE':
      return state.filter(image => image.id !== action.payload.id);

    default:
      return state || [];
  }
};

export default imagesMethods;
