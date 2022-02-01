import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";



const form = document.querySelector(".new-item-form") as HTMLFormElement;

const paymode = document.querySelector("#paymode") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list rendering
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e : Event)=>{

    let doc:HasFormatter;

    let values : [string,string,number];

    values = [tofrom.value, details.value, amount.valueAsNumber];

    e.preventDefault();

    if(paymode.value === 'invoice'){
        doc = new Invoice(...values);
    }else
    {
        doc = new Payment(...values);
    }

    list.render(doc,paymode.value,'end');
    

})