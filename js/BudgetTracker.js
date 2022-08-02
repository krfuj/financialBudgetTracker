export default class BudgetTracker{
    constructor(querySelectorString){
        this.root = document.querySelector(querySelectorString);
        console.log(this.root);

    }
    /*return the actual html for the table*/
    static html(){

    }
    /*Return the html string for a single row inside a table*/
    static entryHtml(){

    }

    /*initial loading of the data*/
    load(){

    }
    /*Work out the total of all rows*/
    updateSummary(){

    }
    /*save all the data*/
    save(){

    }
    /*add new entry inside the table*/
    addEntry(entry = {}){

    }
    /*helper to retrun all/active rows in the table*/
    getEntryRows(){

    }

    /*add new entry on click*/
    onNewEntryBtnClick(){

    }
    /*delete data on click*/
    onDeleteEntryBtnClick(e){

    }
}