import utils from '../utils';

export default function (context) {
  // Check params folder_id invalid
  let extendPath = context.route.fullPath.split(`/folders/${context.route.params.folder_id}`);

  if (!utils.isValidParamsFolder(context.route.params.folder_id)) {
    context.redirect(`/home`);
  }
  // End of check

  if (context.route.name) {
    if (validation[context.route.name]) {
      validation[context.route.name](context);
    }
  } else {
    context.redirect('/');
  }
}

// Redirect if route || params || query invalid.
const validation = {
  'index': ({redirect}) => {
    redirect(`/home`);
  },
  '': ({redirect}) => {
    redirect(`/home`);
  },
};
