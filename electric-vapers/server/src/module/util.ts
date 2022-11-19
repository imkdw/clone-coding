export const snakeToCamel = (snake: string): string => {
  let item = snake;

  /** 단어에 _이 포함되면 계속 반복 */
  while (item.includes("_")) {
    const barIndex = item.indexOf("_"); // 언더바 위치
    item = item.replace("_", "");
    const left = item.slice(0, barIndex);
    let right = item.slice(barIndex);
    right = right.replace(right[0], right[0].toUpperCase());
    item = left + right;

    /** 더이상 언더바가 없다면 종료 */
    if (!item.includes("_")) {
      break;
    }
  }

  return item;
};
