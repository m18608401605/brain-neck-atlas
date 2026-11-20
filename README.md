# 脑与颈部血管｜交互解剖图谱

旋转、缩放并分层观察脑、脑干、颈椎、颅骨及头颈部动静脉。

## 在线查看

https://m18608401605.github.io/brain-neck-atlas/

- 电脑：拖动旋转，滚轮缩放。
- 手机：拖动旋转，双指缩放。
- 勾选或取消勾选图层可显示、隐藏结构。
- 页面提供 GLB 模型下载。

## 内容说明

这是成人参考解剖图谱，不是个人 MRI/CT 扫描，也不用于诊断。部分细小血管经过简化和加粗。身体不适请咨询专业医生。

## 来源与许可

- Z-Anatomy — The libre 3D atlas of anatomy — CC BY-SA 4.0。
- BodyParts3D — The Database Center for Life Science — CC BY-SA 2.1 Japan。
- 使用 [AHI 整理的图谱网格](https://lucaspalharesbarbosa.github.io/astronaut-health-intelligence-platform/data/anatomy-assets)，做了头颈部节选、重新配色和图层分组。衍生模型按 CC BY-SA 4.0 提供。
- [模型完整许可、来源及修改说明](docs/atlas/LICENSE.md)。
- Three.js 和 meshoptimizer 的许可随页面资源保留。

## 目录与部署

- `docs/`：可直接托管的全部静态页面和模型。
- `src/`：交互页面与模型组织源代码。
- GitHub Pages：从 `main` 分支的 `/docs` 目录发布，使用 `.nojekyll`。
- 所有页面资源使用相对路径，适用于 GitHub Pages 仓库子路径。

本地构建：`npm ci` 后运行 `npm run build`。
本地预览：`python3 -m http.server 8765 --directory docs`。
