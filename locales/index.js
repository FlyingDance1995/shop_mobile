import vi from './vi';
import iviewVi from 'iview/dist/locale/vi-VN';
import en from './en';
import iviewEn from 'iview/dist/locale/en-US';

delete iviewVi.i.table.clearFilter;
iviewVi.i.table.clearFilter = 'Tất cả';

const appLocale = {
  'vi': Object.assign(vi, iviewVi),
  'en': Object.assign(en, iviewEn)
};

export default appLocale;
