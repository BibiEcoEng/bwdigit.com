const applyAsteriskBold = (text) => {
  if (text.startsWith('*') && text.endsWith('*')) {
    const clean = text.slice(1, -1);
    return <strong>{clean}</strong>;
  }
  return text;
};

export default applyAsteriskBold;
