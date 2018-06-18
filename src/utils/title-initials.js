export default function titleInitials(title) {
  try {
    if (title) {
      return title
        .split(' ')
        .map(word => word[0])
        .map(char => char.toUpperCase())
        .slice(0, 2)
        .join('');
    }
    return '🐶';
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
    return '🐶';
  }
}
