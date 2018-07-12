import {expect} from 'chai';
import m from 'mocha';

import RPSModule from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('tabletojson', () => {

  m.it('should convert table from url', async function () {
    let md = new RPSModule;

    var url = 'https://www.dbs.com.sg/personal/rates-online/foreign-currency-foreign-exchange.page';

    let output = await md.tableFromUrl(new RpsContext,{},url);

    console.log(output);

  }).timeout(0);

})
