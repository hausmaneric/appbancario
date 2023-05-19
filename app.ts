abstract class Account{
    name: string
    accountNumber: number
    balance: number = 0

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit(){
        console.log("Você depositou")
    }

    withdraw(){
        console.log("Você sacou")
    }

    getValue(){
        console.log(this.balance)
    }  
}

class PeopleAccount extends Account{
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.doc_id = doc_id
    }
}

class CompanyAccount extends Account{

    constructor( name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan(){
        console.log("Você fez um emprestimo")
    }
    
    deposit(): void {
        console.log("A empresa depositou")   
    }
}

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Eric', 10)
const companyAccount: CompanyAccount = new CompanyAccount('Hausman', 20)
