export class NewReimb {

    amount: number;
    description: string;
    receipt: string;
    reimb_type: string;

    constructor(
        amount: number, 
        description: string, 
        receipt: string,  
        reimb_type: string) 
    {
        this.amount = amount;
        this.description = description;
        this.receipt = receipt;
        this.reimb_type = reimb_type;
    }
}