import axios from 'axios';
import {ALL_CHARACTER} from '../../../utils/Constants';
export const getAllCharacter = () => {
    axios.get(ALL_CHARACTER)
}