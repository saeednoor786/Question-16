
  /*Q:16 More Guests: You just found a bigger dinner table, so now more space is available. 
           Think of three more guests to invite to dinner.
    • Start with your program from Exercise 15. Add a print statement to the end of your program 
      informing people that you found a bigger dinner table.
    • Add one new guest to the beginning of your array.
    • Add one new guest to the middle of your array. 
    • Use append() to add one new guest to the end of your list. 
    • Print a new set of invitation messages, one for each person in your list.*/


    let Guest_list: string [] = ["salman", "ahmed","saeed",];

    console.log("\n NEW LIST OF INVITATION : \n")
    
    for (let b = 0; b < Guest_list.length; b++){
        console.log(`Dear ${Guest_list[b]} : \n you are invite to dinner! \n`);
    }
    console.log("GOOD NEWS! We've found a bigger dinner table now more space is available to dinner guest_list are: \n");
    
    Guest_list.unshift("Usama");
    Guest_list.splice(0,2, "Raheem");
    Guest_list.push("Noor");
    
    for (let c = 0; c < Guest_list.length; c++){
        console.log(`Dear ${Guest_list[c]} : \n you are invite to dinner! \n`);
    }
    
    















