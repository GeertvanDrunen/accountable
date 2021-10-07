export const shuffleArray = (array: any[]) => {
  try {
    if (array instanceof Array) {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
      }

      return newArray;
    } else {
      console.error(
        'The shuffleArray function was attempted without providing an array',
      );
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
