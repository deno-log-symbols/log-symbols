// @ts-ignore allowing typedoc to build
import { colors } from "../deps.ts";

let supported = true;

// @ts-ignore allowing typedoc to build
if ((await Deno.permissions.query({ name: 'env' })).state === 'granted') {
  supported = supported &&
  // @ts-ignore allowing typedoc to build
  (!!Deno.env.get('CI') || Deno.env.get('TERM') === 'xterm-256color');
}

const main = {
  info: colors.blue('ℹ'),
  success: colors.green('✔'),
  warning: colors.yellow('⚠'),
  error: colors.red('✖'),
};

const fallbacks = {
  info: colors.blue('i'),
  success: colors.green('√'),
  warning: colors.yellow('‼'),
  error: colors.red('×'),
};

export const logSymbols = supported ? main : fallbacks;
