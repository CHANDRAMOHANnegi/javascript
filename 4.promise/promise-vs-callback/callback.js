var members = ["John Doe", "Sam Smith", "Allie Cartel"];

function addNewMember(newUser, callback) {
  setTimeout(function () {
    members.push(newUser);
    console.log("Member Added");
    callback();
  }, 200);
}

function getAllMembers() {
  setTimeout(function () {
    console.log("Members are:");
    console.log(members);
  }, 100);
}

addNewMember("Alpha", getAllMembers);
