import { ping } from './gtprobe-ping'

/** Probe module: bounces a counter back to gtprobe-ping until it reaches zero. */
export const pong = (remaining: number): number => {
  if (remaining === 0)
    return 0
  return ping(remaining - 1) + 1
}
