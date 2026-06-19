import { Vec2 } from "@safe-engine/sdl";

export function SizeToVec2(winSize: Size): Vec2 {
  return Vec2(winSize.width, winSize.height)
}
