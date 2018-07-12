/**
 * @module tabletojson
 */

import tabletojson from 'tabletojson';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

let MOD_ID = "tabletojson"

@RpsModule(MOD_ID)
export default class RPSModule {

  @rpsAction({verbName:'convert-table-from-url'})
  tableFromUrl (ctx:RpsContext,opts:Object, url:string) : Promise<any>{
    return tabletojson.convertUrl(url);
  }

}
