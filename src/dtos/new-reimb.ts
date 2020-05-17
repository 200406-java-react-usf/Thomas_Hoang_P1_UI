export class NewReimb {

    amount: number;
    submitted: string;
    description: string;
    receipt: string;
    author_first: string;
    author_last: string;
    reimb_type: string;

    constructor(
        amount: number, 
        submitted: string, 
        description: string, 
        receipt: string, 
        author_first: string, 
        author_last: string,  
        reimb_type: string) 
    {
        this.amount = amount;
        this.submitted = submitted;
        this.description = description;
        this.receipt = receipt;
        this.author_first = author_first;
        this.author_last = author_last;
        this.reimb_type = reimb_type;
    }
}