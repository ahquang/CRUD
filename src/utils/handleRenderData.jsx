export const handleRenderData = (data) => {
  try {
    const dataList = JSON.parse(localStorage.getItem("dataList"));
    if (data === null) {
      return undefined;
    }
    return dataList;
  } catch (error) {
    console.log(error);
  }
};
