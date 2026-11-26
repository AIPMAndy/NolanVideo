(function(root){
  'use strict';
  const templates={
    linear:[['A','建立问题','中景','主角和任务','环境声','问题'],['A','交代障碍','近景','障碍与代价','动作声','障碍'],['A','展示行动','中近景／录屏','真实操作和选择','清晰对白、操作声','行动'],['A','验证结果','特写／录屏','真实证据、前后对照','短暂停顿','证据'],['A','回收与行动','中景','结果与下一步','自然收尾','回收']],
    reveal:[['B','结果线索','特写','结果或待验证的反常现象','半拍留白','问题'],['A','回到起点','中景','时间锚点和原始障碍','环境声','障碍'],['A','关键选择','中近景／录屏','实际操作和选择','真实操作声','行动'],['B','揭示与验证','特写／录屏','用原始素材验证因果','弱化音乐','证据'],['A+B','回收与行动','中景','回到开头问题并给出下一步','自然收尾','回收']],
    parallel:[['A','行动问题','中景','主角与目标','环境声','问题'],['B','证据线索','特写','当前可见证据或未知点','动作声','障碍'],['A','行动推进','中近景／录屏','关键选择与真实操作','清晰对白','行动'],['B','检验与转折','近景／录屏','对照证据、失败或改善','短暂留白','证据'],['A+B','双线汇合','中景','解释两条线的因果联系','自然收尾','回收']]
  };
  const modes={linear:'线性推进',reveal:'结果先行',parallel:'双线交错'};
  function validate(input){
    const b={}; for(const key of ['topic','audience','goal','obstacle','action','evidence']){b[key]=String(input[key]??'').trim();if(b[key].length>240)throw Error('每项最多 240 字');}
    for(const k of ['topic','goal','obstacle','action'])if(!b[k])throw Error('请填写主题、目标、障碍与行动。');
    b.duration=Number(input.duration); if(![15,30,60,90,120].includes(b.duration))throw Error('时长无效');
    b.mode=input.mode; if(!Object.hasOwn(templates,b.mode))throw Error('结构无效');
    b.aspect=input.aspect; if(!['9:16','16:9'].includes(b.aspect))throw Error('画幅无效');
    return b;
  }
  function makePlan(input){
    const b=validate(input), weights=[.10,.17,.30,.28,.15];let start=0;
    const evidence=b.evidence||'待补充真实证据；不得声称结果已验证';
    const contents={问题:`围绕「${b.topic}」，观众要看见的目标是：${b.goal}。`,障碍:`障碍：${b.obstacle}。`,行动:`真实行动：${b.action}。`,证据:`证据要求：${evidence}。`,回收:`回答开头问题，依据已核实结果解释是否达到「${b.goal}」，给出观众可执行的一步。`};
    const shots=templates[b.mode].map((t,i)=>{
      const end=i===4?b.duration:Math.round(b.duration*weights.slice(0,i+1).reduce((a,v)=>a+v,0));
      let shot={id:i+1,start,end,duration:end-start,line:t[0],beat:t[1],framing:t[2],visual:t[3]+'。'+contents[t[5]],sound:t[4],purpose:t[5],voiceover:i===0?`如何实现${b.goal}？`:i===4?'基于实际证据回答问题，不虚构结果。':contents[t[5]],continuity:b.aspect==='9:16'?'主体及关键信息在中心安全区域；保持人物、光源与道具一致。':'保留空间关系；保持人物、光源与道具一致。',material:i===3?'真实录屏、实拍或可信原始证据':'优先实拍／自有素材；合成则标注演示',check:i===3?'证据可读、可追溯；无证据则标明待验证。':'镜头推进信息或情绪；无无意义装饰。'};
      start=end;return shot;
    });
    return {version:'0.1.0',status:'制作计划，未拍摄或验证',brief:b,structure:modes[b.mode],evidenceStatus:b.evidence?'用户提供的待核实证据':'缺少证据，不可宣称已验证',shots,review:['真实证据与许可优先；合成内容明确标注','跳时有锚点，事实和观众所知信息一致','关键画面与字幕在手机上可读，声音清晰','每个镜头有必要性，连续性检查通过','结尾兑现问题；链接真实可访问','先试映，再只改一个变量做 A/B 实验']};
  }
  function markdown(plan){const b=plan.brief;return ['# '+b.topic+'｜导演制作计划','',plan.status,'',`- 观众：${b.audience||'待明确'}`,`- 目标：${b.goal}`,`- 障碍：${b.obstacle}`,`- 行动：${b.action}`,`- 证据：${b.evidence||'待补充'}`,`- 结构：${plan.structure} · ${b.duration}s · ${b.aspect}`,`- 证据状态：${plan.evidenceStatus}`,'','## 逐镜表','',...plan.shots.flatMap(s=>[`### ${s.id}. ${s.start}–${s.end}s | ${s.line} | ${s.beat}`,`- 景别：${s.framing}`,`- 画面：${s.visual}`,`- 口播草案：${s.voiceover}`,`- 声音：${s.sound}`,`- 素材：${s.material}`,`- 连续性：${s.continuity}`,`- 验收：${s.check}`,'']),'## 质检',...plan.review.map(x=>'- [ ] '+x),'','由 NolanVideo 导演工作台生成；需按真实素材进一步细化。'].join('\n');}
  const api={makePlan,markdown};if(typeof module==='object'&&module.exports)module.exports=api;else root.NolanDirector=api;
})(typeof globalThis==='object'?globalThis:this);
