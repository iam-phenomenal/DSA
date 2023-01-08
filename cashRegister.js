function cashReg(price, cash, cid){
    price = price * 100
    cash = cash * 100
    var change = cash - price
    var cashAvailable = 0

    for(var item of cid){
        cashAvailable += item[1] * 100
    }
    if(change === cashAvailable){
        return {status: closed, change: cid}
    }else if(change > cashAvailable){
        return {status: "INSUFFICIENT FUND", change: []}
    }else{
        var answer = []
        var money = {"PENNY": 1, "NICKEL": 5, "DIME": 10, "QUARTER": 25, 
        "ONE": 100, "FIVE": 500, "TEN": 1000, "TWENTY": 2000, "ONE HUNDRED": 10000}
        cid = cid.reverse()
        for(var item of cid){
            var outputChange = [item[0], 0]
            item[1] = item[1] * 100
            while (change >= money[item[0]] && item[1] > 0){
                change -= money[item[0]]
                item[1] -= money[item[0]]
                outputChange[1] += money[item[0]]/100
            }
            if(outputChange[1] > 0){
                answer.push(outputChange)
            }
        }
        if(change > 0){
            return {status: "INSUFFICIENT FUND", change: []}
        }
        return {status: "OPEN", change: answer}
    }
}

var testCID = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], 
["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
console.log(cashReg(19.5, 20, testCID))