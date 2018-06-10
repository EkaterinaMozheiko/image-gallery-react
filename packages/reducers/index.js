import { combineReducers } from 'redux';
import ImagesReducers from './images';

const allReducers = combineReducers({ images: ImagesReducers });

export default allReducers;
