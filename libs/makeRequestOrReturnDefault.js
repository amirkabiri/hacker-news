export default async function makeRequestOrReturnDefault(
  [requestFunc, ...args],
  defaultValue
) {
  try {
    const { data } = await requestFunc(...args);
    return data;
  } catch (e) {
    return defaultValue;
  }
}
