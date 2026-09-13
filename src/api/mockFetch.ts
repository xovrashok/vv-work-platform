export const mockFetch = <T>(data: T): Promise<T> => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 500) + 300;

    setTimeout(() => {
      const isError = Math.random() < 0.15;

      if (isError) {
        reject(new Error("Помилка мережі. Спробуйте ще раз."));
      } else {
        resolve(data);
      }
    }, delay);
  });
};
