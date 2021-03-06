// //Employee in building or at desk Widget
//JQuery Test Edition
$(document).ready(function(){
  var url="data/employees.json";
  $.getJSON(url, function (response) {
    var statusHTML = '<ul class="bulleted">';
    $.each(response, function(index,employee){
      if (employee.inoffice === true) {
        statusHTML += '<li class="in">';
      }else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });// .each loop
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);
  });//end getJSON
});//end Document Ready

//Written with Javascript
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if(xhr.readyState === 4 && xhr.status === 200) {
//     var employees = JSON.parse(xhr.responseText);
//     var statusHTML = '<ul class="bulleted">';
//     for (var i=0; i<employees.length; i += 1) {
//       if (employees[i].inoffice === true) {
//         statusHTML += '<li class="in">';
//       } else {
//         statusHTML += '<li class="out">';
//       }
//       statusHTML += employees[i].name;
//       statusHTML += '</li>';
//     }
//     statusHTML += '</ul>';
//     document.getElementById('employeeList').innerHTML = statusHTML;
//   }
// };
// xhr.open('GET', 'data/employees.json');
// xhr.send();

//Room Request Widget
var roomRequest = new XMLHttpRequest();
roomRequest.onreadystatechange = function () {
  if(roomRequest.readyState === 4 && roomRequest.status === 200) {
    var rooms = JSON.parse(roomRequest.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
roomRequest.open('GET', 'data/rooms.json');
roomRequest.send();
