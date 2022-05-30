function getBotResponse(input) {
  if (input == "admission") {
    let result =
      "<a href='https://bvrit.ac.in/study/admission-process'>" +
      "click here to know about our admission policy!" +
      "</a>";
    return result;
  } else if (input == "holidays") {
    let ip =
      "<a href='https://bvrit.ac.in/study/academic-calendars'>" +
      "click here to know about holidays!" +
      "</a>";
    return ip;
  } else if (input == "existing") {
    let pf =
      "<a href='https://bvrit.edu.in/Default.aspx?ReturnUrl=%2f'>" +
      "click here if you are an existing student!" +
      "</a>";
    return pf;
  } else if (input == "scholarship") {
    let pf =
      "<a href='https://bvrit.ac.in/study/scholarships' >" +
      "click here to know about various scholarships provided in our college!" +
      "</a>";
    return pf;
  } else if (input == "departments") {
    let pf =
      "<a href='https://bvrit.ac.in/study/departments' >" +
      "click here to know about various departments in our college!" +
      "</a>";
    return pf;
  } else if (input == "placements") {
    let pf =
      "<a href='https://bvrit.ac.in/placements/training-and-placement-cell' >" +
      "click here to know about placements in our college!" +
      "</a>";
    return pf;
  } else if (input == "timetable") {
    let pf =
      "<a href='https://bvrit.ac.in/study/timetables' >" +
      "click here to know about the curriculum!" +
      "</a>";
    return pf;
  } else if (input == "hi") {
    let text =
      "Hello, please ensure that you type your query either in lower case or upper case!";
    return text;
  } else {
    textt = "thank you!";
    return textt;
  }
}
