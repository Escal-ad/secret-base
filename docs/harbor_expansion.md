# 渔港历史记录 · 扩展实施记录

本次采用西岸民居作为村长小屋，灯塔通过淡入淡出登塔，北岬长椅沿场景既有太阳方位取景，南湾绿船自动导览。「带我去」经淡入淡出抵达安全落点。

## 阶段 1 · 个人资料

| 文件 | 改动理由 |
| --- | --- |
| `harbor_profile.ts` | 集中姓名、岗位、简介、技能、邮箱、简历、链接和项目配置。 |
| `harbor-profile-content.tsx` | 复用三个村长小屋页签的内容和阅读内容，开发模式列出空字段。 |
| `harbor_resume.ts` | 检查目标静态资源确实返回 PDF，再启用下载。 |
| `harbor_site_header.tsx` | 顶栏从统一配置读取资料和简历状态。 |
| `harbor_contact_info.tsx` | 共用邮箱、复制结果和简介占位。 |
| `harbor_contact.ts`（移除） | 消除重复的联系资料来源。 |
| `harbor_artwork_dialog.tsx` | 复用已有面板承载村长小屋。 |
| `harbor_reading.tsx` | 将个人资料和新增地点纳入阅读目录与正文。 |
| `harbor_site.css` | 添加资料页签、占位及开发模式清单样式。 |
| `src/App.tsx` | 在通用入口挂载开发模式清单。 |

## 阶段 2–3 · 相机和灯塔

| 文件 | 改动理由 |
| --- | --- |
| `harbor_movement_config.ts` | 配置俯仰范围、灵敏度、视线阻尼及地表间距。 |
| `harbor_orbit_camera.ts` | 处理垂直环绕、障碍退让、地表间距和地标聚焦。 |
| `harbor_controls.ts` | 统一鼠标和触屏拖拽，按活动状态允许移动与环视。 |
| `harbor_player_motion.ts` | 接入连续地表高度及灯塔平台内外圈约束。 |
| `harbor_models.ts` | 调整灯塔环形平台和护栏，留出可走空间。 |
| `harbor_exploration_config.ts` | 集中灯塔、后村及落日参数和文案占位。 |
| `harbor_activities.ts` | 协调登塔、黄昏和游船的启动、更新与退出。 |
| `harbor-activity-hud.tsx` | 提供瞭望地标、观景结束及返航按钮。 |
| `harbor_scene_travel.ts` | 集中地点跳转、活动切换、按键退出和过场输入锁定。 |
| `harbor_travel.ts` | 让不同活动使用配置中的过场时长，保留减少动态效果分支。 |

## 阶段 4 · 后村与落日

| 文件 | 改动理由 |
| --- | --- |
| `harbor_terrain.ts` | 定义坡道和梯田地面高度，检查配置面积上限。 |
| `harbor_village_plan.ts` | 从同一梯田布局生成模型数据、房屋及树干碰撞体。 |
| `harbor_world.ts` | 给既有梯田接入坡道，按原有规则批量绘制新增静态物件。 |
| `harbor_new_landmarks.ts` | 增加坡道、围栏、长椅、路牌及对应碰撞。 |
| `harbor_forest_config.ts` | 指定树丛布局、调色和影子参数。 |
| `harbor_forest.ts` | 分块实例化树木，处理远景简化、实例预算和黄昏树影。 |
| `harbor_atmosphere.ts` | 插值黄昏光照、雾和太阳高度。 |
| `harbor_atmosphere_shaders.ts` | 输出黄昏色带、太阳圆盘和水面反光。 |
| `harbor_lighting_config.ts` | 增加各档降级提示。 |
| `harbor_render_quality.ts` | 接入动物、树木、影子、光束和尾迹的降级顺序。 |

## 阶段 5 · 小动物

| 文件 | 改动理由 |
| --- | --- |
| `harbor_animals_config.ts` | 配置猫狗的名字、身形、毛色、活动半径和数量。 |
| `harbor_animal_model.ts` | 程序化生成动物、名字牌、脚下阴影和心形。 |
| `harbor_animals.ts` | 复用陆地碰撞，处理游走、夜间休息、短距离跟随和抚摸。 |
| `harbor_actor_boxes.ts` | 合批绘制角色的同材质方块，同时保留关节动画。 |
| `harbor_avatar.ts` | 让主角和船夫共用人物结构，支持高度、坐姿和挥手。 |

## 阶段 6 · 船夫和导览

| 文件 | 改动理由 |
| --- | --- |
| `harbor_captain_config.ts` | 集中船夫外观、对话树、导览路线和停靠点讲解占位。 |
| `harbor_captain_model.ts` | 放置船夫模型及随船移动的夜灯。 |
| `harbor-captain-dialogue.tsx` | 通过现有面板显示逐字对话、推荐与地点选择。 |
| `harbor_visit_history.ts` | 记录访问并处理浏览器存储失败。 |
| `harbor_sailing.ts` | 在原有船体与碰撞逻辑上提供导览启停接口。 |
| `harbor_tour.ts` | 沿配置路线巡航、停留并发送到站和返航事件。 |
| `harbor_glow.ts` | 驱动船灯发光，避免在出发位置遗留固定光晕。 |
| `harbor_panel.tsx` | 允许船夫沿用淡入淡出面板并贴近屏幕底部。 |

## 场景接入

| 文件 | 改动理由 |
| --- | --- |
| `harbor_layout.ts` | 接入地点、坡道、复位点及动物使用的碰撞半径。 |
| `harbor_hotspots.ts` | 统一标识新增地点和互动类型。 |
| `harbor_hotspot_marker.ts` | 将地面提示圈放在对应地形高度上。 |
| `harbor_places_config.ts` | 配置新地点的标签、图标和世界锚点。 |
| `harbor_runtime.ts` | 接入新场景对象、活动状态和交互路由。 |
| `harbor_scene_session.ts` | 连接 WebGL 状态、访问记录和 React 面板。 |
| `pixel_harbor.tsx` | 将新互动、过场和退出方式挂到场景页面。 |
| `pixel_harbor.css` | 处理新面板及触控按钮布局、日夜对比度和减少动画。 |
| `harbor_help.tsx` | 更新俯仰与自动导览的使用说明。 |
| `README.md` | 同步操作和配置入口。 |

## 验收记录

- 桌面浏览器走通村长小屋三个页签、灯塔登降与地标聚焦、完整黄昏过渡和恢复日夜、船夫对话与地点传送、三站游船自动返航、游船复位和普通阅读。
- 在独立测试页为资料配置注入合成数据，验证顶栏、村长小屋与普通阅读共享数据、有效 PDF 响应启用下载、邮件写入剪贴板及项目跳转。
- 通过游戏的实际移动和碰撞模块验证坡道连续高度、梯田边界、灯塔平台边缘、相机隔离水面和建筑、猫抚摸反馈及动物降级。
- Chrome 触屏模拟 390 × 844 下验证纵向拖动、观景退出、导览退出和减少动态效果。此记录为浏览器模拟结果。
- Windows AMD Radeon / D3D11 抽样的桌面和触屏模拟场景均约 90 FPS。桌面 1280 × 720 夜间评测站附近 365–373 次绘制调用、16,256–16,352 个三角形。后村、瞭望平台与落日样本的绘制调用均低于 390 次。
