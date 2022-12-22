export function convertParamsToTitle(string) {
  let str = string.replace("/", "");
  str = str.replaceAll("-", " ");
  let convertToArray = str.toLowerCase().split(" ");
  let result = convertToArray.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

export const convertDate = (date) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const ArrayMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const w = weekday[new Date(date).getDay()];
  const d =
    new Date(date).getDate() < 10
      ? "0" + new Date(date).getDate()
      : new Date(date).getDate();
  const m =
    Number(new Date(date).getMonth()) + 1 < 10
      ? "0" + (Number(new Date(date).getMonth()) + 1)
      : Number(new Date(date).getMonth()) + 1;
  const y = new Date(date).getFullYear();
  const h = new Date(date).getHours();
  const mi =
    new Date(date).getMinutes() < 10
      ? "0" + new Date(date).getMinutes()
      : new Date(date).getMinutes();
  const s = new Date(date).getSeconds();
  const dateWithWeek = w + "," + " " + d + "/" + m + "/" + y;
  const dateNoWeek = d + "/" + m + "/" + y;
  const getDateInDate = new Date(date).getDate();
  const getFullYearInDate = new Date(date).getFullYear();
  const getMonthInDate = ArrayMonth[Number(new Date(date).getMonth())];
  const getDateAndMonthInDate = `${getDateInDate} ${getMonthInDate}`;
  const getFullInDate = `${getDateInDate} ${getMonthInDate} ${y}`;
  const getTimeInDate = `${h}:${mi}`;
  return {
    dateNoWeek,
    dateWithWeek,
    getDateInDate,
    getMonthInDate,
    getDateAndMonthInDate,
    getFullInDate,
    getTimeInDate,
    getFullYearInDate,
  };
};

export const getDateArray = function (start, end) {
  var arr = new Array();
  var dt = new Date(start);
  while (dt <= end) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }
  arr.push(new Date(end));
  return arr;
};

export const removeAccents = (str) => {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  str = str.replaceAll(",", "");
  str = str.replaceAll(":", "");
  str = str.replaceAll('"', "");
  str = str.replaceAll("&", "va");
  str = str.replaceAll(/\s/g, "-");
  str = str.replaceAll("-–-", "-");
  str = str.replaceAll("---", "-");
  return str.charAt(0).toLowerCase() + str.slice(1);
};


export const limitWord = (str, lim) => {
  return str.split(" ").slice(0, lim).join(" ") + " ...";
};
