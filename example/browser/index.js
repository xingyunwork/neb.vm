const iframe = document.getElementById('contract');
iframe.onload = function () {
    let source = iframe.contentWindow.document.body.innerText;
    init(source);
};

function init(source) {

    var block = {
        timestamp: 0,
        height: 1
    };

    var transaction = {
        hash: "2933836c3a56ddd789464c7bd3fd92bdb1c974ac62f7b38a34bc48eb33679f52",
        from: "n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS",
        to: "n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS",
        value: "10",
        nonce: 1,
        timestamp: 1527077193,
        gasPrice: "1000000",
        gasLimit: "20000"
    };


    const nvm = new NVM(block, transaction);

    nvm.deploy(source, JSON.stringify([ '我的币','YXL', 2, 100]));

    console.log(
        nvm.run(source, 'totalSupply', JSON.stringify([]) )
    );


    // console.log(
    //     nvm.run(source, 'testVerifyAddress', JSON.stringify(['']) )
    // );


    // console.log(
    //     nvm.run(source, 'name', JSON.stringify([]) )
    // );
    //
    // console.log(
    //     nvm.run(source, 'balanceOf', JSON.stringify([transaction.from]) )
    // );
    //
    // nvm.run(source, 'transfer', JSON.stringify(['user0', 1000]) );
    //
    // console.log(
    //     nvm.run(source, 'balanceOf', JSON.stringify([transaction.from]) ),
    //     nvm.run(source, 'balanceOf', JSON.stringify(['user0']) )
    // );

}
