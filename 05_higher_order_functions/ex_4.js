function transparentWrapping(f) {
  return function() {
    return f.apply(null, arguments);
  };
}
