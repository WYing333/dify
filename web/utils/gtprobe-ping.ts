import { pong } from './gtprobe-pong'

/** Probe module: bounces a counter to gtprobe-pong until it reaches zero. */
export const ping = (remaining: number): number => {
  if (remaining === 0)
    return 0
  return pong(remaining - 1) + 1
}
