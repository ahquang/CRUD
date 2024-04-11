export const handleSaveData = (data) => {
  try {
    localStorage.setItem("dataList", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
