import { FISHING, WISHING } from '../harbor_pastimes/harbor-pastimes-config'
import { FLIGHT } from '../harbor_flight/harbor-flight-config'

export function HarborHelp() {
  return (
    <>
      <dl className="harbor-key-guide">
        <dt>移动</dt><dd>WASD、方向键或左下角摇杆</dd>
        <dt>加速</dt><dd>按住 Shift</dd>
        <dt>跳跃</dt><dd>空格或触屏「跳跃」</dd>
        <dt>飞行</dt><dd>{FLIGHT.ui.keys}。触屏用飞行按钮、摇杆和升降按钮。</dd>
        <dt>环顾和缩放</dt><dd>横向拖动环绕，上下拖动俯仰。电脑可用滚轮缩放。</dd>
        <dt>查看地点</dt><dd>走进圆环提示范围后按 E 或点提示</dd>
        <dt>关闭面板</dt><dd>按 Esc、点关闭或走出范围</dd>
        <dt>地图、菜单</dt><dd>按 M 打开地图，选择地点后可传送或显示方向和距离。按 Esc 或点右上角「菜单」。</dd>
        <dt>视角、天气</dt><dd>按 V 切换视角，按 T 依次切换晴、雨和雪。</dd>
        <dt>{FISHING.title}</dt><dd>{FISHING.blurb} 按 E 或点「{FISHING.ui.reel}」，Esc 或「{FISHING.ui.exit}」退出。</dd>
        <dt>{WISHING.title}</dt><dd>{WISHING.blurb}</dd>
        <dt>航行</dt><dd>在南湾找船夫，可乘船游览或自己开船。按 W/S 控制油门，A/D 转向，靠近码头按 E 靠岸。</dd>
      </dl>
    </>
  )
}

