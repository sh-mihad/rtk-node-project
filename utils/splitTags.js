const relatedVideosPath = (arr) => {
  const mapArr = arr.map((tag, index) => {
    const lastIndex = arr.length - 1;
    if (index !== lastIndex) {
      return `tags_like=${tag}&`;
    }
    return `tags_like=${tag} `;
  });

  return mapArr.join("");
};

module.exports = relatedVideosPath;
