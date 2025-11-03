import { NodeComp, Size, Vec2 } from '@safe-engine/pixi'

export function calculateAngelInRadian(from: Vec2, to: Vec2): Float {
  const deltaX = to.x - from.x
  const deltaY = to.y - from.y
  const angle = Math.atan2(deltaY, deltaX)
  return angle
}

export function getWorldPosition(node: NodeComp): Vec2 {
  return node.convertToWorldSpaceAR(Vec2(node.position))
}

export function validNode(node: NodeComp): boolean {
  if (node && node.active) return true
  return false
}

export function SizeToVec2(winSize: Size): Vec2 {
  return Vec2(winSize.width, winSize.height)
}
