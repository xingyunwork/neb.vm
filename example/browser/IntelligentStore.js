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

    nvm.deploy(source, JSON.stringify([]));

    // addStore: function(name, photo, describe) {
    console.log(
        nvm.run(source, 'addStore', JSON.stringify(['name', 'photo', 'describe']) )
    );


}
