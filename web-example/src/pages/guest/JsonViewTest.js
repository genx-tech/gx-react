import React, { useState } from 'react';
import TestI18n from 'components/TestI18n';
import { NativeView } from '@genx/react/web';
import { JsonView, JsonViewFactory } from '@genx/react/common';
import {
    defaultInline,
    defaultRow,
    text,
    divider,
} from '@genx/react/common/builders';

const data = [
    {
        type: 'text',
        text: '根据制造图纸数据，设计确定；',
    },
    {
        type: 'divider',
    },
    {
        type: 'text',
        text: '1.1 冒口设计',
    },
    {
        type: 'divider',
    },
    {
        type: 'text',
        text: '1.2 选砂标准',
    },
    {
        type: 'text',
        text: '选用型砂 {{it.sandType}}',
    },
    {
        type: 'text',
        text: '型砂粒度选用 {{it.sandGranularity}}目。',
    },
    {
        type: 'divider',
    },
    {
        type: 'text',
        text: '1.3 砂型强度标准',
    },
    {
        type: 'text',
        text: '砂型强度标准 {{it.sandStrengthStandard}}MPa。',
    },
    {
        type: 'text',
        text: '落砂残留强度 {{it.sandStrengthLimit}}MPa。',
    },
    {
        type: 'divider',
    },
    {
        type: 'text',
        text: '1.4 浇注技术参数设定',
    },
    {
        type: 'text',
        text: '浇注温度参考计算公式得出浇铸温度标准：',
    },
    {
        type: 'text',
        text: 'T=1538-{70w[C]+8w[Si]+5w [Mn]+30w[p]+25w[S]+4w[Ni]+1.5w[Cr]}',
    },
    {
        type: 'text',
        text: '浇注温度 {{it.pouringTemperature}}℃。',
    },
    {
        type: 'divider',
    },
    {
        type: 'text',
        text: '1.5 砂箱保温静置参数设定',
    },

    {
        type: 'text',
        text: '浇注温度参考计算公式得出浇铸温度标准：',
    },
    {
        type: 'text',
        text: '根据产品结构分类，确定砂箱保温静置标准。参考依据；',
    },
    {
        type: 'text',
        text:
            '壁厚≤50mm，且重量≤1吨的铸件，浇注后静置5小时（夏季取上限，冬季取下限）；\n50mm＜壁厚≤100mm，且1吨＜重量≤2吨的铸件，浇注后静置5-8小时（夏季取上限，冬季取下限）；\n（其他情况根据实际情况确定合理的参数）',
    },
    {
        type: 'text',
        text: '浇注后静置 {{it.pouringCoolDownTime}}小时。',
    },
    {
        type: 'divider',
    },
    {
        type: 'text',
        text: '1.6 砂箱松卡参数设定（冬季要求，夏季要求）',
    },
    {
        type: 'text',
        text: '砂箱松卡，预定标准\n550°C - 600°C ',
    },
    {
        type: 'text',
        text: '砂箱松卡参数 {{it.sandboxLooseValue}}°C。',
    },
    {
        type: 'divider',
    },
    {
        type: 'text',
        text: '1.7 砂箱开箱要求',
    },
    {
        type: 'text',
        text: '参考依据:',
    },
    {
        type: 'text',
        text:
            '壁厚≤50mm，且重量≤1吨的铸件，一般在16-20小时后开箱落砂（夏季取上限，冬季取下限）；',
    },
    {
        type: 'text',
        text:
            '50mm＜壁厚≤100mm，且1吨＜重量≤2吨的铸件，一般在24-28小时后开箱落砂（夏季取上限，冬季取下限）；',
    },
    {
        type: 'text',
        text: '砂箱开箱 {{it.sandboxOpenTime}}小时。',
    },
    {
        type: 'divider',
    },
    {
        type: 'text',
        text: '1.8 铸件静置',
    },
    {
        type: 'text',
        text: '参考依据:',
    },
    {
        type: 'text',
        text:
            '砂箱开箱后，铸件静置至室温，根据工厂环境及气候因素时间为24-36小时（夏季取上限，冬季取下限）；',
    },
    {
        type: 'text',
        text: '铸件静置 {{it.castingCoolDownTime}}小时。',
    },
    {
        type: 'divider',
    },
    {
        type: 'text',
        text: '1.9 热处理参数设定',
    },
    {
        type: 'text',
        text: '参考依据:',
    },
    {
        type: 'text',
        text: '保温时间计算经验公式为：t=a×K×D',
    },
    {
        type: 'text',
        text:
            '公式中：\nt --保温时间（min）；\na--加热系数（min/mm）（一般为0.7-1）；\nK--工件加热时的修正系数（通常在1.0—1.6范围内）；\nD—工件的有效厚度（mm）；',
    },
    {
        type: 'text',
        text: '保温时间 {{it.heatPreservationTime}}小时。',
    },
    {
        type: 'divider',
    },
    {
        type: 'text',
        text: '1.10 水韧处理',
    },
    {
        type: 'text',
        text: '水韧处理参考计算公式得出工艺调整需求，根据需求设计工艺方法；',
    },
    {
        type: 'text',
        text: '1.10.1 水韧处理前工艺准备',
    },
    {
        type: 'text',
        text:
            '• 冷水量\n冷却水量与铸钢件的重量比要大于10：1，水深度至少达到3m。(使铸件入水后能够完全淹没)。\n• 冷却水循环速度\n 调整循环泵流速与流量，保证冷却水循环速度1m/s以上。',
    },
    {
        type: 'text',
        text: '冷却水初始温度 {{it.coolingWaterStartTemp}}℃。',
    },
    {
        type: 'text',
        text: ' 冷却水初始温度必须低于35℃。',
    },
    {
        type: 'text',
        text: '1.10.2 水韧处理温度控制',
    },
    {
        type: 'text',
        text:
            '• 铸件入水温度\n 960℃-980℃\n• 铸件急冷时间\n 25min-30min\n• 冷却过程水温控制',
    },
    {
        type: 'text',
        text: '冷却过程水温控制 {{it.coolingProcessTemperatureControl}}°C。',
    },
    {
        type: 'text',
        text:
            '38℃-45℃，若高于45℃，应加大循环泵流量和流速。\n• 铸件急冷后随槽冷却，过程中随时监控水温\n水温应低于45℃。',
    },
    {
        type: 'text',
        text: '出水温度 {{it.outOfWaterDegree}}°C。',
    },
    {
        type: 'text',
        text: '1.11 3D浇注模拟成型',
    },
    {
        type: 'divider',
    },
    {
        type: 'text',
        text: '1.12 不合格标准声明',
    },
];

const value = {
    sandType: '沙子',
    sandGranularity: '40-60',
    sandStrengthStandard: '大于0.65',
    sandStrengthLimit: '小于0.65',
    pouringTemperature: '800',
    pouringCoolDownTime: '26',
    sandboxLooseValue: '500~600',
    sandboxOpenTime: '26',
    castingCoolDownTime: '6',
    heatPreservationTime: '600~720',
    coolingWaterStartTemp: '30',
    coolingProcessTemperatureControl: '35',
    outOfWaterDegree: '20',
    failureHandling: '确认',
};

const factory = new JsonViewFactory({
    $inline: defaultInline,
    $row: defaultRow,
    text,
    divider,
});

export default function Router() {
    return (
        <div>
            <NativeView
                component={JsonView}
                initialProps={{ data, value, factory }}
            />
        </div>
    );
}
