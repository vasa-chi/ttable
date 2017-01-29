import startOfMonth from "date-fns/start_of_month";
import addDays from "date-fns/add_days";

export function dates(month) {
  let current = startOfMonth(month);
  let result = [];
  while (current.getMonth() === month.getMonth()) {
    result.push(current);
    current = addDays(current, 1);
  }
  return result;
}
