/**
 * @param min - Minimum number for random
 * @param max - Maximum number for random
 * @return - Randommed number
 */
export function randomNumber(min: number, max: number): number {
  let random = min - 0.5 + Math.random() * (max - min + 1);
  random = Math.round(random);
  return random;
}

/**
 * @param array - Array for sort
 * @param by - Property to sort by
 * @return - Sorted by property array
 */
export function sortBy<T>(array: T | any, by: string): T {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j][by] > array[j + 1][by]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}
