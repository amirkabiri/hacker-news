import axios from '@/libs/axios';

export default function getTopStories() {
  return axios.get('topstories.json');
}
