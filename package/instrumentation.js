import { nextView } from 'nextview-tracing';

export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    nextView('next-app!!');
  }
}

// export async function register() {
//   if (process.env.NEXT_RUNTIME === 'nodejs') {
//     await import('./instrumentation.node.ts');
//   }
// }
