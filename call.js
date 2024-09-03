function setusername(username){
    // complex DB calls
    this.username = username
    console.log("called")
}


function createuser(username,email,password){
    setusername.call(this, username)

    this.email = email
    this.password = password
}
// only reference gaya hai function ka call nahi hua hai


const chai = new createuser("chai","@gmai.com","123")
console.log(chai);
