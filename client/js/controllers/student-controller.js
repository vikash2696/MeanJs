// app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resource) {
//   var Meetup = $resource('/api/meetups');

  // Meetup.query(function (results) {
  //   $scope.meetups = results;
  // });

//   $scope.meetups = []

//   $scope.createMeetup = function () {
//     var meetup = new Meetup();
//     meetup.name = $scope.meetupName;
//     meetup.$save(function (result) {
//       $scope.meetups.push(result);
//       $scope.meetupName = '';
//     });
//   }
// }]);

app.controller('studentController',['$scope','$resource',
  function  ($scope,$resource) {
  // body...
  var Student = $resource('/api/student');

  // $scope.studentList = [
  //   {name:"Hello this is first"},
  //   {name: "This is second"}
  // ]
   Student.query(function (results) {
    $scope.studentList = results;
  });
$scope.studentList = [];
  $scope.createStudent = function (argument) {
    // body...
    var studentList = new Student();
    studentList.name = $scope.studentName;
    studentList.$save(function(result){
      console.log(result);
      $scope.studentList.push(result);
      $scope.studentName='';
    });
    // $scope.studentList.push({name: $scope.studentName});
    // $scope.studentName = '';
  }
}]);
// function studentController($scope) {
//   // body...
//   $scope.studentList = [
//     {name:"Hello this is first"},
//     {name: "This is second"}
//   ]

//   $scope.createStudent = function (argument) {
//     // body...
//     $scope.studentList.push({name: $scope.studentName});
//     $scope.studentName = '';
//   }
// }