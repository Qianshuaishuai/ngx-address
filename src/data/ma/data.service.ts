import { IExternalData } from './../../components/interfaces/external-data';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DataType } from '../../components/interfaces/data-type'
import { Data } from '../../components/interfaces/data'
import { Subscriber } from "rxjs";

@Injectable()
export class AddressDataMaService implements IExternalData {

    constructor() {
    }

    private get provinces(): Data {
        return {
            type: DataType.list,
            list: [{"id":"1000","name":"槟榔屿"},{"id":"1003","name":"玻璃市"},{"id":"1007","name":"丁加奴"},{"id":"1015","name":"吉打"},{"id":"1025","name":"吉兰丹"},{"id":"1036","name":"吉隆坡"},{"id":"1038","name":"马六甲"},{"id":"1042","name":"纳闽"},{"id":"1045","name":"彭亨"},{"id":"1057","name":"霹雳"},{"id":"1066","name":"柔佛"},{"id":"1075","name":"森美兰"},{"id":"1083","name":"沙巴"},{"id":"1107","name":"沙捞越"},{"id":"1119","name":"雪兰莪"}]
        };
    };

    private get cities(): Array<any> {
        return [["1001","北海","1000"],["1002","槟城","1000"],["1004","大山脚","1000"],["1005","高渊","1000"],["1256","东北","1000"],["1257","西南","1000"],["1006","加央","1003"],["1008","甘马挽","1007"],["1009","瓜拉丁加奴","1007"],["1010","龙运","1007"],["1011","马江","1007"],["1012","实兆","1007"],["1013","乌鲁","1007"],["1014","勿述","1007"],["1016","巴东得腊","1015"],["1017","笨筒","1015"],["1018","浮罗交怡","1015"],["1019","哥打士打","1015"],["1020","古邦巴素","1015"],["1021","瓜拉姆达","1015"],["1022","华玲","1015"],["1023","居林","1015"],["1024","万拉峇鲁","1015"],["1243","铅埠","1015"],["1244","波各先那","1015"],["1245","锡","1015"],["1026","巴西富地","1025"],["1027","巴西马","1025"],["1028","丹那美拉","1025"],["1029","道北","1025"],["1030","登卓","1025"],["1031","哥打巴鲁","1025"],["1032","瓜拉吉赖","1025"],["1033","话望生","1025"],["1034","马樟","1025"],["1035","日里","1025"],["1246","哥登峇鲁","1025"],["1037","吉隆坡","1036"],["1039","马六甲市","1038"],["1040","亚罗牙也","1038"],["1041","野新","1038"],["1043","纳闽","1042"],["1044","维多利亚","1042"],["1046","百乐","1045"],["1047","北根","1045"],["1048","淡马鲁","1045"],["1049","而连突","1045"],["1050","关丹","1045"],["1051","金马仑高原","1045"],["1052","劳勿","1045"],["1053","立卑","1045"],["1054","马兰","1045"],["1055","文冬","1045"],["1056","云冰","1045"],["1058","安顺","1057"],["1059","丹绒马林","1057"],["1060","和丰","1057"],["1061","紅土坎","1057"],["1062","华都牙也","1057"],["1063","江沙","1057"],["1064","太平","1057"],["1065","怡保","1057"],["1247","金宝","1057"],["1248","马登峇当","1057"],["1249","近打","1057"],["1250","中霹雳","1057"],["1251","曼戎","1057"],["1252","拉律-马当","1057"],["1253","上霹雳","1057"],["1254","吉辇","1057"],["1255","下霹雳","1057"],["1067","笨珍","1066"],["1068","丰盛港","1066"],["1069","哥打丁宜","1066"],["1070","居銮","1066"],["1071","峇株巴辖","1066"],["1072","麻坡","1066"],["1073","昔加末","1066"],["1074","新山","1066"],["1241","礼让","1066"],["1242","古来再也","1066"],["1076","波德申","1075"],["1077","淡边","1075"],["1078","芙蓉","1075"],["1079","瓜拉庇劳","1075"],["1080","林茂","1075"],["1081","仁保","1075"],["1082","日叻务","1075"],["1084","吧巴","1083"],["1085","保佛","1083"],["1086","比鲁兰","1083"],["1087","必达士","1083"],["1088","兵南邦","1083"],["1089","担布南","1083"],["1090","丹南","1083"],["1091","斗湖","1083"],["1092","斗亚兰","1083"],["1093","哥打基纳巴鲁","1083"],["1094","哥打马鲁都","1083"],["1095","根地咬","1083"],["1096","古达","1083"],["1097","古打毛律","1083"],["1098","古纳","1083"],["1099","瓜拉班尤","1083"],["1100","京那巴登岸","1083"],["1101","兰脑","1083"],["1102","拿笃","1083"],["1103","纳巴湾","1083"],["1104","山打根","1083"],["1105","西比陶","1083"],["1106","仙本那","1083"],["1258","必打丹","1083"],["1259","丹革","1083"],["1108","古晋","1107"],["1109","加帛","1107"],["1110","林梦","1107"],["1111","美里","1107"],["1112","民都鲁","1107"],["1113","木胶","1107"],["1114","木中","1107"],["1115","三马拉汉","1107"],["1116","斯里阿曼","1107"],["1117","泗里街","1107"],["1118","泗务","1107"],["1220","达拉","1107"],["1221","马都","1107"],["1222","桑坡","1107"],["1223","如楼","1107"],["1224","达岛","1107"],["1225","实兰沟","1107"],["1226","马鲁迪","1107"],["1227","伦乐","1107"],["1228","老越","1107"],["1229","西连","1107"],["1230","阿沙再也","1107"],["1231","马拉东","1107"],["1232","砂拉卓","1107"],["1233","实文然","1107"],["1234","布拉加","1107"],["1235","巴干","1107"],["1236","拉老","1107"],["1237","鲁勃安都","1107"],["1238","加拿逸","1107"],["1239","石隆门","1107"],["1120","八打灵","1119"],["1121","鹅麦","1119"],["1122","瓜拉冷岳","1119"],["1123","瓜拉雪兰莪","1119"],["1124","沙白安南","1119"],["1125","乌鲁冷岳","1119"],["1126","乌鲁雪兰莪","1119"],["1127","雪邦","1119"],["1240","巴生","1119"]];
    }

    private cachedMap: any = {

    };

    public getTypes(): Array<string> {
        return [ '州', '市' ];
    }

    public getJumps(): Array<string> {
        return [];
    }

    public getData(index: number, id: string): Observable<Data> {
        return new Observable(observer => {
            if (index > 1) {
                observer.next(null);
                observer.complete();
                return;
            }
            if (!id) {
                observer.next(this.provinces);
                observer.complete();
                return;
            }

            let _c = this.cachedMap[id];
            if (!_c) {
                _c = {
                    type: DataType.list,
                    list: this.cities.filter((value, index) => {
                        return value[2] == id;
                    }).map(item => {
                        let res: any = {
                            id: item[0],
                            name: item[1]
                        };
                        if (item[3] === '3')
                            res.tips = true;
                        return res;
                    })
                };

                this.cachedMap[id] = _c;
            }

            observer.next(_c);
            observer.complete();
        });
    }

    public setAddress(data: any): Observable<string[]> {
        return new Observable(observer => {
            observer.next();
            observer.complete();
        });
    }

}

