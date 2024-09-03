class user {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username is ${this.username}`)
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    add(){
        console.log(`A new course added ${this.username}`)
    }
}

const chai = new teacher("chai", "@gmail.com", "123")


chai.add()

const tea = new user("tea")

tea.logme()

console.log(chai === tea)
// will print false

console.log(chai instanceof teacher);
// will print true


