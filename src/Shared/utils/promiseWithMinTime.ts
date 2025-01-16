export default <T>(promise: Promise<T>, minTime: number): Promise<T> => {
  return Promise.all([
    promise,
    new Promise<void>((resolve) => setTimeout(resolve, minTime)),
  ]).then(([result]) => result)
}
