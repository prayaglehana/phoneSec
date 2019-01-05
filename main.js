
	   	if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            console.log('localhostconnect');
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
        

      person1="0x4e62e99a48d36afd4b21b814058e862fc6173f7f";
      person2="0xeb39080270d2b0ba478ceac400f1e9ed6a3b2739";

        
     curUser=web3.eth.accounts[0];
        
    
        var IMEI_Contracts = web3.eth.contract ([{"constant":false,"inputs":[{"name":"IMEI_NO","type":"string"}],"name":"buy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"IMEI_NO","type":"string"}],"name":"declineSell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"IMEI_NO","type":"string"}],"name":"initiateSell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"IMEI_NO","type":"string"}],"name":"registerPhone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"IMEI_NO","type":"string"}],"name":"reportLost","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"IMEI_NO","type":"string"}],"name":"returnHandNo","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"IMEI_NO","type":"string"}],"name":"returnLost","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"IMEI_NO","type":"string"}],"name":"returnOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"IMEI_NO","type":"string"}],"name":"returnSell","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"IMEI_NO","type":"string"}],"name":"returnTimeStamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]);
        //helo
        var IMEI_Contract= IMEI_Contracts.at('0xe3c97f6cf7436cb532b0787f6beb339d2e630a95');

     console.log(IMEI_Contract);



      
        
     $("#regme").click(function(){
       
        IMEI_Contract.registerPhone($("#IMEI_NO_input").val(), {from: curUser, gas: 3000000},
        function(err, res){
    
            if(!err){
                console.log("IMEI is register as owner being ");
              
            }
            else
                console.error('cannot register ');
        });
     
    });


    $("#initiate_sell").click(function(){

        IMEI_Contract.initiateSell($("#IMEI_NO_input").val(), {from: curUser, gas: 3000000},
        function(err, res){
    
            if(!err){
                console.log("Selling has been inititated");
              
            }
            else
                console.error('cannot inititate');
        });
     
    });

    $("#buy_").click(function(){

        IMEI_Contract.buy($("#IMEI_NO_input").val(), {from: curUser, gas: 3000000},
        function(err, res){
    
            if(!err){
                console.log("Phone has been buyed");
              
            }
            else
                console.error('cannot buy');
        });
     
    });

            
    $("#return_status").click(function(){
   
        IMEI_Contract.returnOwner($("#IMEI_NO_input").val(),{from: curUser, gas: 3000000},function(error, result){
            if(!error)
                {
                    $("#owner").html(result);
                }
        });
        IMEI_Contract.returnSell($("#IMEI_NO_input").val(),{from:curUser, gas: 3000000},function(error, result){
            if(!error)
                {
                 
                    $("#sell").html(result.toString());
                }
        });
        IMEI_Contract.returnHandNo($("#IMEI_NO_input").val(),{from: curUser, gas: 3000000},function(error, result){
            if(!error)
                {
                    $("#handNo").html(result.toString());
                }
        });
        IMEI_Contract.returnTimeStamp($("#IMEI_NO_input").val(),{from: curUser, gas: 3000000},function(error, result){
            if(!error)
                {   d = new Date(result*1000);
                    $("#timeStamp").html(d.toString());
                }
        });
     
    });
 