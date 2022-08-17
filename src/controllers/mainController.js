const path = require('path');
const fs = require('fs');

const nftFilePath = path.resolve(__dirname, '../data/nft.json');
const nft = JSON.parse(fs.readFileSync(nftFilePath, 'utf-8'));

const controladorMain ={
    index: (req,res)=>{
        res.render('index', {nft:nft})
    },
}

module.exports = controladorMain;