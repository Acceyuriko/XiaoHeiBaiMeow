import Wechat from './assets/wechat.png';
import { Appreciate } from '@/components/appreciate';
import { H1, P, Ul, Li } from '@/components/text';

export const About = () => {
  return (
    <div className="flex animate-slide-up-big-in flex-col items-stretch p-5">
      <H1>关于我</H1>
      <P>
        <div className="flex flex-col justify-between md:flex-row">
          <Ul>
            <Li>🎂98年杭州/装修踩坑乐子人</Li>
            <Li>🎯挑战用国标精装/240平大宅</Li>
            <Li>👋做学习型业主反卷装修行业</Li>
          </Ul>
          <img className="w-40" src={Wechat} />
        </div>
      </P>
      <H1>窃谓夫为装者</H1>
      <P>
        能监能验；能刚能柔；能争能让；能细能周。
        <br />
        <span className="inline-block">守心如铁壁，算账若星筹；</span>
        <span className="inline-block">缜密如罗网，霹雳如雷飗。</span>
        <br />
        <span className="inline-block">预知建材之涨跌，先察工法之劣优；</span>
        <span className="inline-block">辨合同之陷阱，防奸商之诈谋。</span>
        <br />
        <span className="inline-block">嗟彼无良工队，欺主昧幽；</span>
        <span className="inline-block">藏减料之伎俩，埋偷工于墙头；</span>
        <br />
        <span className="inline-block">瓷砖空鼓如蛙鸣，墙面开裂似蚓游；</span>
        <span className="inline-block">乳胶漆兑水半桶，电线管穿线三抽！</span>
        <br />
        <span className="inline-block">哀哉懵懂业主，堕入阴沟；</span>
        <span className="inline-block">遭工长之糊弄，遇监理之忽悠；</span>
        <br />
        <span className="inline-block">工期拖延似瘸马，预算超支如瀑流；</span>
        <span className="inline-block">项目长推诿塞责，建材商趁火揩油！</span>
        <br />
        <span className="inline-block">业主心焦而目眩，妻儿怨叹而泪愁！</span>
        <span className="inline-block">弃满屋之废料，堆盈室之烦忧；</span>
        <span className="inline-block">无颜对亲朋之询问，何胆晒票圈之图楼！</span>
      </P>
      <P>
        <span className="inline-block">幸遇江江持炬，照迷雾于危舟；</span>
        <span className="inline-block">持合同为铁券，录视频作兜鍪；</span>
        <span className="inline-block">验材料如鉴宝，查进度似巡囚。</span>
        <br />
        <span className="inline-block">洞穿报价之虚实，明辨工艺之劣优；</span>
        <span className="inline-block">破增项之套路，斩拖延之由头。</span>
        <br />
        <span className="inline-block">晨昏斗鬼魅，昼夜破幽谋；</span>
        <span className="inline-block">工头闻风皆胆丧，奸商见影尽缩头！</span>
        <br />
        <span className="inline-block">终得见，陋室变华堂，锦幔映琼楼；</span>
        <span className="inline-block">笑唤旧日坑人者，且来观我凤凰丘！</span>
      </P>
      {/* <H1>沁园春·江江</H1>
      <P>
        半世奔波，半生积蓄，半壁残墙。
        <br />
        恨泥工怠惰，瓦刀生锈； 漆工敷衍，滚筒无浆。
        <br />
        项目经理，偷梁换柱，增项连环套路长。
        <br />
        寒灯下，算账单叠泪，愁断肝肠。
      </P>
      <P>
        江江妙计无双，引百万粉丝破雾障。
        <br />
        要合同钉钉，工钱后付； 验收步步，证据桩桩。
        <br />
        斗智晨昏，拆招日夜，材料甄别火眼强。
        <br />
        终得见，那新居焕彩，苦尽甘尝！
      </P> */}
      <Appreciate />
    </div>
  );
};
