
function superbowlWin(record) {
   const win = record.find((date) => {
        if (date.result === 'W') {
            return date;
        } 

    });
    
    if (win === undefined) {
        return win;
    }
    //console.log(win.year);
    return win.year;


}

