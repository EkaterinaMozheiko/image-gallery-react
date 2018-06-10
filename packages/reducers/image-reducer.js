import items from './images'

const initialState = items;

const uuid = () => String(Math.random().toString(8).slice(2));

export default function images (state = initialState, action) {
  switch (action.type) {
    case 'ADD_IMAGE':
      return [{
        id: uuid(),
        title: action.title,
        src: action.src
      },
        ...state
      ];

    case 'DELETE_IMAGE':
      return state.filter(item => item.id !== action.id);

    default:
      return state;
  }
}