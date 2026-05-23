/** Brand mascot & brochure art (see public/assets/). */
export const brandAssets = {
  logo: 'assets/logo/nentropy-logo.svg',
  logoColor: 'assets/logo/Nentropy-full-color.svg',
  screenshot: 'assets/screenshot-platform.png',
  talisman: {
    burdened: 'assets/talisman/buried.png',
    calm: 'assets/talisman/thumbs.png',
    walk: 'assets/talisman/walk.png',
    scan: 'assets/talisman/scan.png',
    handshake: 'assets/talisman/handshake.png',
  },
  brochure: {
    chaos: 'assets/brochure/ifs-graphics/chaos.png',
    chain: 'assets/brochure/ifs-graphics/chain.png',
    digital: 'assets/brochure/ifs-graphics/digital.png',
    comply: 'assets/brochure/ifs-graphics/comply.png',
    passport: 'assets/brochure/ifs-graphics/passport.png',
    machine: 'assets/brochure/ifs-graphics/machine.png',
    promise: 'assets/brochure/ifs-graphics/promise.png',
  },
} as const;

export const solutionHeroImages: Record<string, string> = {
  eudr: brandAssets.brochure.chaos,
  ppwr: brandAssets.brochure.passport,
  'food-industry': brandAssets.brochure.comply,
  'supply-chain': brandAssets.brochure.chain,
  manufacturing: brandAssets.brochure.machine,
  'trade-warehousing': brandAssets.brochure.digital,
};
