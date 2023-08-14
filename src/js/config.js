export default {
  name: "Yatin", // actual name of the recipient (Mandatory)

  nickname: process.env.NICKNAME, // nickname(optional)

  pic: "sample-pic.jpeg", // image url of recipients (Mandatory)

  showScrollMsg: process.env.SCROLL_MSG, // set to false if you do not want the scrolling message

  birthDate: process.env.BIRTH_DATE, // Mention birthday date in YYYY-MM-DD format
};
