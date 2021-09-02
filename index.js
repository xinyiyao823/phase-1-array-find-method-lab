
function superbowlWin(record) {
   const win = record.find((date) => {
        if (date.result === 'W') {
            console.log(`hi`);
            return date;
        } 

    });
    console.log(win);
    if (win === undefined) {
        return win;
    }
    //console.log(win.year);
    return win.year;


}

