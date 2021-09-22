import axios from '@/libs/axios';

export default function getItemByID(ID) {
  return axios.get(`item/${ID}.json`);
}
