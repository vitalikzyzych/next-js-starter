import { library, config, IconPack } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';

import * as bciIcons from 'assets/svg/icons';

import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
export function setupFontAwesomeIcons() {
  library.add(far);
  library.add({ ...bciIcons } as IconPack);
}
