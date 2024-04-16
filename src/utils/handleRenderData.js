export const handleRenderData = () => {
  try {
    const dataList = JSON.parse(localStorage.getItem("dataList"));
    if (dataList == null) {
      return undefined;
    }
    return dataList;
  } catch (error) {
    console.log(error);
  }
};
