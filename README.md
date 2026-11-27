# NolanVideo | 诺兰电影级视频创作保姆级攻略

> 先做导演，再用 AI。 / Direct first. Generate second.

[在线导演工作台](https://aipmandy.github.io/NolanVideo/) · [12 章手册](docs/handbook.md) · [免费 PDF](docs/NolanVideo-Handbook.pdf) · [实战 Prompt](docs/production-playbook.md) · [导演 Skill](skills/nolan-video-director/SKILL.md) · [AI 酋长 Andy](https://metaver.vip/) · 微信 `AIPMAndy`

独立的开源学习项目，面向短视频、AI 教程、个人 IP 与品牌故事。研究 Christopher Nolan 及其合作者的公开创作经验，迁移为可执行的叙事、视听和制作流程。不是官方项目，不复制电影资产，不承诺流量。

## 立即使用

- 双击 `index.html` 即可使用离线导演工作台，无安装、无 API key、无账号。可选择线性、结果先行、双线交错，生成分镜计划并导出 Markdown/JSON。
- 或在项目根目录运行 `python3 -m http.server 8000`，打开 http://localhost:8000。
- 阅读 [12 章手册](docs/handbook.md) 和 [免费 PDF](docs/NolanVideo-Handbook.pdf)。
- 使用 [60 秒 AI 视频案例](examples/ai-video-60s.md) 或 [CSV 镜头表](examples/ai-video-60s.csv)。
- 把 [导演技能](skills/nolan-video-director/SKILL.md) 作为 AI 工作流指令；具体模型或 Agent 的安装方式以其自身文档为准。

## GitHub Pages

在线访问：[https://aipmandy.github.io/NolanVideo/](https://aipmandy.github.io/NolanVideo/)。自行部署时将仓库推送至 `main` 分支根目录，在 Settings → Pages 选择 Deploy from a branch → `main` / `(root)` → Save。

## 测试

`node --test tests/director.test.cjs`。测试时间分配、输入验证、结构与 Markdown 导出。另可手动在手机和桌面验证交互。

## 隐私与许可

工作台在本地浏览器生成确定性的拍摄计划，不调用模型、不发送输入、不跟踪。外部链接仅在点击时访问。软件与本项目原创内容采用 MIT 许可；参考链接中的第三方作品仍由其权利人拥有。无电影片段或原声随仓库发布。AI 工具、素材和配乐须另行核实许可。

## 作者品牌与联系

**AI 酋长 Andy · 星觉科技** — [在线导演工作台](https://aipmandy.github.io/NolanVideo/) · [个人官网](https://metaver.vip/) · [公司官网](https://www.a6no1.cn/) · [知识库](https://kb.metaver.vip/) · 微信 `AIPMAndy` · [GitHub](https://github.com/AIPMAndy)

## Roadmap

v0.1：课程、导演工作台、示例、导出、AI Skill、质检模板。后续：真实拍摄案例库、可复现镜头对比、时间线可编辑与素材管理。当前不是视频生成或剪辑引擎。

零基础第一条视频：[逐步实战与可复制 AI Prompt](docs/production-playbook.md)。
