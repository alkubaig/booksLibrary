const ErrorMsgs = {
  id:"",
  serialNum: "خانة أساسية، أدخل أرقام فقط",
  bookName: "خانة أساسية، أدخل حروف ومسافات",
  chapter: "فقط حروف ومسافات",
  topic: "فقط حروف ومسافات",
  author: "خانة أساسية، أدخل حروف ومسافات",
  editor: "فقط حروف ومسافات",
  publisher: "فقط حروف ومسافات",
  part:"أدخل أرقام ققط",
  year: "أدخل أربعة أرقام ققط",
  group:"فقط حروف ومسافات",
}


const Patterns = {
  id:"",
  serialNum: /^[0-9]+$/,
  bookName: /^[\u0621-\u064Aa-zA-Z][\u0621-\u064Aa-zA-Z\s]+$/,
  chapter: /^[\u0621-\u064Aa-zA-Z][\u0621-\u064Aa-zA-Z\s]*$/,
  topic: /^[\u0621-\u064Aa-zA-Z][\u0621-\u064Aa-zA-Z\s]*$/,
  author: /^[\u0621-\u064Aa-zA-Z][\u0621-\u064Aa-zA-Z\s]+$/,
  editor: /^[\u0621-\u064Aa-zA-Z][\u0621-\u064Aa-zA-Z\s]*$/,
  publisher: /^[\u0621-\u064Aa-zA-Z][\u0621-\u064Aa-zA-Z\s]*$/,
  part:/^[0-9]*$/,
  year: /^[0-9]{4}$/,
  group:/^[\u0621-\u064Aa-zA-Z][\u0621-\u064Aa-zA-Z\s]*$/
}

// const Patterns = {
//   id:"",
//   serialNum: "[0-9\u0660-\u0669]+",
//   bookName: "[\u0621-\u064Aa-zA-Z]+",
//   chapter: "[\u0621-\u064Aa-zA-Z]*",
//   topic: "[\u0621-\u064Aa-zA-Z]*",
//   author: "[\u0621-\u064Aa-zA-Z]+",
//   editor: "[\u0621-\u064Aa-zA-Z]*",
//   publisher: "[\u0621-\u064Aa-zA-Z]*",
//   part:"[0-9\u0660-\u0669]*",
//   year: "[0-9\u0660-\u0669]{4}",
//   group:"[\u0621-\u064Aa-zA-Z]*"
// }


module.exports = {ErrorMsgs,Patterns}
