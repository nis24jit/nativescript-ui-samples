import pieModelModule = require("../data-models/pie-data-model");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new pieModelModule.PieDataModel();
}