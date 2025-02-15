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
      <H1>盖闻装修之道</H1>
      <P>
        <span className="inline-block">能监能验；能刚能柔；</span>
        <span className="inline-block">能争能让；能细能周。</span>
        <br />
        <span className="inline-block">守心如铁壁，算账若星筹；</span>
        <span className="inline-block">缜密如罗网，霹雳如雷飗。</span>
        <br />
        <span className="inline-block">预知建材之涨跌，先察工法之劣优；</span>
        <span className="inline-block">辨合同之陷阱，防奸商之诈谋。</span>
      </P>
      <P>
        <span className="inline-block">嗟彼无良工队，欺主昧幽；</span>
        <span className="inline-block">藏减料之伎俩，埋偷工于墙头；</span>
        <br />
        <span className="inline-block">瓷砖空鼓如蛙鸣，墙面开裂似蚓游；</span>
        <span className="inline-block">乳胶漆兑水半桶，电线管穿线三抽！</span>
      </P>
      <P>
        <span className="inline-block">哀哉懵懂业主，堕入阴沟；</span>
        <span className="inline-block">遭工长之糊弄，遇监理之忽悠；</span>
        <br />
        <span className="inline-block">工期拖延似瘸马，预算超支如瀑流；</span>
        <span className="inline-block">项目长推诿塞责，建材商趁火揩油！</span>
        <br />
        <span className="inline-block">业主心焦而目眩，妻儿怨叹而泪愁！</span>
        <span className="inline-block">弃满屋之废料，堆盈室之烦忧；</span>
        <span className="inline-block">惶惶焉怯亲朋之探问，戚戚然惧友邻之览楼！</span>
      </P>
      <P>
        <span className="inline-block">幸遇江江持炬，照迷雾于危舟；</span>
        <br />
        <span className="inline-block">持合同为铁券，录视频作兜鍪；</span>
        <span className="inline-block">验材料如观鼎，督工期似更筹；</span>
        <span className="inline-block">察报价之虚实，辨工艺乎劣优；</span>
        <span className="inline-block">破增项于未发，斩拖延在苗头。</span>
        <br />
        <span className="inline-block">晨昏战猾偷，昼夜破幽谋；</span>
        <span className="inline-block">工头闻风皆丧胆，奸商见影尽缩头！</span>
      </P>
      <P>
        呜呼！
        <span className="inline-block">吾匠艺精而器利，神工电掣而风扬；</span>
        <span className="inline-block">劈顽石成玉阙，夷颓壁作康庄；</span>
        <span className="inline-block">摧旧阁如齑粉，筑新居胜帝乡！</span>
        <br />
        <span className="inline-block">瓦刀落处星河转，墨斗弹时规矩张；</span>
        <span className="inline-block">吊顶若垂云列阵，铺砖似镜海流光；</span>
        <span className="inline-block">水电潜行如龙脉，漆彩腾辉胜霞芒；</span>
        <span className="inline-block">三通验收皆合契，九验监理尽伏降！</span>
        <br />
        <span className="inline-block">待他日陋室焕琼宇，且共君琼筵醉画堂！</span>
      </P>
      <Appreciate />
    </div>
  );
};
