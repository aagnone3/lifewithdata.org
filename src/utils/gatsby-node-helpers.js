exports.removeTrailingSlash = path =>
  path === `/` ? path : path.replace(/\/$/, ``);

exports.getSlug = ({ slug, isPage }) => {
  if (isPage) {
    return `/${slug}`;
  }
  return `/blog/${slug}`;
};

exports.fileHasDatePrefix = slugFileName => {
  // TODO split via hyphens and test for %Y-%m-%d
  return slugFileName.length >= 10;
};