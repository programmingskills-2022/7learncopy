import { gregorianToJalali } from "jalaali-js";

export const miladi2shamsi = (stringDate) => {
  var gregorianDate = new Date(stringDate);
  var jalaliDate = gregorianToJalali(
    gregorianDate.getFullYear(),
    gregorianDate.getMonth() + 1,
    gregorianDate.getDate()
  );
  jalaliDate = jalaliDate.join("/");
  return jalaliDate;
};
