export default function getHostNameOfURL(url) {
  if (!(url instanceof URL)) {
    try {
      url = new URL(url);
    } catch (e) {
      return '';
    }
  }

  return url.host;
}
