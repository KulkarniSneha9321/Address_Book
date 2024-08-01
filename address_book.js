class User{
    constructor(id,firstName,lastName,email,phone,address){
        this.id = id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.phone=phone;
        this.address=address;
    }
}


let user1=new User(1,'Xx','Yy','xx.yy@gmail.com','1234567890','123 Main Road');
let user2=new User(2,'Aa','Bb','aa.bb@gmail.com','2345678901','234 Main Road');
let user3=new User(3,'Cc','Dd','cc.dd@gmail.com','3456789012','456 Main Road');
let user4=new User(4,'Ee','Ff','ee.ff@gmail.com','4567890123','789 Main Road');
let user5=new User(5,'Kk','Ll','kk.ll@gmail.com','5678901234','567 Main Road');

let addressbook=[user1,user2,user3,user4,user5];

//1. Create Function

function createUser(addressbook,user){
    addressbook.push(user);
    return addressbook;
}
let newUser = new User(6,'MM','Nn','mm.nn@gmail.com','6789012345','678 Main Road');
addressbook=createUser(addressbook, newUser);
console.log(addressbook);

//2. Read Function

//By id
function readUser(addressbook,userID){
    return addressbook.find(user => user.id == userID);
}
let user=readUser(addressbook,1);
console.log(user);

//By FirstName

function readUser(addressbook,userfirstname){
    return addressbook.find(user => user.firstName == userfirstname);
}
let user=readUser(addressbook,'Xx');
console.log(user);

//By LastName

function readUser(addressbook,userlastname){
    return addressbook.find(user => user.lastName == userlastname);
}
let user=readUser(addressbook,'Bb');
console.log(user);

//By Email

function readUser(addressbook,useremail){
    return addressbook.find(user => user.email == useremail);
}
let user=readUser(addressbook,'aa.bb@gmail.com');
console.log(user);

//By Phone Number

function readUser(addressbook,userphn){
    return addressbook.find(user => user.phone == userphn);
}
let user=readUser(addressbook,'1234567890');
console.log(user);

//By Address

function readUser(addressbook,useraddress){
    return addressbook.find(user => user.address == useraddress);
}
let user=readUser(addressbook,'123 Main Road');
console.log(user);

//3. Update Function 

function updateUser(addressbook, updateUser){
    const index = addressbook.findIndex(user => user.id === updateUser.id);
    if(index !== -1){
        addressbook[index] = updateUser;
    }
    return addressbook;
}
let updatedUser=new User(1,'Xx','Yy','xx.yy@gmail.com','0123456789','123 1st Cross');
addressbook=updateUser(addressbook,updatedUser);
console.log(addressbook);

//4. Delete User
function deleteUser(addressbook,userID){
    return addressbook.filter(user => user.id !== userID);
}
 addressbook=deleteUser(addressbook,1);
 console.log(addressbook);

//5. View All Users

 function viewallusers(addressbook){
    return addressbook;
 }

console.log(viewallusers(addressbook));

//6. Search Users

function searchusers(addressbook,searchItem){
    return addressbook.filter(user =>{
        return Object.values(user).some(value =>
            value.toString().toLowerCase().includes(searchItem.toLowerCase())
        );
    });
}

let founduser = searchusers(addressbook,'Aa');
console.log(founduser);

//7. Sort Users

function sortUsers(addressbook,parameter){
    return addressbook.sort((a,b) => {
        if (a[parameter]<b[parameter]) return -1;
        if (a[parameter]>b[parameter]) return 1;
        return 0;
    });
}

let sortedUsers = sortUsers(addressbook,'lastName');
console.log(sortedUsers);

