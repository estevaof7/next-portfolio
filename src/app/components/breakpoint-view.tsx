export const BreakPointView = () => {
  return (
    <div className="fixed font-bold bottom-0 right-0 p-5 2xl:before:content-['2XL'] xl:before:content-['XL'] lg:before:content-['LG'] md:before:content-['MD'] sm:before:content-['SM'] before:content-['-640px']" />
  );
};

// export enum Responsividade {
//   EU = 'eu',
//   CLAUDE = 'claude',
//   GPT = 'gpt'
// }

// export const responsividade: Responsividade = Responsividade.CLAUDE;

// const divExample = () => (
//   <div
//     className={
//       '' +
//       (responsividade === Responsividade.EU ||
//       responsividade === Responsividade.GPT
//         ? 'rounded-full w-12 h-12 bg-secondary relative'
//         : '') +
//       (responsividade === Responsividade.CLAUDE
//         ? 'rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-secondary relative flex-shrink-0'
//         : '')
//     }
//   >
//     <h1
//       className={
//         '' +
//         (responsividade === Responsividade.EU
//           ? 'text-6xl border-b-2 pb-4'
//           : '') +
//         (responsividade === Responsividade.CLAUDE
//           ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl border-b-2 pb-2 sm:pb-4'
//           : '') +
//         (responsividade === Responsividade.GPT
//           ? 'text-4xl md:text-6xl border-b-2 pb-4'
//           : '')
//       }
//     ></h1>
//   </div>
// );
