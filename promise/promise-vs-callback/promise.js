var members = ["John Doe", "Sam Smith", "Allie Cartel"];

async function addNewMember(newUser) {
    return new Promise(resolve => {
        setTimeout(function () {
            members.push(newUser);
            console.log("Member Added");
            resolve(members)
        }, 2000);
    })
}

// async function addNewMember(newUser) {
//     members = [...members, newUser]
//     return Promise.resolve(members).then(d => d)
//     // (resolve => {
//     // setTimeout(function () {
//     //     members.push(newUser);
//     //     console.log("Member Added");
//     //     resolve(members)
//     // }, 2000);
//     // })
// }

async function getAllMembers() {
    setTimeout(function () {
        console.log("Members are:");
        console.log(members);
    }, 1000);
}

addNewMember("Alpha").then(members => {
    console.log('members', members);
    getAllMembers()
});


